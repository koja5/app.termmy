import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormsComponent } from "app/common/dynamic-component/dynamic-forms/dynamic-forms.component";
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
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  @ViewChild(DynamicFormsComponent) form!: DynamicFormsComponent;
  public config: any;
  public data: any;
  public tempData = [];
  public searchValue = "";
  public modalDialog: any;
  public createNewRecords = false;

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
    this._service.callGetMethod("api/getMyClients", "").subscribe((data) => {
      this.data = data;
      this.tempData = this.data;
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
    // Reset ng-select on search

    const val = event.target.value.toLowerCase();

    // Filter Our Data
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

    // Update The Filtered data
    this.data = tempFilter;
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

  showClientProfile(row) {
    this.createNewRecords = false;
    setTimeout(() => {
      this.setValue(this.config.config, row);
    }, 50);
    this.toggleSidebar("sidebar");
  }
}
