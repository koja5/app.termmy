import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Output() changeValue = new EventEmitter<any>();
  @ViewChild("reminderEdit") reminderEdit: TemplateRef<any>;
  @ViewChild("editableText") editableText: TemplateRef<any>;

  public reminderEditDialog: any;
  public test =
    "Sie haben einen verbindlichen Termin am #date um #time gebucht. Unsere Adresse ist #address. Beste Grüße #company";

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService,
    private _helpService: HelpService,
    private _modalService: NgbModal
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.item) {
    }
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

  convertMessageForSpecificWord() {
    let text = document.getElementById("editable-text");
    return (
      this.item.message == text.innerText ? this.item.message : text.innerText
    ).replaceAll(
      "#company",
      "<div class='special' (change)='changeSpecificWord()'>#company</div>"
    );
  }

  changeMessage(message: any) {
    setTimeout(() => {
      this.convertMessageForSpecificWord();
      this.item.message = message.target.innerText;
      this.positionCursor();
    }, 100);
  }

  positionCursor() {
    let tag = document.getElementById("editable-text");

    // Creates range object
    let setpos = document.createRange();

    // Creates object for selection
    let set = window.getSelection();

    // Set start position of range
    setpos.setStart(tag.childNodes[0], 12);

    // Collapse range within its boundary points
    // Returns boolean
    setpos.collapse(true);

    // Remove all ranges set
    set.removeAllRanges();

    // Add range with respect to range object.
    set.addRange(setpos);

    // Set cursor on focus
    tag.focus();
  }

  saveMessage() {
    this.change();
    this.reminderEditDialog.close();
  }
}
