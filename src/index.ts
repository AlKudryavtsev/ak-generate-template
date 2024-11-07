import {existsSync} from 'fs'
import {renderString} from 'nunjucks'
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



}
