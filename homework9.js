const num1 = 234;
const num2 = 342;
const num3 = 243;
let largest;

// check the conditions
 if(num1 >= num2 && num1 >= num3){
	largest = num1;
 }
 else if(num2 >= num1 && num2 >= num3){
	largest = num2;
 }
 else{
	largest = num3;
 }

 console.log('The largest number is ' + largest);

