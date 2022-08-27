var x = 10, y = 5;
try {
	if(x == y)
		throw "e1";
	else
		throw "e2";
} catch(e) {

	if(e == "e1")
		console.log("Exception: Both are same value!");
	if(e == "e2")
		console.log("Exeptions: Both are different!");
	
}