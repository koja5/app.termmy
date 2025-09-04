import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-card-template",
  templateUrl: "./card-template.component.html",
  styleUrls: ["./card-template.component.scss"],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class CardTemplateComponent {
  @Input() template: TemplateRef<any>;
}
