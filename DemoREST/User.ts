import { Address } from "./Address.js";
import { Company } from "./Company.js";

export class User{
        id:number = 0;
        name:string = "";
        username:string = "";
        email:string = "";
        address = {} as Address;
        phone: string = "";
        website:string = "";
        company = {} as Company;     
}



