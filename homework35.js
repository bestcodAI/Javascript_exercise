//Printing PI value
console.log("PI = " + Math.PI);

//Function to calculate circle are
function circle(r){
	var area = (Math.PI) * r * r;
    return area;
}

var raduis = 10;
console.log("Area = " + circle(raduis));