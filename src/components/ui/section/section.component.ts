import { Component, Define } from "@akb2/layouts-generator/core";

@Component({
  selector: "app-section",
  templateSrc: "./section.component.pug",
  styleSrc: "./section.component.scss"
})
export class SectionComponent {
  @Define() background: "white" | "light-gray" = "white";
}