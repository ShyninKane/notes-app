import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./app-section.component.html",
  styleUrls: ["./app-section.component.scss"],
})
export class AppSectionComponent {
  @Input() title: string;
}
