import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { DynamicFormsComponent } from "../dynamic-forms/dynamic-forms.component";
import { ConfigurationService } from "app/services/configuration.service";

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

  constructor(private _configurationService: ConfigurationService) {}

  ngOnInit() {
    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((data) => {
        this.config = data;
      });
  }

  submitEmitter(event: any) {}

  onActionBegin(event: any) {
    console.log(event);
  }

  onChangeData(event) {
    console.log(event);
  }
}
