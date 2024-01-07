import {
  Component,
  Input,
  OnInit,
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

@Component({
  selector: "app-dynamic-grid",
  templateUrl: "./dynamic-grid.component.html",
  styleUrls: ["./dynamic-grid.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicGridComponent {
  @Input() public path: string;
  @Input() public file: string;
  @ViewChild("modal") modal: TemplateRef<any>;
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
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
  public data: any;
  public executeActionConfig: any;
  public modalDialog: any;
  public modalFormDialog: any;

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
    private _modalService: NgbModal
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
    this.initializeConfig();
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  initializeConfig() {
    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((data) => {
        this.config = data;
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
                  });
              }, 450);
            } else {
              this._service
                .callApi(this.config, this._activateRouter)
                .subscribe((data) => {
                  this.rows = data;
                  this.tempData = this.rows;
                });
            }
          });
        // this._service.callApi(this.config, this.router).subscribe((data) => {
        //   this.rows = data;
        //   this.tempData = this.rows;
        // });
      });
  }

  submitEmitter(event: any) {
    if (this._helpService.checkUndefinedProperty(event)) {
      this.callServerMethod(this.config.editSettingsRequest.add, event);
    }
  }

  callServerMethod(request: any, event: any) {
    this._service
      .callServerMethod(request, event, this._activateRouter)
      .subscribe((data: any) => {
        if (data) {
          this._toastr.showSuccess();
          this._service
            .callApi(this.config, this._activateRouter)
            .subscribe((data) => {
              this.setResponseData(data);
            });
        } else {
          this._toastr.showError();
        }
      });
  }

  setResponseData(data: any) {
    if (this.config.request.type === "GET") {
      this.rows = data;
    }
    if (
      !this.executeActionConfig ||
      this.executeActionConfig.closeAfterExecute != false
    ) {
      if (
        this.executeActionConfig &&
        this.executeActionConfig.type === "sidebar"
      ) {
        this.toggleSidebar("sidebar");
      } else {
        this.modalDialog.close();
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
    } else if (item.formDialog) {
      this.executeActionConfig = item.formDialog;
      setTimeout(() => {
        this.setValue(this.config.config, row);
      }, 50);

      if (item.formDialog.type === "sidebar") {
        this.toggleSidebar("sidebar");
      } else {
        this.showModalFormDialog();
      }
    } else if (item.executeAction) {
      if (item.executeAction.showQuestionBeforeExecute) {
        this.executeActionConfig = item.executeAction;
        this.executeActionConfig.body = row;
        this.showQuestionModal(this.modal, item.executeAction.modalConfig);
      }
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

  allowExecuteActionFromModal() {
    this.callServerMethod(
      this.executeActionConfig.request,
      this.executeActionConfig.body
    );
    this.modalDialog.close();
  }
}
