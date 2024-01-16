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
	try {
		let result = eval(display);
		screen.innerText = result;
		display = result;
	} catch (error) {
		screen.innerText = "Error";
	}
} 

function allClear(){
	display = "0";
	screen.textContent = display;
	return false;
}

function deleteNumber(){
	display = display.slice(0, -1);
	screen.textContent = display;
}
