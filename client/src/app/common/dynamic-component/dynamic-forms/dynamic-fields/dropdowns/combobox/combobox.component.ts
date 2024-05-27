import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ConfigurationFile } from "../../../models/complex-properties/configuration-file";
import { FieldConfig } from "../../../models/field-config";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { ConfigurationService } from "app/services/configuration.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormsComponent } from "../../../dynamic-forms.component";

@Component({
  selector: "app-combobox",
  templateUrl: "./combobox.component.html",
  styleUrls: ["./combobox.component.scss"],
})
export class ComboboxComponent implements OnInit {
  public config: FieldConfig;
  public group: FormGroup;
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  @ViewChild(DynamicFormsComponent) form!: DynamicFormsComponent;

  public data: any;
  public language: any;
  public loading = false;
  public modalDialog: any;
  public configForm: any;

  constructor(
    private service: CallApiService,
    private _helpService: HelpService,
    private _configurationService: ConfigurationService,
    private _modalService: NgbModal
  ) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {
    this.language = this._helpService.getLanguage();
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
    this.service.callPostMethod(
      this.config.request!.api,
      this.service.packParametarPost(
        this.config.data,
        this.config.request!.fields
      )
    );
  }

  getApiRequest() {
    this.loading = true;
    this.service
      .callGetMethod(
        this.config.request!.api,
        this.service.packParametarGet(
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
    this._configurationService
      .getConfiguration(localDataRequest.path!, localDataRequest.file!)
      .subscribe((data) => {
        this.data = data;
      });
  }

  clickOnTag() {
    this._configurationService
      .getConfiguration(
        this.config.addTag.clickTagPath,
        this.config.addTag.clickTagFile
      )
      .subscribe((data) => {
        this.configForm = data;
        this.modalDialog = this._modalService.open(this.modalForm, {
          centered: true,
          windowClass:
            this.configForm.formDialog && this.configForm.formDialog.windowClass
              ? this.configForm.formDialog.windowClass
              : "modal modal-default",
          size:
            this.configForm.formDialog && this.configForm.formDialog.size
              ? this.configForm.formDialog.size
              : "md",
        });
      });
  }

  CreateNew(city) {
    alert("Create New Clicked : " + city);
  }

  customSearchFn(term: string, item: any) {
    term = term.toLocaleLowerCase();
    return (
      item.code.toLocaleLowerCase().indexOf(term) > -1 ||
      item.countryName.toLocaleLowerCase() === term
    );
  }

  onChange(event: any) {
    if (this.config.additionalField) {
      this.group.controls[this.config.additionalField].setValue(
        event.firstname + " " + event.lastname
      );
    }
    this.group.controls[this.config.name].setValue(
      event[this.config.field.value]
    );
  }

  submitEmitter(event: any) {
    this.config.value = event.firstname + " " + event.lastname;
  }
}
