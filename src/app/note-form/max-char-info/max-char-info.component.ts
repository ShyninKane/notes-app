import { Component, Input } from "@angular/core";

@Component({
  selector: "app-max-char-info",
  templateUrl: "./max-char-info.component.html",
  styleUrls: ["./max-char-info.component.scss"],
})
export class MaxCharInfoComponent {
  @Input() text: string = "";
  @Input() maxLength: string;
}
