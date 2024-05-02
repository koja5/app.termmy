import {
  ChangeDetectorRef,
  Component,
  NgZone,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SetupItems } from "./setup-items";
import { MessageService } from "app/services/message.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { StorageService } from "app/services/storage.service";
import { CallApiService } from "app/services/call-api.service";
import { SetupApp } from "app/models/setup-app";
import { ShepherdService } from "angular-shepherd";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-setup-app",
  templateUrl: "./setup-app.component.html",
  styleUrls: ["./setup-app.component.scss"],
})
export class SetupAppComponent {
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  private _unsubscribeAll: Subject<any>;
  public complitedPercentage = 0;
  public modalDialog: any;
  public setupItems = new SetupItems();
  public complited = new SetupApp();

  constructor(
    private _service: CallApiService,
    private _modalService: NgbModal,
    private _messageService: MessageService,
    private _storageService: StorageService,
    private _changeDetector: ChangeDetectorRef,
    private _shepherdService: ShepherdService,
    private _translate: TranslateService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.initialize();

    this._messageService
      .getSetupApp()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        this.complited = data;
        this.calculateComplitedPercentage();
        this._changeDetector.markForCheck();
        this._service
          .callPostMethod("api/setSetupApp", this.complited)
          .subscribe((id: string) => {
            this.complited.id = id;
            this._storageService.setSessionStorage("setup", this.complited);
          });
      });
  }

  initialize() {
    this._service
      .callGetMethod("/api/getSetupApp", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.complited = data[0];
          this.calculateComplitedPercentage();
          this._storageService.setSessionStorage("setup", this.complited);
          this._changeDetector.markForCheck();
        }

        setTimeout(() => {
          if (this.complitedPercentage === 0) {
            this.startTour();
          }
        }, 3000);
      });
  }

  calculateComplitedPercentage() {
    this.complitedPercentage = 0;
    if (this.complited.clients) {
      this.complitedPercentage += 10;
    }
    if (this.complited.services) {
      this.complitedPercentage += 10;
    }
    if (this.complited.worktime) {
      this.complitedPercentage += 10;
    }
    if (this.complited.sms_reminder) {
      this.complitedPercentage += 10;
    }
    if (this.complited.sync_calendar) {
      this.complitedPercentage += 20;
    }
    if (this.complited.booking) {
      this.complitedPercentage += 20;
    }
    if (this.complited.payment) {
      this.complitedPercentage += 10;
    }
    if (this.complited.holiday) {
      this.complitedPercentage += 10;
    }
    if (this.complitedPercentage < 100) {
      this._storageService.setSessionStorage("setup", this.complited);
    }
  }

  openSetup() {
    if (this._shepherdService.isActive) {
      setTimeout(() => {
        this._shepherdService.cancel();
      }, 200);
    }
    this.modalDialog = this._modalService.open(this.modalForm, {
      centered: true,
      windowClass: "modal modal-default",
      size: "md",
    });
  }

  startSetup() {
    this._storageService.setSessionStorage("setup", this.complited);
    this.modalDialog.close();
  }

  startTour() {
    this._shepherdService.defaultStepOptions = {
      cancelIcon: {
        enabled: true,
      },
    };
    this._shepherdService.modal = true;

    this._shepherdService.addSteps([
      {
        title: this._translate.instant("setupApp.title"),
        text: this._translate.instant("setupApp.text"),
        attachTo: {
          element: ".setup-app",
          on: "bottom",
        },
        buttons: [
          {
            classes: "btn btn-outline-primary",
            text: this._translate.instant("general.cancel"),
            type: "cancel",
          },
          {
            classes: "btn-primary",
            text: this._translate.instant("setupApp.setup"),
            action() {
              this.hide();
            },
          },
        ],
        useModalOverlay: true,
        when: {
          hide: () => {
            this.openSetup();
          },
        },
      },
    ]);
    this._shepherdService.start();
  }
}
