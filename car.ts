import {Drivable} from "./drivable"
import {CarPosition} from "./car-position"

class Car implements Drivable{
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
   
    constructor(name: string){
        this._name = name;
    }

    start(): void{
        console.log(`Car ${this.name} started!`);        
    }

    drive(): void{
        console.log(`Driving car: ${this.name}`);
        
    }

    getPosition(): CarPosition{
        return { latitude :46.23, longitude: 8.453 };
    }
}

// Test the code
let car: Car = new Car("Hundai i30");
car.start();
car.drive();
console.log(JSON.stringify(car.getPosition()));