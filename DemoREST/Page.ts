import { Support } from "./Support";

export class Page{

    page:number = 0;
    per_page:number = 0;
    total: number = 0;
    total_pages: number = 0;
    data: any[] = [];
    support: Support = {} as Support ;
}

