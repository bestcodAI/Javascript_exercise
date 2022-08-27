//declaration
class Car {
  constructor(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
  }
  print(){
	console.log(`${this.make} ${this.model} ${this.year}`);
  }
}

let myCar = new Car('Luxis', '570us', 2022);
myCar.print();

//expression
// let Car = class{

// }

class SportCar extends Car{
   revEngine(){
	console.log('Vrrroom goes the '+ this.model);
   }
}

let mySportCar = new SportCar('BMW','Hiring',2022);
mySportCar.print();
mySportCar.revEngine();
