"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RenderTemplate: () => RenderTemplate
});
module.exports = __toCommonJS(src_exports);
var import_fs = require("fs");
var import_nunjucks = require("nunjucks");
var fs = __toESM(require("fs"));
var RenderTemplate = class {
  constructor(src, ext = ".twig") {
    this.src = src;
    this.ext = ext;
  }
  render(name, params = {}) {
    const src = (this.src + "/" + name + this.ext).replaceAll("//", "/");
    if (!(0, import_fs.existsSync)(src)) return "";
    try {
      return (0, import_nunjucks.renderString)((0, import_fs.readFileSync)(src).toString(), params);
    } catch (error) {
      console.error(error);
      return "";
    }
  }
  style() {
    const src = (this.src + "/style.css").replaceAll("//", "/");
    if (!(0, import_fs.existsSync)(src)) return "";
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RenderTemplate
});
//# sourceMappingURL=index.js.map