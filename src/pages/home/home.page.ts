import { OnInit, OnViewInit, Page } from "@akb2/layouts-generator/core";
import { LayoutComponent } from "../../components/layout/layout.component";
import { ButtonComponent } from "../../components/ui/button/button.component";
import { ContainerComponent } from "../../components/ui/container/container.component";
import { SectionComponent } from "../../components/ui/section/section.component";
import { TitleComponent } from "../../components/ui/title/title.component";

@Page({
  templateSrc: "./home.page.pug",
  styleSrc: "./home.page.scss",
  imports: [
    LayoutComponent,
    SectionComponent,
    TitleComponent,
    ButtonComponent,
    ContainerComponent
  ]
})
export class HomePage implements OnInit, OnViewInit {
  constructor() {
    console.log("Home page: constructeds ss");
  }

  onInit(): void {
    console.log("Home page: init");
  }

  onViewInit(): void {
    console.log("Home page: view init");
  }
}