// let person1={
//     name:'Honne',
//     sayHello: function (){
//         console.log(this.name)
//     }
// }

// let person2={
//     name:'Travis Scoot',
//     sayHello: function (){
//         console.log(this.name)
//     }
// }
// let person3={
//     name:'Ludovico Einaudi',
//     sayHello: function (){
//         console.log(this.name)
//     }
// }
// let person4={
//     name:'Olafur Arnalds',
//     sayHello: function (){
//         console.log(this.name)
//     }
// }
// let person5={
//     name:'Christian Loffler',
//     sayHello: function (){
//         console.log(this.name)
//     }
// }

// person1.sayHello()
// person2.sayHello()
// person3.sayHello()
// person4.sayHello()
// person5.sayHello()

// function Person(name,age,city){
//     this.name=name,
//     this.age=age,
//     this.city=city
// };

// Person.prototype.sayHello = function(){
// console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}”.`)
// };

// let p1 = new Person("Honne",6,'London');
// let p2 = new Person("Travis Scoot",28,'Los Angeles');
// let p3 = new Person("Ludovico Einaudi",65,'Turino');
// let p4 = new Person("Olafur Arnalds",34,'Mosfellsbaer');
// let p5 = new Person("Christian Loffle",35,'Greifwald');

// p1.sayHello()
// p2.sayHello()
// p3.sayHello()
// p4.sayHello()
// p5.sayHello()

// class Person {
//     constructor(name,age,city){
//         this.name = name;
//         this.age = age;
//         this.city=city;
//     }
//     sayHello(){
//         console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}”.`)
//         };

// }

// let p1 = new Person("Honne",6,'London');
// let p2 = new Person("Travis Scoot",28,'Los Angeles');
// let p3 = new Person("Ludovico Einaudi",65,'Turino');
// let p4 = new Person("Olafur Arnalds",34,'Mosfellsbaer');
// let p5 = new Person("Christian Loffle",35,'Greifwald');

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();


class Vehicles{
    constructor(type,manufacturer,numberOfWheels){
        this.type = type
        this.manufacturer=manufacturer;
        this.numberOfWheels=numberOfWheels;
    }
    aboutVehicle(){
        console.log(`The vehicle type is: ${this.type} . The manufacturer is: ${this.manufacturer}.The number of wheels are: ${this.numberOfWheels}`)
    }
}





class Truck extends Vehicles{
    constructor(type,manufacturer,numberOfWheels,numberOfDoors,truckBed){
    super(type,manufacturer,numberOfWheels)
    this.numberOfDoors = numberOfDoors;
    this.truckBed = true ;
    }
 

    aboutVehicle(){
        if (this.truckBed==true) {
        console.log(`The vehicle type is: ${this.type} . The manufacturer is: ${this.manufacturer}.The number of wheels are: ${this.numberOfWheels}.The number of doors are ${this.numberOfDoors}. It has a truckbed.`)
        }else{console.log("this is not a truck")}
    }

    }





class Sedan extends Vehicles{
    constructor(type,manufacturer,numberOfWheels,sizeofVehicle,gasMiles){
        super(type,manufacturer,numberOfWheels)  
        this.sizeofVehicle=sizeofVehicle;
        this.gasMiles=gasMiles;
    }
    aboutVehicle(){
        console.log(`The vehicle type is: ${this.type} . The manufacturer is: ${this.manufacturer}.The number of wheels are: ${this.numberOfWheels}.The vehicle size is ${this.sizeofVehicle}. The gas mileage is ${this.gasMiles}`)
    }
}

let sedan = new Sedan("Sedan","Honda",2,"small",23)
sedan.aboutVehicle()



class Motorcycles extends Vehicles{
    constructor(type,manufacturer,numberOfWheels,handleBars,noDoors){
        super(type,manufacturer,numberOfWheels)
        this.handleBars=handleBars;
        this.noDoors=noDoors;
    }
    aboutVehicle(){
        if (this.handleBars==true && this.noDoors==true){console.log(`The vehicle type is: ${this.type} . The manufacturer is: ${this.manufacturer}.The number of wheels are: ${this.numberOfWheels}. The vehicle has handle bars ${this.handleBars}. There are no door!`)
    }
    }

}

let motorcycle = new Motorcycles("Honda","Honda",2,)
motorcycle.aboutVehicle()


