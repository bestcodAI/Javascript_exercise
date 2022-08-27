//Definition function
function hello(){
	//great variable is a local
	//cannot be used outside my function
	var great = "Hello, How are you today?";
	 console.log(great);
}

hello();

//Error
console.log(great);