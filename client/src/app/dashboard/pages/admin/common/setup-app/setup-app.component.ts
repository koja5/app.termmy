import { Component, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SetupItems } from "./setup-items";

@Component({
  selector: "app-setup-app",
  templateUrl: "./setup-app.component.html",
  styleUrls: ["./setup-app.component.scss"],
})
export class SetupAppComponent {
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  public processFinished = 20;
  public modalDialog: any;
  public setupItems = new SetupItems();
  public finished = {
    service: true,
    client: true,
  };

  constructor(private _modalService: NgbModal) {}

  openSetup() {
    this.modalDialog = this._modalService.open(this.modalForm, {
      centered: true,
      windowClass: "modal modal-default",
      size: "md",
    });
  }

  hideSetup() {
    this.modalDialog.close();
  }
}
