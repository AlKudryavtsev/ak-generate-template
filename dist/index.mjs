// src/index.ts
import { existsSync, readFileSync } from "fs";
import { renderString } from "nunjucks";
import * as fs from "fs";
var RenderTemplate = class {
  constructor(src, ext = ".twig") {
    this.src = src;
    this.ext = ext;
  }
  render(name, params = {}) {
    const src = (this.src + "/" + name + this.ext).replaceAll("//", "/");
    if (!existsSync(src)) return "";
    try {
      return renderString(readFileSync(src).toString(), params);
    } catch (error) {
      console.error(error);
      return "";
    }
  }
  style() {
    const src = (this.src + "/style.css").replaceAll("//", "/");
    if (!existsSync(src)) return "";
    return `<style>${fs.readFileSync(src).toString()}</style>`;
  }
  create(className, params, ...records) {
    var _a;
    const result = [];
    result.push(this.style());
    result.push(`<div class="${className}">`);
    for (const record of records) {
      result.push(this.render(record.name, (_a = record.params) != null ? _a : params));
    }
    result.push("</div>");
    return result.join("\r\n");
  }
};
export {
  RenderTemplate
};
//# sourceMappingURL=index.mjs.map