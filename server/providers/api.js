require("dotenv").config();
const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const expiresToken = "12h";
const logger = require("./config/logger");
const request = require("request");
const fs = require("fs");
const sha1 = require("sha1");
const stripe = require("stripe")(process.env.stripe_key);
const jwt = require("jsonwebtoken");
const auth = require("./config/auth");

module.exports = router;

var connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.getConnection(function (err, conn) {
  console.log(err);
  console.log(conn);
});

/* GET api listing. */
router.get("/", (req, res) => {
  // res.send("api works");
});

router.post("/login", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      return res.json(err);
    }
    conn.query(
      "select * from users WHERE email=? AND password=?",
      [req.body.email, sha1(req.body.password)],
      function (err, rows, fields) {
        conn.release();
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        }

        if (rows.length > 0) {
          if (req.body.verified) {
            const token = jwt.sign(
              {
                user: {
                  id: rows[0].id,
                  admin_id: rows[0].admin_id ? rows[0].admin_id : rows[0].id,
                  firstname: rows[0].firstname,
                  lastname: rows[0].lastname,
                  type: rows[0].type,
                },
                email: rows[0].email,
              },
              process.env.TOKEN_KEY,
              {
                expiresIn: expiresToken,
              }
            );
            logger.log(
              "info",
              `USER: ${
                req.body.email
              } is LOGIN first time without verification at ${new Date().toDateString()}.`
            );
            return res.json({
              token: token,
            });
          } else if (rows[0].active && rows[0].verified) {
            const token = jwt.sign(
              {
                user: {
                  id: rows[0].id,
                  admin_id: rows[0].admin_id ? rows[0].admin_id : rows[0].id,
                  firstname: rows[0].firstname,
                  lastname: rows[0].lastname,
                  type: rows[0].type,
                },
                email: rows[0].email,
              },
              process.env.TOKEN_KEY,
              {
                expiresIn: expiresToken,
              }
            );
            logger.log(
              "info",
              `USER: ${req.body.email} is LOGIN at ${new Date()}.`
            );
            return res.json({
              token: token,
            });
          } else if (!rows[0].verified) {
            return res.json({
              type: "verified",
              value: 0,
            });
          } else if (!rows[0].active) {
            return res.json({
              type: "active",
              value: 0,
            });
          }
        } else {
          return res.json({
            type: "exist",
            value: 0,
          });
        }
      }
    );
  });
});

// PROFILE INFO
router.get("/getProfileInfo", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users where id = ?",
          [req.user.user.id],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/saveProfileInfo", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    const query = prepareProperty(req.body);
    console.log(query);

    conn.query(
      "update users set " + query + " where id = ?",
      [req.user.user.id],
      function (err, rows, fields) {
        conn.release();
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        } else {
          res.json(true);
        }
      }
    );
  });
});

//END PROFILE INFO

router.get("/checkReservedAppointments/:storeId", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from tasks t where CAST(t.start as DATE) >= CAST(CURRENT_TIMESTAMP AS DATE) and storeId = ? order by CAST(t.start AS DATE) asc",
          [req.params.storeId],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get("/checkUser/:value", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from customers where email = ? or mobile = ? or telephone = ?",
          [req.params.value, req.params.value, req.params.value],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/pay", (req, res, next) => {
  stripe.paymentIntents.create(
    {
      amount: req.body.price * 100,
      currency: "EUR",
      description: req.body.description,
      automatic_payment_methods: { enabled: true },
      application_fee_amount: req.body.price * 100 * 0.01,
      confirm: true,
      payment_method: "pm_card_visa",
      return_url: "https://google.com",
    },
    {
      stripeAccount: req.body.stripeId,
    },
    (err, charge) => {
      if (err) {
        res.json(false);
      } else {
        res.json(true);
      }
    }
  );
});

router.get("/getStripeId/:superadmin", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select stripe_id from users_superadmin where sha1(id) = ?",
          [req.params.superadmin],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get("/getLocations/:superadmin", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from store where allowed_online = 1 and sha1(superadmin) = ?",
          [req.params.superadmin],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get("/getAllTerminsForStore/:storeId", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from store s join users u on s.id = u.storeId join worktimes w on u.id = w.user_id where s.id = ? and u.allowed_online = 1 order by w.validate_from asc",
          [req.params.storeId],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get("/getHolidaysForClinic/:id", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from store_holidayTemplate sh join holidays h on sh.templateId = h.templateId where (sha1(h.superAdminId) = ? or sha1(sh.superadminId) = ?) and CAST(h.StartTime as DATE) >= CAST(CURRENT_TIMESTAMP AS DATE)",
          [req.params.id, req.params.id],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get(
  "/checkTermineStillAvailable/:reservationTime/:store/:userId",
  async (req, res, next) => {
    try {
      connection.getConnection(function (err, conn) {
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        } else {
          conn.query(
            "select * from tasks where start like ? and storeId = ? and creator_id = ?",
            [req.params.reservationTime, req.params.store, req.params.userId],
            function (err, rows, fields) {
              conn.release();
              if (err) {
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(err);
              } else {
                res.json(rows);
              }
            }
          );
        }
      });
    } catch (ex) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(ex);
    }
  }
);

router.post("/createAppointment", function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    var data = {
      creator_id: req.body.calendar.user_id,
      customer_id: req.body.personal.id,
      title: req.body.personal.lastname + " " + req.body.personal.firstname,
      colorTask: 12,
      start: req.body.calendar.date,
      end: req.body.calendar.end,
      telephone: req.body.personal.phone,
      therapy_id: 0,
      superadmin: 4,
      confirm: 1,
      online: 1,
      paid: req.body.calendar.token ? req.body.calendar.token.created : 0,
      amount: req.body.calendar.amount,
    };
    if (req.body.calendar.location.id !== undefined) {
      data["storeId"] = req.body.calendar.location.id;
    }
    conn.query("insert into tasks SET ?", data, function (err, rows) {
      conn.release();
      if (!err) {
        res.json(true);
      } else {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(false);
      }
    });
  });
});

