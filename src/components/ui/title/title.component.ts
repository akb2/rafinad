import { Component, Define } from "@akb2/layouts-generator/core";

@Component({
  selector: "app-title",
  templateSrc: "./title.component.pug",
  styleSrc: "./title.component.scss"
})
export class TitleComponent {
  @Define() level: 1 | 2 | 3 | 4 | 5 = 5;
  @Define() label = "From default";
}