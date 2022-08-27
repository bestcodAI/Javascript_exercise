/*let name = 'chamnan';
console.log(`Hello ${name}`);

let sentence = `This is really a convenice.
 your probably will never want to do something
 quite like this. You might choose to put long
passanges of text into an external file and 
load it somehow.`;
console.log(sentence);*/

function getReasonCount () {return 2;}

let interpolation = `Give me ${(getReasonCount()==1) ? 'one good reason' : 'a few reasons'}  to try this.`
console.log(interpolation);
