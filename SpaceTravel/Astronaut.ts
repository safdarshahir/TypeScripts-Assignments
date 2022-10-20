import { IPayload } from "./IPayload";

export class Astronaut implements IPayload{

    //declare fields
    massKg:number = 0;
    name:string = '';

    //constructor
    constructor(massKg:number,name:string){
        this.massKg = massKg;
        this.name = name;
    }

};