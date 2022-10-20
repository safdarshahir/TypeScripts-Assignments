import { IPayload } from "./IPayload";

export class Cargo implements IPayload{

    //declare fields
    massKg:number = 0;
    material:string = '';

    //constructor
    constructor(massKg:number,name:string){
        this.massKg = massKg;
        this.material = this.material;
    }
};