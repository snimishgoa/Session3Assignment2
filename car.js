"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    get name() {
        return this._name;
    }
    constructor(name) {
        this._name = name;
    }
    start() {
        console.log(`Car ${this.name} started!`);
    }
    drive() {
        console.log(`Driving car: ${this.name}`);
    }
    getPosition() {
        return { latitude: 46.23, longitude: 8.453 };
    }
}
// Test the code
let car = new Car("Hundai i30");
car.start();
car.drive();
console.log(JSON.stringify(car.getPosition()));
