import { Component, HostListener, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DynamicGridComponent } from "app/common/dynamic-component/dynamic-grid/dynamic-grid.component";
import { LicensesType } from "app/enums/licenses-type";
import { CallApiService } from "app/services/call-api.service";
import { CanComponentDeactivate } from "app/services/guards/dirtycheck.guard";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent implements CanComponentDeactivate {
  @ViewChild("grid") grid: DynamicGridComponent;
  @ViewChild(DynamicGridComponent) dynamicGrid;

  public path = "grids/admin";
  public file = "my-clients.json";
  public externalAccounts: any;
  public phoneNumber: string;
  public isMobile = false;
  public data: any;
  public licenseId!: string;
  public limitClientsNotificationsForFreeLicenses = 25;
  public limitClientsForFreeLicenses = 30;

  constructor(
    private _service: CallApiService,
    private _messageService: MessageService,
    private _storageService: StorageService,
    private _activatedRouter: ActivatedRoute,
    private _helpService: HelpService
  ) {}

  unsavedChanges(): boolean {
    return this.grid.unsavedChanges();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.isMobile =
      this._helpService.checkIsMobileDevices() || window.innerWidth < 993;
  }

  ngOnInit() {
    this.isMobile =
      this._helpService.checkIsMobileDevices() || window.innerWidth < 993;
    this.licenseId = this._storageService.getLicenseId();
    this._service
      .callGetMethod("/api/getExternalAccounts", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.externalAccounts = data[0];
        }
      });

    this._service.callGetMethod("/api/getMyClients", "").subscribe((data) => {
      this.data = data;
    });
  }

  submit(data) {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (data.total === 1) {
        setup.clients = true;
        this._messageService.sendSetupApp(setup);
      } else if (data.total === 0) {
        setup.clients = false;
        this._messageService.sendSetupApp(setup);
      }
    }
  }

  getBasicLicense() {
    return this.licenseId === LicensesType.Standard;
  }
}
