import { Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
  standalone: false
})
export class DialogComponent {
  @Input() title!: string;
  @Input() width!: string;
  @Input() template!: TemplateRef<any>;
  @ViewChild("modal") modal: TemplateRef<any>;
  public modalDialog: any;

  constructor(private _modalService: NgbModal) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.showQuestionModal();
    // }, 20);
  }

  showModal() {
    setTimeout(() => {
      this.modalDialog = this._modalService.open(this.modal, {
        centered: true,
        windowClass: "modal modal-danger",
      });
    }, 20);
  }

  closeModal() {
    this.modalDialog.close();
  }
}
