import {existsSync} from 'fs'
import {renderString} from 'nunjucks'
import * as fs from 'node:fs';
export class RenderTemplate {

    constructor(protected src: string, protected ext = ".twig") {
    }

    render(name: string, params: Record<string, any> = {}) {
        const src = (this.src + "/" + name + this.ext).replaceAll('//','/');
        if (! existsSync(src)) return "";

        try {
           return renderString(src, params);
        }
        catch (error) {
            console.error(error);
            return "";
        }

    }

    style() {
        const src = (this.src + "/" + 'style.css').replaceAll('//','/');
        if (! existsSync(src)) return "";
        return `<style>${fs.readFileSync(src).toString()}</style>`;
    }



}
