import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import Cropper from "cropperjs";

@Component({
  selector: "app-image-cropper",
  templateUrl: "./image-cropper.component.html",
  styleUrls: ["./image-cropper.component.scss"],
})
export class ImageCropperComponent {
  @Input() image: any;
  @Output() croppedImage = new EventEmitter<any>();

  public sanitizedUrl: any;
  cropper!: Cropper;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.image);
  }

  ngAfterViewInit() {
    this.initCropper();
  }

  initCropper() {
    const image = document.getElementById("image") as HTMLImageElement;
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      guides: false,
    });
  }

  getRoundedCanvas(sourceCanvas: any) {
    var canvas = document.createElement("canvas");
    var context: any = canvas.getContext("2d");
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = "destination-in";
    context.beginPath();
    context.arc(
      width / 2,
      height / 2,
      Math.min(width, height) / 2,
      0,
      2 * Math.PI,
      true
    );
    context.fill();
    return canvas;
  }

  //get the cropped image and closes the dialog
  //returning an url or null if no image

  crop() {
    const croppedCanvas = this.cropper.getCroppedCanvas();
    const roundedCanvas = this.getRoundedCanvas(croppedCanvas);

    let roundedImage = document.createElement("img");

    if (roundedImage) {
      this.croppedImage.emit(roundedCanvas.toDataURL());
    } else {
      this.croppedImage.emit(null);
    }
  }

  // resets the cropper
  cancel() {
    this.croppedImage.emit(null);
    this.cropper.clear();
    this.cropper.crop();
  }
}
