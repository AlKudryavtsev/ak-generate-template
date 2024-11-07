declare class RenderTemplate {
    protected src: string;
    protected ext: string;
    constructor(src: string, ext?: string);
    render(name: string, params?: Record<string, any>): string;
}

export { RenderTemplate };
