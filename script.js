let hold = "0";
let display = "0";
let displayBackUp = "0";
let firstClick = true;
let screenHistory = document.getElementById("history");
let screen = document.getElementById("display");
let voidValue = ""
let operator = ["+", "-", "*", "/"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function updateDisplay(value){
	voidValue = value;
	removeNumAfterOperator();
	if (display === "0" && number.includes(voidValue)){
		display = value;
		firstAssighSecondPush();
	} else {
		hideOperator();
	}
	
	switchDisplay();
	
	
	console.log(hold, display);
	console.log(operator.includes(voidValue));


}

function calculate(){
	 try {
	 
	 	let result = eval(hold);
	 	screen.innerText = result;
	 	displayHistory();
	 	display = result.toString();
	 } catch (error) {
		screen.innerText = "Error";
	}

} 

function displayHistory(){
	screenHistory.textContent = hold;
}

function allClear(){
	display = "0";
	hold = "0";
	firstClick = true;

	screen.textContent = display;
	screenHistory.textContent = hold;
}

function deleteNumber(){
	let delateLastNumber =  hold.slice(0, -1);
	hold = delateLastNumber;
	screen.textContent = hold;
}

function calculatePrecent(){
	let precent = hold/100;
	screen.textContent = precent;
}

function hideOperator(){
	let isOperator = operator.includes(voidValue);
	
	if (isOperator) {
		// hold += voidValue;
		changeOperator();

	} else {
		display += voidValue;
		hold += display[1];
	}
}

function removeNumAfterOperator(){
	let isOperator = operator.includes(voidValue);
	if (isOperator) {
		
		if (firstClick) {
			displayBackUp = display;
		} else if (display !== "0" && !firstClick) {
			displayBackUp = display;
		}
		
		// displayBackUp = display;
		display = "0";
		firstClick = false;
	}
	// screen.textContent = displayBackUp
}

function switchDisplay (){
	let isOperator = operator.includes(voidValue);
	if (isOperator) {
		screen.textContent = displayBackUp;
		console.log("yes")
	} else {
		screen.textContent = display;
	}
}

function firstAssighSecondPush (){
	if (firstClick){
		hold = voidValue;
		firstClick = false;
	} else {
		hold += voidValue;
	}
}

function changeOperator(){
	if (operator.includes(hold.slice(-1))) {
		console.log("there's operator")
		hold = hold.slice(0, 1);
		hold += voidValue;
	} else {
		hold += voidValue;
		console.log("else")
	}
}