// src/index.ts
import { existsSync } from "fs";
import { renderString } from "nunjucks";
var RenderTemplate = class {
  constructor(src, ext = ".twig") {
    this.src = src;
    this.ext = ext;
  }
  render(name, params = {}) {
    const src = (this.src + "/" + name + this.ext).replaceAll("//", "/");
    if (!existsSync(src)) return "";
    try {
      return renderString(src, params);
    } catch (error) {
      console.error(error);
      return "";
    }
  }
};
export {
  RenderTemplate
};
//# sourceMappingURL=index.mjs.map