let display = "0";
let screen = document.getElementById("display");

function updateDisplay(value){
	if (display === "0"){
		display = value;
	} else {
		display += value;
	}
	screen.innerText = display;
}

function calculate(){
	let result = eval(display);
	screen.innerText = result;
	display = result;
	return false;
} 

function allClear(){
	display = "0";
	screen.textContent = display;
	return false;
}

