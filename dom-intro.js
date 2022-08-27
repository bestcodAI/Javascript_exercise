(function(){
	function clickHandler(message){
		console.log('Hello from my Buttom  Please subscript my channel'+message);
	}
	//get a reference to myButtom
	let myButtom = document.getElementById('myButtom');
	myButtom.addEventListener('click', function (){clickHandler('Hi  from cambodia')})	;
})();