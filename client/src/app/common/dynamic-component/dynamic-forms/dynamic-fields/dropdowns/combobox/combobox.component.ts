import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ConfigurationFile } from "../../../models/complex-properties/configuration-file";
import { FieldConfig } from "../../../models/field-config";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { ConfigurationService } from "app/services/configuration.service";

@Component({
  selector: "app-combobox",
  templateUrl: "./combobox.component.html",
  styleUrls: ["./combobox.component.scss"],
})
export class ComboboxComponent implements OnInit {
  public config: FieldConfig;
  public group: FormGroup;

  public data: any;
  public language: any;
  public loading = false;

  constructor(
    private callApi: CallApiService,
    private helpService: HelpService,
    private configurationService: ConfigurationService
  ) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {
    this.language = this.helpService.getLanguage();
    if (this.config.data && this.config.data["translation"]) {
      this.config.field = this.config.data["translation"]["fields"];
    } else {
      this.initialization();
    }
  }

  initialization() {
    if (this.config.request!.localData) {
      this.getLocalData(this.config.request!.localData);
    } else {
      if (this.config.request!.type === "POST") {
      } else {
        this.getApiRequest();
      }
    }
  }

  postApiRequest() {
    this.callApi.callPostMethod(
      this.config.request!.api,
      this.callApi.packParametarPost(
        this.config.data,
        this.config.request!.fields
      )
    );
  }

  getApiRequest() {
    this.loading = true;
    this.callApi
      .callGetMethod(
        this.config.request!.api,
        this.callApi.packParametarGet(
          this.config.data,
          this.config.request!.fields
        )
      )
      .subscribe(
        (data) => {
          if (this.config.request!.root) {
            // this.data = data[this.config.request!.root];
          } else {
            this.data = data;
            this.loading = false;
          }
        },
        (error) => {
          this.loading = false;
        }
      );
  }

  getLocalData(localDataRequest: ConfigurationFile) {
    this.configurationService
      .getConfiguration(localDataRequest.path!, localDataRequest.file!)
      .subscribe((data) => {
        this.data = data;
      });
  }

  onChange(event: any) {
    this.config.value = Number(event);
  }
}
