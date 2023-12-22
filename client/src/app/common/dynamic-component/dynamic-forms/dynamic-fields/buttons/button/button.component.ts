import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models/field-config";
import { HelpService } from "app/services/help.service";
import { CallApiService } from "app/services/call-api.service";
import { Router } from "@angular/router";
import { ResponseAction } from "app/enums/response-action";
import { ToastrComponent } from "app/common/toastr/toastr.component";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() class!: string;
  @Input() title!: string;
  @Input() icon!: string;
  @Output() clickEmitter: EventEmitter<any> = new EventEmitter();
  public config: FieldConfig;
  public group: FormGroup;
  public language: any;

  constructor(
    private _helpService: HelpService,
    private _service: CallApiService,
    private _router: Router,
    private _toastr: ToastrComponent
  ) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {
    this.language = this._helpService.getLanguage();
  }

  clickButton() {
    this.clickEmitter.emit();
  }

  checkRights() {
    return this._helpService.checkRights(this.config.rights);
  }

  clickRequest() {
    if (this._helpService.checkUndefinedProperty(this.group.value)) {
      this.config.body = this.group.value;
      this._service.callApi(this.config, this._router).subscribe(
        (data) => {
          if (data) {
            if (this.config.response === ResponseAction.toastr) {
              this._toastr.showSuccess();
            }
          } else {
            this._toastr.showError();
          }
        },
        (error) => {
          this._toastr.showError();
        }
      );
    } else {
      this._toastr.showError();
    }
  }
}
