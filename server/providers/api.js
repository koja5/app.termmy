require("dotenv").config();
const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const expiresToken = "12h";
const logger = require("./config/logger");
const request = require("request");
const fs = require("fs");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const auth = require("./config/auth");
const sql = require("./config/sql-database");
const uuid = require("uuid");
const cryptoJS = require("crypto-js");

module.exports = router;

var connection = sql.connect();

connection.getConnection(function (err, conn) {});

/* GET api listing. */
router.get("/", (req, res) => {
  // res.send("api works");
});

// #region AUTH
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

router.post("/signUp", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from users where email in (select email from clients where email = ?) or email = ?",
      [req.body.email, req.body.email],
      function (err, rows, fields) {
        console.log(rows);
        if (!rows.length) {
          delete req.body.rePassword;
          req.body.password = setSha1Password(req.body.password);
          req.body.type = 1;
          req.body.id = uuid.v4();
          req.body.admin_id = req.body.id;
          conn.query(
            "insert into users set ?",
            [req.body],
            function (err, rows, fields) {
              conn.release();
              if (err) {
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(false);
              } else {
                var options = prepareOptionsForRequest(
                  req.body,
                  "mail-server/verifyEmailAddress"
                );
                console.log(options);
                makeRequest(options, res);
              }
            }
          );
        } else {
          conn.release();
          res.json(false);
        }
      }
    );
  });
});

router.get("/verifiedMailAndActive/:email", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "update users set verified = 1, active = 1 where sha1(email) = ?",
          [req.params.email],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.redirect(
                process.env.link_client +
                  "auth/verified-mail/" +
                  req.params.email
              );
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

router.get("/checkIfMailVerified/:email", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users where sha1(email) = ?",
          [req.params.email],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              if (rows.length) {
                if (rows[0].verified) {
                  res.json(true);
                } else {
                  res.json(false);
                }
              } else {
                res.json(false);
              }
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

router.get("/checkIfMailExists/:email", async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users where sha1(email) = ?",
          [req.params.email],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              if (rows.length) {
                res.json(true);
              } else {
                res.json(false);
              }
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

router.post("/forgotPassword", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from users where email = ?",
      [req.body.email],
      function (err, rows, fields) {
        conn.release();
        if (rows.length) {
          var options = prepareOptionsForRequest(
            req.body,
            "mail-server/resetPasswordLink"
          );
          makeRequest(options, res);
        } else {
          // mail not exists
          res.json(false);
        }
      }
    );
  });
});

router.post("/resetPassword", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "update users set password = ? where sha1(email) = ?",
      [sha1(req.body.password), req.body.email],
      function (err, rows, fields) {
        conn.release();
        if (err) {
          res.json(true);
        }

        res.json(true);
      }
    );
  });
});

router.post("/changePassword", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from users where password = ? and email = ?",
      [sha1(req.body.oldPassword), req.user.email],
      function (err, rows, fields) {
        if (err) {
          res.json(true);
        } else {
          console.log(rows.length);
          if (rows.length) {
            conn.query(
              "update users set password = ? where email = ?",
              [sha1(req.body.newPassword), req.user.email],
              function (err, rows, fields) {
                conn.release();
                if (err) {
                  res.json(false);
                } else {
                  res.json(true);
                }
              }
            );
          } else {
            conn.release();
            res.json(false);
          }
        }
      }
    );
  });
});

router.post("/createRecommendedBonus", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    const data = {
      user_id: req.body.id,
      bonus: 100,
      creation_date: new Date(),
    };

    conn.query(
      "insert into recommended_bonus set ?",
      [data],
      function (err, rows, fields) {
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        } else {
          conn.query(
            "select * from users where id = ?",
            [req.body.id],
            function (err, rows, fields) {
              conn.release();
              if (err) {
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(err);
              } else {
                var options = prepareOptionsForRequest(
                  { email: rows[0].email },
                  "mail-server/sendSmsBonusInfo"
                );
                makeRequest(options, res);
              }
            }
          );
        }
      }
    );
  });
});

router.get("/getRecommendedBonus", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from recommended_bonus where user_id = ?",
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
  });
});

router.get("/validateRecommenedBonusLink/:id", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from users where id = ?",
      [req.params.id],
      function (err, rows, fields) {
        conn.release();
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        } else {
          if (rows.length) {
            res.json(true);
          } else {
            res.json(false);
          }
        }
      }
    );
  });
});

router.post("/pickUpSmsBonus", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "update recommended_bonus set utilized = 1 where user_id = ? and utilized = 0",
      [req.user.user.id],
      function (err, rows, fields) {
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        } else {
          const smsBonus = rows.affectedRows * 100;
          conn.query(
            "update sms_count set count = count + ?  where admin_id = ?",
            [smsBonus, req.user.user.admin_id],
            function (err, rows, fields) {
              conn.release();
              if (err) {
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(err);
              } else {
                res.json(true);
              }
            }
          );
        }
      }
    );
  });
});

// #endregion

