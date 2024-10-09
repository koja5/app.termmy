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
  selector: "app-sms-reminder-card",
  templateUrl: "./sms-reminder-card.component.html",
  styleUrls: ["./sms-reminder-card.component.scss"],
})
export class SmsReminderCardComponent {
  @Input() item: any;
  @Output() changeValue = new EventEmitter<any>();
  @ViewChild("reminderEdit") reminderEdit: TemplateRef<any>;

  public reminderEditDialog: any;
  public test = "<h1>Test</h1>";

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService,
    private _helpService: HelpService,
    private _modalService: NgbModal
  ) {}

  ngOnInit() {
    // this.item.message = this.item.message.replaceAll(
    //   "#time",
    //   '<span>#time</span>'
    // );
  }

  modelChangeFn(event) {}

  change() {
    this.changeValue.emit(this.item);
  }

  sendTestSmsMessage() {
    this._service
      .callPostMethod("api/sms-reminder/sendTestSmsMessage", this.item)
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccessCustom(
            this._helpService.replaceText(
              this._translate.instant("smsReminder.sentTestSMSTo"),
              "#telephone",
              data
            )
          );
        } else {
          this._toastr.showErrorCustom(
            this._translate.instant(
              "smsReminder.needToInsertTelephoneAtSettings"
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

  calculateNumberOfMessage() {
    return Math.ceil(this.item.message.length / 160);
  }
}
