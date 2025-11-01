import { gBuilder } from "@akb2/layouts-generator/builder";
import { defineConfig } from "vite";

export default defineConfig(gBuilder({
  pagesPath: "./src/pages",
  componentsPath: "./src/components",
  distSrc: "out",
  root: ".",
  open: "/page-home/index.html",
  minify: false,
  watchDir: "src"
}));