// #region PROFILE INFO
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

// #endregion PROFILE INFO

//#region USERS

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

//#endregion

// #region WORKTIME

router.post("/setWorktime", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.user_id = req.user.user.id;
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

router.get("/getMyWorktime", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from worktimes where user_id = ?",
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

router.get("/getWorktimeForEmployee/:id", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from worktimes where user_id = ?",
          req.params.id,
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

// #endregion WORKTIME

// #region LOCATIONS

function convertWorkTimesToObject(rows) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].worktime_from = convertToObject(rows[i].worktime_from);
    rows[i].worktime_to = convertToObject(rows[i].worktime_to);
  }
  return rows;
}

router.get("/getUserLocation", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select l.* from locations l join users u on l.id = u.location_id where u.id = ?",
          [req.user.user.id],
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

    req.body.admin_id = req.user.user.admin_id;
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

// #endregion LOCATIONS

// #region SERVICES
router.get("/getMyServices", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from services where admin_id = ?",
          req.user.user.admin_id,
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

    req.body.admin_id = req.user.user.admin_id;

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

// #endregion services

// #region EMPLOYEE
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

    req.body.admin_id = req.user.user.admin_id;

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
      [req.body.id, req.user.user.admin_id],
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

router.get(
  "/getEmployeesForLocation/:location",
  auth,
  async (req, res, next) => {
    try {
      connection.getConnection(function (err, conn) {
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        } else {
          conn.query(
            "select * from users where location_id = ? and admin_id = ?",
            [req.params.location, req.user.user.admin_id],
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

//#endregion EMPLOYEE

// #region CLIENTS
router.get("/getMyClients", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from clients where admin_id = ?",
          req.user.user.admin_id,
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

router.post("/setClient", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.admin_id;

    if (req.body.id) {
      conn.query(
        "update clients set ? where id = ? and admin_id = ?",
        [req.body, req.body.id, req.user.user.admin_id],
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
        "select * from clients where email = ?",
        [req.body.email],
        function (err, rows) {
          if (!err) {
            if (rows.length) {
              conn.release();
              res.json(false);
            } else {
              conn.query(
                "insert into clients SET ?",
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

router.post("/deleteClient", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from clients where id = ? and admin_id = ?",
      [req.body.id, req.user.user.admin_id],
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

//#endregion CLIENTS

// #region EXTERNAL API
router.get("/getExternalAccounts", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from external_accounts where user_id = ?",
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

router.get("/getExternalAccountAdmin", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from external_accounts_admin where admin_id = ?",
          req.user.user.admin_id,
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

router.post("/getExternalAccountsForMultiCalendar", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    const condition = packStringFromArrayForWhereCondition(
      req.body,
      false,
      "user_id",
      "or"
    );

    conn.query(
      "select * from external_accounts where " + condition,
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(rows);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

// #endregion EXTERNAL API

// #region CALENDARS

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

router.get("/getAdminEmployees/:id", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from users where location_id = ?",
          [req.params.id],
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

router.get("/getCalendarRights", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from user_rights where user_id = ?",
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

// #endregion CALENDARS

// #region SMS PACKAGES
router.get("/getSmsPackages", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query("select * from sms_packages", function (err, rows, fields) {
          conn.release();
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(err);
          } else {
            rows = convertWorkTimesToObject(rows);
            res.json(rows);
          }
        });
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/setSmsPackage", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    if (req.body.id) {
      conn.query(
        "update sms_packages set ? where id = ?",
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
        "insert into sms_packages SET ?",
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

router.post("/deleteSmsPackage", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from sms_packages where id = ? and admin_id = ?",
      [req.body.id, req.user.user.admin_id],
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

router.get("/getMySmsPayments", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from sms_payments where admin_id = ?",
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

router.post("/createSmsPayment", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    const date = {
      admin_id: req.user.user.admin_id,
      count: req.body.count,
      price: req.body.price,
      date: new Date(),
    };

    conn.query("insert into sms_payments SET ?", [date], function (err, rows) {
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

router.get("/getNumberOfSms", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from sms_count where admin_id = ?",
      [req.user.user.admin_id],
      function (err, rows) {
        if (!err) {
          res.json(rows);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

router.post("/updateNumberOfSms", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.admin_id;

    conn.query(
      "select * from sms_count where admin_id = ?",
      [req.body.admin_id],
      function (err, rows) {
        if (!err) {
          if (rows.length) {
            req.body.count += rows[0].count;
            conn.query(
              "update sms_count set ? where admin_id = ?",
              [req.body, req.body.admin_id],
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
              "insert into sms_count SET ?",
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
  });
});

// #endregion SMS PACKAGES

//#region NOTIFICATION

router.get("/getReminderNotification", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from notifications where admin_id = ?",
      [req.user.user.admin_id],
      function (err, rows) {
        conn.release();
        if (!err) {
          if (rows.length) {
            res.json(rows);
          } else {
            res.json({});
          }
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json({});
        }
      }
    );
  });
});

router.post("/setReminderNotification", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.admin_id;

    if (req.body.id) {
      conn.query(
        "update notifications set reminder_type = ? where admin_id = ?",
        [req.body.reminder_type, req.user.user.admin_id],
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
        "insert into notifications SET ?",
        [req.body],
        function (err, rows) {
          conn.release();
          if (!err) {
            console.log(rows);
            res.json({ insertId: 1 });
          } else {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(false);
          }
        }
      );
    }
  });
});

router.post("/setSmsReminderNotification", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    if (!req.body.id) {
      req.body.id = uuid.v4();
    }

    req.body.admin_id = req.user.user.admin_id;

    conn.query(
      "INSERT INTO notifications set ? ON DUPLICATE KEY UPDATE ?",
      [req.body, req.body],
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(req.body.id);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//#endregion

//#region GatewayCountryPrefix
router.get("/getGatewayCountryPrefix", function (req, res) {
  var gatewayCountryPrefix = fs
    .readFileSync(
      "./providers/mail_server/sms_config/gateway-country-prefix.json"
    )
    .toString();

  res.json(JSON.parse(gatewayCountryPrefix));
});

router.post("/setGatewayCountryPrefix", auth, function (req, res) {
  var gatewayCountryPrefix = JSON.parse(
    fs
      .readFileSync(
        "./providers/mail_server/sms_config/gateway-country-prefix.json"
      )
      .toString()
  );

  let ind = 1;

  // update if exists
  for (let i = 0; i < gatewayCountryPrefix.length; i++) {
    if (gatewayCountryPrefix[i].id == req.body.id) {
      gatewayCountryPrefix[i] = req.body;
      ind = 0;
      break;
    }
  }

  // insert if not exists
  if (ind) {
    req.body.id = uuid.v4();
    gatewayCountryPrefix.push(req.body);
  }

  fs.writeFileSync(
    "./providers/mail_server/sms_config/gateway-country-prefix.json",
    JSON.stringify(gatewayCountryPrefix)
  );
  res.json(true);
});

router.post("/deleteGatewayCountryPrefix", auth, function (req, res) {
  var gatewayCountryPrefix = JSON.parse(
    fs
      .readFileSync(
        "./providers/mail_server/sms_config/gateway-country-prefix.json"
      )
      .toString()
  );

  for (let i = 0; i < gatewayCountryPrefix.length; i++) {
    if (gatewayCountryPrefix[i].id == req.body.id) {
      gatewayCountryPrefix.splice(i, 1);
      break;
    }
  }

  fs.writeFileSync(
    "./providers/mail_server/sms_config/gateway-country-prefix.json",
    JSON.stringify(gatewayCountryPrefix)
  );

  res.json(true);
});

//#endregion

//#region LICENSES
router.get("/getMyLicense", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select u.*, l.monthly_price, l.annual_price, l.name from user_license u join licenses l on u.license_id = l.id where admin_id = ?",
      [req.user.user.admin_id],
      function (err, rows) {
        conn.release();
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        }
        res.json(rows);
      }
    );
  });
});

router.post("/updateLicense", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    const value = JSON.parse(
      cryptoJS.AES.decrypt(req.body.value, process.env.ENCRIPTY_KEY).toString(
        cryptoJS.enc.Utf8
      )
    );

    conn.query(
      "update user_license set expiry_date = ?, license_id = ? where admin_id = ?",
      [value.expiry_date, value.license_id, req.user.user.admin_id],
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

router.post("/cancelSubscription", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "update user_license set license_id = ?, expiry_date = null where admin_id = ?",
      [req.body.license_id, req.user.user.admin_id],
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

//#endregion

router.get("/getMyHolidays", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from holidays where admin_id = ?",
      [req.user.user.admin_id],
      function (err, rows) {
        conn.release();
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        }
        res.json(rows);
      }
    );
  });
});

router.post("/setHoliday", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.admin_id;

    if (!req.body.id) {
      req.body.id = uuid.v4();
    }

    conn.query(
      "INSERT INTO holidays set ? ON DUPLICATE KEY UPDATE ?",
      [req.body, req.body],
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(req.body.id);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//#region HELP FUNCTION

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

function prepareUser(data) {}

function prepareUserRights(data) {}

function prepareOptionsForRequest(body, api) {
  return {
    url: process.env.link_api + api,
    method: "POST",
    body: body,
    json: true,
  };
}

function makeRequest(options, res) {
  request(options, function (error, response, body) {
    if (!error) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
}

function setSha1Password(password) {
  return sha1(password);
}

function packStringFromArrayForWhereCondition(
  array,
  arrayField,
  sqlField,
  connective
) {
  let condition = "";
  for (let i = 0; i < array.length; i++) {
    condition +=
      sqlField + " = " + (arrayField ? array[i][arrayField] : array[i]);
    if (i < array.length - 1) {
      condition += " " + connective + " ";
    }
  }
  return condition;
}

//#endregion HELP FUNCTION
