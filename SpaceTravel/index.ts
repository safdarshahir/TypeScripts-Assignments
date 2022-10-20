import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";


let rocket = new Rocket("PS11",100);

let cargoFood = new Cargo(25,"Food");
let cargoElec = new Cargo(35,"Electronic Equipments");

let astronautOne = new Astronaut(55,"Cooper");
let astronautTwo = new Astronaut(45,"Emily");
let astronautThree = new Astronaut(60,"Jhon");

console.log(rocket.canAdd(cargoFood));
console.log(rocket.addCargo(cargoFood));

console.log(rocket.canAdd(cargoElec));
console.log(rocket.addCargo(cargoElec));

console.log(rocket.canAdd(astronautOne));
console.log(rocket.addAstronaut(astronautOne));
