//Create an array
var numbers = [3, 70, -6, 8, 15, -200];

//Display my array
console.log(numbers);

//sort my array
function myFunction(){
	numbers.sort(function(a ,b){return a-b});
}

myFunction();
//display my array
console.log(numbers);