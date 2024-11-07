import { existsSync, readFileSync } from 'fs';
import { renderString } from 'nunjucks';
import * as fs from 'fs';

export type CreateItem = {
  name: string;
  params?: Record<string, any>;
};

export class RenderTemplate {
  constructor(
    protected src: string,
    protected ext = '.twig',
  ) {}

  render(name: string, params: Record<string, any> = {}) {
    const src = (this.src + '/' + name + this.ext).replaceAll('//', '/');
    if (!existsSync(src)) return '';

    try {
      return renderString(readFileSync(src).toString(), params);
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  style() {
    const src = (this.src + '/' + 'style.css').replaceAll('//', '/');
    if (!existsSync(src)) return '';
    return `<style>${fs.readFileSync(src).toString()}</style>`;
  }

  create(className: string, params: Record<string, any>, ...records: CreateItem[]) {
    const result: string[] = [];
    result.push(this.style());
    result.push(`<div class="${className}">`);

    for (const record of records) {
      result.push(this.render(record.name, record.params ?? params));
    }

    result.push('</div>');

    return result.join('\r\n');
  }
}
