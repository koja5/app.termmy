import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  SimpleChanges,
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
  @Input() companyInfo: any;
  @Input() user: any;
  @Input() bookingLink: string;
  @Output() changeValue = new EventEmitter<any>();
  @ViewChild("reminderEdit") reminderEdit: TemplateRef<any>;
  @ViewChild("editableText") editableText: ElementRef;

  public reminderEditDialog: any;
  public currentPossitionCursor = 0;

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService,
    private _helpService: HelpService,
    private _modalService: NgbModal,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  modelChangeFn(event) {}

  change() {
    this.changeValue.emit(this.item);
  }

  sendTestSmsMessage() {
    let item = this._helpService.copyObject(this.item);
    item.message = this.previewMessage().value;
    this._service
      .callPostMethod("api/sms-reminder/sendTestSmsMessage", item)
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
    return Math.ceil(this.previewMessage().length / 160);
  }

  convertMessageForSpecificWord() {
    let text = document.getElementById("editable-text");
    return (
      this.item.message == text.innerText ? this.item.message : text.innerText
    ).replaceAll(
      "#company",
      "<div class='special' (change)='changeSpecificWord()'>#company</div>"
    );
  }

  changeMessage(event: any) {
    this.getCurrentPossition(event);
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
    return this._helpService.previewReminderMessage(
      this.item.message,
      this.companyInfo,
      this.bookingLink,
      this.user
    );
  }
}
