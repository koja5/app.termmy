import { Component } from "@angular/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { ConfigurationService } from "app/services/configuration.service";
import { StorageService } from "app/services/storage.service";
import Holidays from "date-holidays";

@Component({
  selector: "app-holidays",
  templateUrl: "./holidays.component.html",
  styleUrls: ["./holidays.component.scss"],
})
export class HolidaysComponent {
  public path = "grids/admin";
  public file = "holidays.json";
  public countries: any;
  public selectedCountry = { id: null, code: "RS" };
  public holidays: any;

  constructor(
    private _configurationService: ConfigurationService,
    private _storageService: StorageService,
    private _service: CallApiService,
    private _toastr: ToastrComponent
  ) {}

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
    let hd = new Holidays(code);
    this.holidays = hd.getHolidays(new Date().getFullYear());
  }

  onChangeCountry(event: any) {
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
    this._service
      .callPostMethod("/api/setHoliday", this.selectedCountry)
      .subscribe((data) => {
        if (data) {
          this.selectedCountry.id = data;
          this._toastr.showSuccess();
        }
      });
  }
}
