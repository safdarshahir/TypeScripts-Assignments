import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { IPayload } from "./IPayload";

export class Rocket{

    //declare fields
    name:string = '';
    totalCapacityKg:number =0;
    cargoItems: Cargo[] =[];
    astronauts: Astronaut[] = [];

    //constructor
    constructor(name:string,totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //concrete methods

    //method to get sum of all payload
    private sumMass(items:IPayload[]):number{
        
        let totalSumMassKg = 0;
        items.forEach(element => {
            totalSumMassKg += element.massKg;
        });
        return totalSumMassKg;

    }

    //method to get current payload mass
    currentMass():number{
        let payload : IPayload[] = [];
      
        this.cargoItems.forEach(element => {
            payload.push(element);
        });

        this.astronauts.forEach(element => {
            payload.push(element);
        });
        
        return this.sumMass(payload);
    }

    //checking whether we can add new payload
    canAdd(item:IPayload){
            return this.currentMass()+item.massKg <= this.totalCapacityKg ? true : false;
    }

    addCargo(cargo:Cargo){

        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }

        return false;

    }

    addAstronaut(astronaut:Astronaut){

        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }

        return false;

    }

};