router.post("/createPatient", function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.mobile = copyValue(req.body.phone);
    delete req.body.phone;
    (req.body.shortname = req.body.lastname + " " + req.body.firstname),
      (req.body.password = sha1(generateRandomPassword()));

    conn.query("insert into customers SET ?", [req.body], function (err, rows) {
      conn.release();
      if (!err) {
        res.json(rows.insertId);
      } else {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(false);
      }
    });
  });
});

router.get("/getBookingSettings/:superadminId", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from booking_settings where sha1(superadmin_id) = ?",
          [req.params.superadminId],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get("/getUsers", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users",
          req.params.category,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

//worktime

router.post("/setWorktime", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.location_id = req.user.user.id;
    req.body.value = convertToString(req.body.value);

    if (req.body.id) {
      conn.query(
        "update worktimes set ? where id = ?",
        [req.body, req.body.id],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    } else {
      conn.query(
        "insert into worktimes SET ?",
        [req.body],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    }
  });
});

router.get("/getWorktime", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from worktimes where location_id = ?",
          req.user.user.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

//end worktime

// LOCATIONS

function convertWorkTimesToObject(rows) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].worktime_from = convertToObject(rows[i].worktime_from);
    rows[i].worktime_to = convertToObject(rows[i].worktime_to);
  }
  console.log(rows);
  return rows;
}

router.get("/getMyLocations", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from locations where admin_id = ?",
          req.user.user.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              rows = convertWorkTimesToObject(rows);
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/setLocation", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.id;
    req.body.worktime_from = convertToString(req.body.worktime_from);
    req.body.worktime_to = convertToString(req.body.worktime_to);

    if (req.body.id) {
      conn.query(
        "update locations set ? where id = ?",
        [req.body, req.body.id],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    } else {
      conn.query(
        "insert into locations SET ?",
        [req.body],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    }
  });
});

router.post("/deleteLocation", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from locations where id = ?",
      [req.body.id],
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(true);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//END LOCATIONS

//services
router.get("/getMyServices", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from services where admin_id = ?",
          req.user.user.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              rows = convertWorkTimesToObject(rows);
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/setService", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.id;

    if (req.body.id) {
      conn.query(
        "update services set ? where id = ?",
        [req.body, req.body.id],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    } else {
      conn.query(
        "insert into services SET ?",
        [req.body],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    }
  });
});

router.post("/deleteService", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from services where id = ?",
      [req.body.id],
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(true);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//end services

//EMPLOYEE
router.get("/getMyEmployees", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users where admin_id = ?",
          req.user.user.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/setEmployee", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.id;

    if (req.body.id) {
      conn.query(
        "update users set ? where id = ? and admin_id = ?",
        [req.body, req.body.id, req.user.user.id],
        function (err, rows) {
          conn.release();
          if (!err) {
            res.json(true);
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    } else {
      // insert new employee
      //check if email exists
      conn.query(
        "select * from users where email = ?",
        [req.body.email],
        function (err, rows) {
          if (!err) {
            if (rows.length) {
              conn.release();
              res.json(false);
            } else {
              req.body.type = 3;
              req.body.password = sha1(req.body.password);
              conn.query(
                "insert into users SET ?",
                [req.body],
                function (err, rows) {
                  conn.release();
                  if (!err) {
                    res.json(true);
                  } else {
                    logger.log("error", err.sql + ". " + err.sqlMessage);
                    res.json(false);
                  }
                }
              );
            }
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    }
  });
});

router.post("/deleteEmployee", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from users where id = ? and admin_id = ?",
      [req.body.id, req.user.user.id],
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(true);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//END EMPLOYEE

//EXTERNAL API
router.get("/getExternalAccount", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from external_accounts where admin_id = ?",
          req.user.user.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

//END EXTERNAL API

// CALENDARS

router.get("/getAdminLocations", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from locations where admin_id = ?",
          [req.user.user.admin_id],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.get("/getAdminEmployees", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users where admin_id = ?",
          [req.user.user.admin_id],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

//END CALENDARS

function generateRandomPassword() {
  return Math.random().toString(36).slice(-8);
}

function copyValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function convertToString(value) {
  return JSON.stringify(value);
}

function convertToObject(value) {
  if (value && value.indexOf("{") != -1) {
    return JSON.parse(value);
  }
  return value;
}

function prepareProperty(property) {
  let query = "";
  let index = 0;
  let array = Object.entries(property);
  for (const [key, value] of array) {
    query += key + "='" + value + "'";
    index++;
    if (index < array.length) {
      query += ", ";
    }
  }
  return query;
}
