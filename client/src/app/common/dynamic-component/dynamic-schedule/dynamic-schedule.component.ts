import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { DynamicFormsComponent } from "../dynamic-forms/dynamic-forms.component";
import { ConfigurationService } from "app/services/configuration.service";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-dynamic-schedule",
  templateUrl: "./dynamic-schedule.component.html",
  styleUrls: ["./dynamic-schedule.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicScheduleComponent {
  @Input() path!: string;
  @Input() file!: string;
  @ViewChild(DynamicFormsComponent) form!: DynamicFormsComponent;

  public config: any;
  public allLocations: any;
  public selectLocation: any;
  public allEmployees: any;
  public selectEmployees: any;

  constructor(
    private _configurationService: ConfigurationService,
    private _service: CallApiService
  ) {}

  ngOnInit() {
    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((data) => {
        this.config = data;
        this.initialize();
      });
  }

  initialize() {
    this.getAdminLocations();
    this.getAdminEmployees();
  }

  getAdminLocations() {
    if (this.config.locations) {
      this._service
        .callApi(null, this.config.locations.request)
        .subscribe((data) => {
          this.allLocations = data;
        });
    }
  }

  getAdminEmployees() {
    if (this.config.employees) {
      this._service
        .callApi(null, this.config.employees.request)
        .subscribe((data) => {
          this.allEmployees = data;
        });
    }
  }

  submitEmitter(event: any) {}

  onActionBegin(event: any) {
    console.log(event);
  }

  onChangeData(event) {
    console.log(event);
  }
}
