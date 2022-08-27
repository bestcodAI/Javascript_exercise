// Create an object
var person = {
	name: "Chamnan",
	age: 22,
	gender: "Male",
	job: "Programmer",
	displayName: function(){
		console.log(this.name);
	}
};

//display
console.log(person);
console.log("--------------------------------------------");
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.job);
person.displayName();