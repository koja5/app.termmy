import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CallApiService } from "app/services/call-api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-avatar-uploader",
  templateUrl: "./avatar-uploader.component.html",
  styleUrls: ["./avatar-uploader.component.scss"],
})
export class AvatarUploaderComponent {
  @Input() data: any;
  @Input() defaultImage: string;
  @Input() editable: boolean = true;

  @Output() uploadEmitter = new EventEmitter<any>();
  @ViewChild("cropModal") cropModal: TemplateRef<any>;
  public image: string = "";
  public imageCrop: any;
  public cropModalDialog: any;
  public bookingConfig: any;
  public loader = true;

  constructor(
    private _modalService: NgbModal,
    private _service: CallApiService
  ) {}

  ngOnInit() {
    if (this.data && this.data.avatar && this.data.avatar.startsWith("http")) {
      this.imageCrop = this.data.avatar;
    } else if (this.data && this.data.avatar) {
      this.imageCrop = "assets/images/avatars/" + this.data.avatar;
    } else if (this.defaultImage) {
      this.imageCrop = "assets/images/avatars/" + this.defaultImage;
    }
    this.loader = false;

    // this._service
    //   .callGetMethod("/api/booking/getBookingConfig", "")
    //   .subscribe((data: any) => {
    //     if (data && data.length) {
    //       this.bookingConfig = data[0];
    //       this.imageCrop = "assets/images/avatars/" + this.bookingConfig.avatar;
    //     }
    //     this.loader = false;
    //   });
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      this.image = URL.createObjectURL(files[0]);
      this.resetInput();
      this.openCroppedModal();
    }
  }

  croppedImage(cropped: any) {
    if (cropped) {
      this.imageCrop = cropped;
      let formData = new FormData();
      let blobImage = this.dataURLtoFile(this.imageCrop, "crop.png");
      formData.append("uploads[]", blobImage, blobImage.name);
      formData.append("id", this.data.id);

      this.uploadEmitter.emit(formData);
    }
    this.cropModalDialog.close();
  }

  resetInput() {
    const input = document.getElementById(
      "avatar-input-file"
    ) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }

  openCroppedModal() {
    this.cropModalDialog = this._modalService.open(this.cropModal, {
      backdrop: false,
      centered: true,
      windowClass: "modal modal-default",
      size: "md",
    });
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
