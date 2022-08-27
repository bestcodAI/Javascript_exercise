//Check all primes Numbers between 1 and 100

var compt = 0;
var i,j;
for(i = 1; i<= 100; i++){
	for(j = 1; j<=i; j++){
		if(i%j==0){
			compt += 1;
		}
	}
	if(compt <= 2){
		console.log(`${i} is a prime numbers`);
	}
	compt = 0;
}