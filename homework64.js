// constructor function
function car() {
	this.name = 'Ford',
	this.color = 'Black',
    this.speed = 500,

	this.sound = function (){
		console.log('ffff fff fffffff');
	}
};

//create objects
const car1 = new car();
const car2 = new car();

//access name properties
console.log(car1.name);
console.log(car2.name);

//access speed properties
console.log(car1.speed);
console.log(car2.speed);

// access speed properties
car1.sound();
car2.sound();