// Check Prime numbers
const num1 = 37;
var compt = 0;

for(var i = 1; i<=num1; i++){
	if(num1%i==0){
		compt += 1;
	}
}
if(compt <= 2){
	console.log(`${num1} is a prime number`);
}else{
	console.log(`${num1} is not prime number`);
}