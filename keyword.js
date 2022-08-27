var car = {
	make:'Lixus',
	model:'570us',
	year: '2022',
	getPrice: function() {
		return 50000;
	},
	printDescription: function(){
		console.log('Make     Model     year   price');
		console.log(this.make + '     '+this.model + '     '+ this.year + '    ' + this.car);
	}
}
car.printDescription();

function first(){
	return this;
}
console.log(first()=== global);


function second(){
	'use strict';
	return this;
}
console.log(second()=== global);
console.log(second() === undefined);

let myObject = {value: 'My Object'};
// value is set on the global object
global.value = 'Global object';

function third(name){
	return this.value + name;
}

//console.log(third());
console.log(third.call(myObject, ' chamnan'));
console.log(third.apply(myObject, [' CHAMNAN']));

let x=1;

function fifth(){
	console.log('| '+x+'\t\t'+this.lastName + '\t\t\t' + this.firstName +'\t\t');
	x++;
	console.log('------------------------------------------------------------');
}

let customer1 = {
	firstName: 'Sophanaroth',
	lastName: 'Som',
	phoneNumber: '(+855) 546754563',
	print: fifth
}

let customer2 = {
	firstName: 'Thida',
	lastName: 'Ny',
	phoneNumber: '(+855) 546754563',
	print: fifth
}

let customer3 = {
	firstName: 'Dara',
	lastName: 'Seng',
	phoneNumber: '(+855) 546754563',
	print: fifth
}
console.log('------------------------------------------------------------');
console.log('|   \t\t\tCustomer Table\t\t\t   |');
console.log('------------------------------------------------------------');
console.log('|  Num   |       LastName       |         firstName        |');                       
console.log('------------------------------------------------------------');
customer1.print();
customer2.print();
customer3.print();


