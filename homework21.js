//Definition function 
function calculator(num1, num2){
	var addition = num1 + num1;
	var subsbraction = num1 - num2;
	var muliplication = num1 * num2;
	var disvision = num1 / num2;
	return [addition, subsbraction, muliplication, disvision];
}

//creating variable
var x = 100;
var y = 5;

//Store returned value in a varible
var result = calculator(x,y);

//Display result 
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
