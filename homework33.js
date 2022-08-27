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

//Iterating over object properties
for(var el in person) {
	console.log(person[el]);
}