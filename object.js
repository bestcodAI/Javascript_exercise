/*
let car = {
    make: 'bmw',
    model: '754li',
    year: 2022,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);*/
//console.log(car[year]);
//console.log(car[1]);
/*
var anotherCar = {};
anotherCar.whatever = 'NaN';
console.log(anotherCar.whatever);
*/
/*
var a = {
    myProperty: {b: 'hi'}
};
console.log(a.myProperty.b);

var c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
};

*/

let carLot = [
    {year: 2017, make: 'Toyota', model:'4Runner'},
    {year: 2015, make: 'BMW', model:'528i'},
    {year: 1982, make: 'Buick', model:'Skylark'}
];

let contacts = {
    cutomers: [
        {firstName: 'vorn', lastName: 'Cheng', phoneNumber: ['(+855) 958659484','(+855) 674748938']},
        {firstName: 'Thida', lastName:'Ny', phoneNumber: ['(+855) 678549321','(+855) 975434198']},
    ],
    employees:[
        {firstName: 'Chamnan', lastName:'Chou', phoneNumber:['(+855)  548688947','(+855) 974513654']},
        {firstName: 'sophanaroth', lastName:'som', phoneNumber:['(+855) 6785458745','(+855)  324586788']},
        {firstName: 'Proloeng', lastName:'Ream', phoneNumber:['(+855) 676875874','(+855) 6759488474']},
    ]
};

console.log(carLot);
console.log('--------------------------------------------------------------------------');
console.log(contacts);