let a = 'first';

function scopeTest()
{
   
    console.log(a);
    a = 'changed'; 
    let b = 'second';
    if(a != ''){
        console.log(a);
        console.log('inside if: ' + b);
        //let c = 'third';
    }
    
    //console.log(c);
}

scopeTest();
console.log(a);
