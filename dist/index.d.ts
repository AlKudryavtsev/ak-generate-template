type CreateItem = {
    name: string;
    params?: Record<string, any>;
};
declare class RenderTemplate {
    protected src: string;
    protected ext: string;
    constructor(src: string, ext?: string);
    render(name: string, params?: Record<string, any>): string;
    style(): string;
    create(className: string, params: Record<string, any>, ...records: CreateItem[]): string;
}

export { type CreateItem, RenderTemplate };
