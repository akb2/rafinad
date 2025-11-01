import { Component, Define } from "@akb2/layouts-generator/core";

@Component({
  isLayout: true,
  selector: "app-layout",
  templateSrc: "./layout.component.pug",
  styleSrc: "./layout.component.scss"
})
export class LayoutComponent {
  @Define() pageTitle = "Rafinad";
}