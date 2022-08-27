// Create an object
var person = {
   name: "Chamnan",
   age:22,
   gender: "Male",
   Jobe: "Programmer",
   displayName: function(){
	console.log(this.name);
   }
};

//Setting a new property
person.country = "Cambodia";

//Setting a new property 
person.age = 23;

console.log(person);