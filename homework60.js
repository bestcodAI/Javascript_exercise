// sayHello function
function sayHello(name, callBack){
	console.log("Welcome " + name);
	callBack();
}

// Create my call back function
function myCallBackFunction(){
	console.log("call back function called.");
}

// call sayHello function
sayHello("Chou Chamnan", myCallBackFunction);
