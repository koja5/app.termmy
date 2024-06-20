import { Component } from "@angular/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { ConfigurationService } from "app/services/configuration.service";
import { CanComponentDeactivate } from "app/services/guards/dirtycheck.guard";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";
import Holidays from "date-holidays";

@Component({
  selector: "app-holidays",
  templateUrl: "./holidays.component.html",
  styleUrls: ["./holidays.component.scss"],
})
export class HolidaysComponent implements CanComponentDeactivate {
  public path = "grids/admin";
  public file = "holidays.json";
  public countries: any;
  public selectedCountry = { id: null, code: null };
  public holidays: any;
  public isDirty = false;

  constructor(
    private _configurationService: ConfigurationService,
    private _storageService: StorageService,
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _helpService: HelpService,
    private _messageService: MessageService
  ) {}

  unsavedChanges(): boolean {
    return this.isDirty;
  }

  ngOnInit() {
    this.getMyHolidays();
    this.getCountryList();
  }

  getMyHolidays() {
    this._service
      .callGetMethod("/api/getMyHolidays", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.selectedCountry = data[0];
        } else {
          this.selectedCountry.code = "RS";
        }
        this.getHolidaysForSelectedCountry(this.selectedCountry.code);
      });
  }

  getCountryList() {
    this._configurationService
      .getFromAssets(
        "data/countries-list",
        this._storageService.getSelectedLanguage() + ".json"
      )
      .subscribe(
        (data) => {
          this.countries = data;
        },
        (err) => {
          this._configurationService
            .getFromAssets("data/countries-list", "en.json")
            .subscribe((data) => {
              this.countries = data;
            });
        }
      );
  }

  getHolidaysForSelectedCountry(code) {
    this.holidays = this._helpService.getHolidaysForSelectedCountry(code);
  }

  onChangeCountry(event: any) {
    this.isDirty = true;
    this.holidays = null;
    setTimeout(() => {
      if (event) {
        this.getHolidaysForSelectedCountry(event.code);
      } else {
        this.holidays = [];
      }
    }, 20);
  }

  saveHoliday() {
    this.isDirty = false;
    this.sendSetupApp();
    this._service
      .callPostMethod("/api/setHoliday", this.selectedCountry)
      .subscribe((data) => {
        if (data) {
          this.selectedCountry.id = data;
          this._toastr.showSuccess();
        }
      });
  }

  sendSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (this.selectedCountry.code) {
        setup.holiday = true;
      } else {
        setup.holiday = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }
}
