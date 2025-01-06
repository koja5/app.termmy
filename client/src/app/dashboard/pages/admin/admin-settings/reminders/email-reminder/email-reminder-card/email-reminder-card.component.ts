import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-email-reminder-card",
  templateUrl: "./email-reminder-card.component.html",
  styleUrls: ["./email-reminder-card.component.scss"],
})
export class EmailReminderCardComponent {
  @Input() item: any;
  @Output() changeValue = new EventEmitter<any>();
  @ViewChild("reminderEdit") reminderEdit: TemplateRef<any>;

  public reminderEditDialog: any;
  public currentPossitionCursor = 0;
  public companyInfo: any;

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _helpService: HelpService,
    private _translate: TranslateService,
    private _modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getCompanyInfo();
  }

  getCompanyInfo() {
    this._service.callGetMethod("api/getCompanyInfo").subscribe((data) => {
      this.companyInfo = data;
    });
  }

  modelChangeFn(event) {}

  ngOnChanges() {}

  change() {
    this.changeValue.emit(this.item);
  }

  sendTestMessage() {
    this._service
      .callPostMethod("api/email-reminder/sendTestEmailMessage", this.item)
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccessCustom(
            this._helpService.replaceText(
              this._translate.instant("emailReminder.sentTestEmailTo"),
              "#email",
              data
            )
          );
        }
      });
  }

  showReminderEditDialog() {
    this.reminderEditDialog = this._modalService.open(this.reminderEdit, {
      centered: true,
      windowClass: "modal modal-default",
      size: "lg",
    });
  }

  changeMessage(event: any) {
    this.currentPossitionCursor = event.target.selectionStart + 1;
  }

  getCurrentPossition(event: any) {
    this.currentPossitionCursor = event.target.selectionStart;
  }

  saveMessage() {
    this.change();
    this.reminderEditDialog.close();
  }

  addDynamicValue(value: string) {
    this.item.message =
      this.item.message.slice(0, this.currentPossitionCursor) +
      value +
      this.item.message.slice(
        this.currentPossitionCursor,
        this.item.message.length
      );
  }

  previewMessage() {
    const date = new Date();
    const message = this.item.message
      .replaceAll("#time", date.getHours() + ":" + date.getUTCMinutes())
      .replaceAll(
        "#date",
        date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
      )
      .replaceAll("#company", this.companyInfo.company)
      .replaceAll("#address", this.companyInfo.address);
    return {
      value: message,
      length: message.length,
    };
  }
}
