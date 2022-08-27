// let a;
// console.log(a);
// console.log(typeof a);

let pattern = /xyz/;
let value = 'This is just a test.';
let reslult = value.match(pattern);
console.log(reslult);
//console.log(typeof reslult);

if(reslult === null){
	console.log('no match was found');
}

