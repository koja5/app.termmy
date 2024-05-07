import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";
import { DynamicFormsComponent } from "app/common/dynamic-component/dynamic-forms/dynamic-forms.component";
import { DynamicGridComponent } from "app/common/dynamic-component/dynamic-grid/dynamic-grid.component";
import { CallApiService } from "app/services/call-api.service";
import { ConfigurationService } from "app/services/configuration.service";

@Component({
  selector: "app-clients-mobile-view",
  templateUrl: "./clients-mobile-view.component.html",
  styleUrls: ["./clients-mobile-view.component.scss"],
})
export class ClientsMobileViewComponent {
  @Input() path: string;
  @Input() file: string;
  @Input() externalAccounts: any;
  @Input() dynamicGrid: DynamicGridComponent;
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  @ViewChild(DynamicFormsComponent) form!: DynamicFormsComponent;
  public config: any;
  public data: any;
  public tempData = [];
  public searchValue = "";
  public modalDialog: any;
  public createNewRecords = false;
  public loader = true;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   */

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private _service: CallApiService,
    private _configurationService: ConfigurationService
  ) {}

  ngOnInit() {
    this.loader = true;
    this._service.callGetMethod("api/getMyClients", "").subscribe((data) => {
      this.data = data;
      this.tempData = this.data;
      this.loader = false;
    });
    this.getConfigurationFile();
  }

  getConfigurationFile() {
    if (this.path && this.file) {
      this._configurationService
        .getConfiguration(this.path, this.file)
        .subscribe((data) => {
          this.config = data;
        });
    }
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    let tempFilter = [];
    const temp = this.tempData.filter(function (d) {
      if (
        Object.entries(d).filter(([k]) => {
          return d[k] && d[k].toString().toLowerCase().indexOf(val) !== -1;
        }).length
      ) {
        tempFilter.push(d);
      }
    });
    this.data = tempFilter;
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  toggleSidebarClose(name): void {
    this._coreSidebarService.getSidebarRegistry(name).close();
  }

  resetFormValue() {
    for (let i = 0; i < this.config.config.length; i++) {
      this.form.setValue(
        this.config.config[i]["name"],
        this.config.config[i].value ? this.config.config[i].value : null,
        this.config.config[i]["type"]
      );
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

  showMore(row) {
    this.createNewRecords = false;
    setTimeout(() => {
      this.setValue(this.config.config, row);
    }, 50);
    this.toggleSidebar("sidebar-mobile");
  }

  submitEmitter(event: any) {
    this.toggleSidebarClose("sidebar-mobile");
    this.dynamicGrid.submitEmitter(event);
    this.dynamicGrid.submit.subscribe((data) => {
      this.data = data.rows;
    });
  }
}
