var numbers = [3, 70, -6, 8, 15, 2];
var myArray;

//Defining function to find max
function findMax(myArray){
	return Math.max.apply(null, myArray);
}

//Defining function to find min
function findMin(myArray){
	return Math.min.apply(null, myArray);
}

//Display find min and max
console.log("Max is " + findMax(numbers));
console.log("Min is " + findMin(numbers));
