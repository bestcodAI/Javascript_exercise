// Json object

const data = {
	"name":"Chamnan",
	"age": 22,
	"language":{
		"firts":"Khmer",
		"second":"English"
	},
	"code":["Java","Javascript","C","HTML","CSS","C++","Python"],
};

//accessing Json object
console.log("------------------------------------------------------");
console.log("name and age");
console.log("------------------------------------------------------");
console.log(data.name);
console.log(data.age);
console.log("------------------------------------------------------");
console.log("Language");
console.log("------------------------------------------------------");
console.log(data.language.firts);
console.log(data.language.second);
console.log("------------------------------------------------------");
console.log("Skill of code ");
console.log("------------------------------------------------------");

console.log(data.code[0]);
console.log(data.code[1]);
console.log(data.code[2]);
console.log(data.code[3]);
console.log(data.code[4]);
console.log(data.code[5]);
console.log(data.code[6]);

