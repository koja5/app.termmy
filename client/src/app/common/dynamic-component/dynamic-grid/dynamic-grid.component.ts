import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { CoreConfigService } from "@core/services/config.service";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";

import { ConfigurationService } from "app/services/configuration.service";
import { CallApiService } from "app/services/call-api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { HelpService } from "app/services/help.service";
import { DynamicFormsComponent } from "../dynamic-forms/dynamic-forms.component";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DialogConfirmComponent } from "app/common/dialog-confirm/dialog-confirm.component";
import { TranslateService } from "@ngx-translate/core";
import { MethodRequest } from "app/enums/method-request";

@Component({
  selector: "app-dynamic-grid",
  templateUrl: "./dynamic-grid.component.html",
  styleUrls: ["./dynamic-grid.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicGridComponent {
  @Input() public path: string;
  @Input() public file: string;
  @Input() public data: any;
  @Input() externalAccounts: any;
  @Output() submit = new EventEmitter();
  @ViewChild("grid") grid: any;
  @ViewChild("modal") modal: TemplateRef<any>;
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  @ViewChild("modalOptions") modalOptions: TemplateRef<any>;
  @ViewChild("modalGoogleContacts") modalGoogleContacts: TemplateRef<any>;
  @ViewChild("dialogSyncGoogleContactConfirm")
  dialogSyncGoogleContactConfirm: DialogConfirmComponent;
  @ViewChild(DynamicFormsComponent) form!: DynamicFormsComponent;

  // Public
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = "";
  public previousPlanFilter = "";
  public previousStatusFilter = "";
  public executeActionConfig: any;
  public modalDialog: any;
  public modalFormDialog: any;
  public modalOptionsDialog: any;
  public modalGoogleContactsDialog: any;
  public innerWidth: any;
  public loader = false;
  public loaderContent = false;
  public googleContacts: any;

  public selectRole: any = [
    { name: "All", value: "" },
    { name: "Admin", value: "Admin" },
    { name: "Author", value: "Author" },
    { name: "Editor", value: "Editor" },
    { name: "Maintainer", value: "Maintainer" },
    { name: "Subscriber", value: "Subscriber" },
  ];

  public selectPlan: any = [
    { name: "All", value: "" },
    { name: "Basic", value: "Basic" },
    { name: "Company", value: "Company" },
    { name: "Enterprise", value: "Enterprise" },
    { name: "Team", value: "Team" },
  ];

  public selectStatus: any = [
    { name: "All", value: "" },
    { name: "Pending", value: "Pending" },
    { name: "Active", value: "Active" },
    { name: "Inactive", value: "Inactive" },
  ];

  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = "";
  public config: any;

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private _configurationService: ConfigurationService,
    private _service: CallApiService,
    private _activateRouter: ActivatedRoute,
    private _router: Router,
    private _helpService: HelpService,
    private _toastr: ToastrComponent,
    private _modalService: NgbModal,
    private _translate: TranslateService
  ) {
    this._unsubscribeAll = new Subject();
    this._modalService.dismissAll();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    // Reset ng-select on search
    this.selectedRole = this.selectRole[0];
    this.selectedPlan = this.selectPlan[0];
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  toggleSidebarClose(name): void {
    this._coreSidebarService.getSidebarRegistry(name).close();
  }

  /**
   * Filter By Roles
   *
   * @param event
   */
  filterByRole(event) {
    const filter = event ? event.value : "";
    this.previousRoleFilter = filter;
    this.temp = this.filterRows(
      filter,
      this.previousPlanFilter,
      this.previousStatusFilter
    );
    this.rows = this.temp;
  }

  /**
   * Filter By Plan
   *
   * @param event
   */
  filterByPlan(event) {
    const filter = event ? event.value : "";
    this.previousPlanFilter = filter;
    this.temp = this.filterRows(
      this.previousRoleFilter,
      filter,
      this.previousStatusFilter
    );
    this.rows = this.temp;
  }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : "";
    this.previousStatusFilter = filter;
    this.temp = this.filterRows(
      this.previousRoleFilter,
      this.previousPlanFilter,
      filter
    );
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *
   * @param roleFilter
   * @param planFilter
   * @param statusFilter
   */
  filterRows(roleFilter, planFilter, statusFilter): any[] {
    // Reset search on select change
    this.searchValue = "";

    roleFilter = roleFilter.toLowerCase();
    planFilter = planFilter.toLowerCase();
    statusFilter = statusFilter.toLowerCase();

    return this.tempData.filter((row) => {
      const isPartialNameMatch =
        row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
      const isPartialGenderMatch =
        row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
      const isPartialStatusMatch =
        row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
      return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.initialize();
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  initialize() {
    this.loader = true;
    if (this.path && this.file) {
      this._configurationService
        .getConfiguration(this.path, this.file)
        .subscribe((data) => {
          this.config = data;
          if (this.config.request) {
            this._coreConfigService.config
              .pipe(takeUntil(this._unsubscribeAll))
              .subscribe((config) => {
                if (config.layout.animation === "zoomIn") {
                  setTimeout(() => {
                    this._service
                      .callApi(this.config, this._activateRouter)
                      .subscribe((data) => {
                        this.rows = data;
                        this.tempData = this.rows;
                        this.loader = false;
                      });
                  }, 450);
                } else {
                  this._service
                    .callApi(this.config, this._activateRouter)
                    .subscribe((data) => {
                      this.rows = data;
                      this.tempData = this.rows;
                      this.loader = false;
                    });
                }
              });
          } else if (this.data) {
            this.rows = this.data;
            this.tempData = this.rows;
            this.loader = false;
          }
        });
    } else if (this.data) {
      this.rows = this.data;
      this.tempData = this.rows;
      this.loader = false;
    }
  }

  submitEmitter(event: any) {
    if (
      this._helpService.checkUndefinedProperty(event) &&
      event.type != "submit"
    ) {
      if (this.config.editSettingsRequest.add.method) {
        this.callSpecificMethod(this.config.editSettingsRequest.add, event);
      } else if (this.config.editSettingsRequest.add.type) {
        this.callServerMethod(this.config.editSettingsRequest.add, event);
      }
    }
  }

  packAdditionalFields(event, additionalFields) {
    for (let i = 0; i < additionalFields.length; i++) {
      if (additionalFields[i].type === "google-token") {
        event["token"] = this.externalAccounts.google;
      }
    }
    return event;
  }

  callServerMethod(request: any, event: any, noResponseMessage?: boolean) {
    this.loader = true;
    this._service
      .callServerMethod(request, event, this._activateRouter)
      .subscribe((data: any) => {
        if (data) {
          if (!noResponseMessage) {
            this._toastr.showSuccess();
            this.closeEditForm();
            if (request.additionalRequest) {
              this.makeAdditionalRequest(request, data, event);
            } else {
              this.refreshDataFromServer();
            }
          }
        } else {
          this._toastr.showError();
          this.closeEditForm();
          this.loader = false;
        }
      });
  }

  callSpecificMethod(request: any, event) {
    if (request.method === MethodRequest.setClientToGoogle) {
      if (this.externalAccounts && this.externalAccounts.google) {
        this.setClientToGoogle(event);
      } else {
        this.callServerMethod(this.config.editSettingsRequest.add, event);
      }
    }
  }

  refreshDataFromServer() {
    this._service
      .callApi(this.config, this._activateRouter)
      .subscribe((data) => {
        this.loader = false;
        this.setResponseData(data);
      });
  }

  makeAdditionalRequest(request: any, data: any, body) {
    if (request.additionalRequest) {
      for (let i = 0; i < request.additionalRequest.length; i++) {
        if (request.additionalRequest[i].method === "setClientToGoogle") {
          this.setClientToGoogle(data);
        } else if (
          request.additionalRequest[i].method === "deleteClientFromGoogle"
        ) {
          this.deleteClientFromGoogle(body);
        }
      }
    }
  }

  setClientToGoogle(data: any) {
    if (this.externalAccounts && this.externalAccounts.google) {
      this.loader = true;
      this.closeEditForm();
      data.token = this.externalAccounts.google;
      this._service
        .callPostMethod("/api/google/setClient", data)
        .subscribe((response: any) => {
          if (response) {
            // remove token from google - need to use token for Termmy to push changes in Termmy database
            delete data.token;
            data.resourceName = response.resourceName;
            data.guuid = response.guuid;
            this._service
              .callPostMethod("api/setClient", data)
              .subscribe((data) => {
                this.refreshDataFromServer();
              });
          }
        });
    }
  }

  deleteClientFromGoogle(body: any) {
    if (this.externalAccounts && this.externalAccounts.google) {
      body.token = this.externalAccounts.google;
      if (body.resourceName) {
        this._service
          .callPostMethod("api/google/deleteClient", body)
          .subscribe((data) => {
            this.refreshDataFromServer();
          });
      }
    } else {
      this.refreshDataFromServer();
    }
  }

  setResponseData(data: any) {
    if (this.config.request.type === "GET") {
      this.rows = data;
      this.submit.emit({
        total: this.rows.length,
      });
    }
  }

  closeEditForm() {
    if (this.config.formDialog.type === "modal") {
      if (!this.config.formDialog.closeAfterExecute) {
        this.modalDialog.close();
      }
    } else {
      if (!this.config.formDialog.closeAfterExecute) {
        this.toggleSidebarClose("sidebar");
      }
    }
  }

  // check here which is action and then check additionall configuration - l
  actionColumn(item, value, row) {
    if (item.routerLink) {
      if (value && item.routerLink.indexOf("{{value}}") != -1) {
        item.routerLink = item.routerLink.replace("{{value}}", value);
      }
      this._router.navigate([item.routerLink]);
    } else if (item.type) {
      if (item.type === "edit") {
        this.checkConfigurationFunctionsForEditOption(item, row);
      }

      if (item.executeAction && item.executeAction.showQuestionBeforeExecute) {
        this.executeActionConfig = item.executeAction;
        this.executeActionConfig.body = row;
        this.showQuestionModal(this.modal, item.executeAction.modalConfig);
      }
    }
  }

  checkConfigurationFunctionsForEditOption(item, row) {
    this.executeActionConfig = item.formDialog;
    setTimeout(() => {
      this.setValue(this.config.config, row);
    }, 50);

    if (item.formDialog.type === "sidebar") {
      this.toggleSidebar("sidebar");
    } else {
      this.showModalFormDialog();
    }
  }

  setValue(fields: any, values: any) {
    for (let i = 0; i < fields.length; i++) {
      this.form.setValue(
        fields[i]["name"],
        values[fields[i]["name"]],
        fields[i]["type"]
      );
    }
  }

  showQuestionModal(modal: TemplateRef<any>, modalConfig) {
    this.modalDialog = this._modalService.open(modal, {
      centered: true,
      windowClass: modalConfig.windowClass
        ? modalConfig.windowClass
        : "modal modal-danger",
    });
  }

  showModalFormDialog() {
    this.modalDialog = this._modalService.open(this.modalForm, {
      centered: true,
      windowClass:
        this.config.formDialog && this.config.formDialog.windowClass
          ? this.config.formDialog.windowClass
          : "modal modal-default",
      size:
        this.config.formDialog && this.config.formDialog.size
          ? this.config.formDialog.size
          : "md",
    });
  }

  showModalOptionsDialog() {
    this.modalOptionsDialog = this._modalService.open(this.modalOptions, {
      centered: true,
      windowClass: "modal modal-default",
      size: "md",
    });
  }

  showModalGoogleContacts() {
    this.modalGoogleContactsDialog = this._modalService.open(
      this.modalGoogleContacts,
      {
        centered: true,
        windowClass: "modal modal-default",
        size: "lg",
      }
    );
  }

  allowExecuteActionFromModal() {
    this.callServerMethod(
      this.executeActionConfig.request,
      this.executeActionConfig.body
    );
    this.modalDialog.close();
  }

  openLink(routerLink: any, data: any) {
    let generateLink = routerLink.link;
    let parametersInSessionStorage = [];
    for (let i = 0; i < routerLink.parameters.length; i++) {
      generateLink = generateLink.replace(
        "#" + routerLink.parameters[i],
        data[routerLink.parameters[i]]
      );
      parametersInSessionStorage.push({
        key: routerLink.parameters[i],
        value: data[routerLink.parameters[i]],
      });
    }
    if (routerLink.saveParametersInSessionStorage) {
      this._helpService.setSessionStorage(
        "parameter",
        parametersInSessionStorage
      );
    }
    this._router.navigate([generateLink]);
  }

  toggleExpandRow(row) {
    this.grid.rowDetail.toggleExpandRow(row);
  }

  getGoogleContacts() {
    this.modalOptionsDialog.close();
  }

  syncGoogleContacts() {
    this.loader = true;
    this._service
      .callPostMethod("api/google/getContacts", {
        token: this.externalAccounts.google,
      })
      .subscribe((data) => {
        this.googleContacts = data;

        const contacts = this.packGoogleContacts();
        if (contacts && contacts.length) {
          this._service
            .callPostMethod("/api/google/syncContacts", contacts)
            .subscribe((data) => {
              if (data) {
                this._toastr.showSuccessCustom(
                  this._translate.instant(
                    "general.successfullySyncGoogleContacts"
                  )
                );
                this.initialize();
              } else {
                this._toastr.showErrorCustom(
                  this._translate.instant(
                    "general.unsuccessfullySyncGoogleContacts"
                  )
                );
              }
            });
        } else {
          this.loader = false;
        }
      });
  }

  packGoogleContacts() {
    let contacts = [];
    if (this.googleContacts) {
      for (let i = 0; i < this.googleContacts.length; i++) {
        const contact = this.googleContacts[i];
        contacts.push({
          id: contact.metadata
            ? contact.metadata.sources
              ? contact.metadata.sources[0].id
              : null
            : null,
          resourceName: contact.resourceName,
          firstname: contact.names ? contact.names[0].givenName : "",
          lastname: contact.names ? contact.names[0].familyName : "",
          gender: contact.genders ? contact.genders[0].value : null,
          birthday: contact.birthday ? contact.birthday[0].value : null,
          email: contact.emailAddresses
            ? contact.emailAddresses[0].value
            : null,
          telephone: contact.phoneNumbers
            ? contact.phoneNumbers[0].value
            : null,
          address: contact.addresses
            ? contact.addresses[0].streetAddress
            : null,
          zip: contact.addresses ? contact.addresses[0].postalCode : null,
          city: contact.addresses ? contact.addresses[0].city : null,
        });
      }
    }
    return contacts;
  }
}
