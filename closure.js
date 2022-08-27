function sayHello(name) {
    return function() {
       console.log('How are  '+ name + ' ?');
    }
}

let nan = sayHello('Chamnan');
let vorn = sayHello('Vorn');
let father = sayHello('Father');
vorn();
father();
nan();