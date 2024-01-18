let hold = "0";
let display = "0";
let displayBackUp = "0";
let firstClick = true;
let globalValue = ""
let operator = ["+", "-", "*", "/"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let isCalcuted = false;

const screenHistory = document.getElementById("history");
const screen = document.getElementById("display");


function updateDisplay(value){
	// copy the value
	globalValue = value;
	removeNumAfterOperator();
	
	// This codition run after click operator button 
	if (display === "0" && number.includes(globalValue)){
		
		display = value;
		
		firstAssighSecondPush();

	} else {
		hideOperator();
	}
	
	switchDisplay();
	
	
	console.log(hold, display);
	console.log(operator.includes(globalValue));


}

// ===== To calculate string in "hold" with eval(). by pressing "=" sign. ===== //
function calculate(){
	 try {
		// Calculate and update result to screen.
	 	let result = eval(hold);
	 	screen.innerText = result;
	 	
		// Show history to history's screen
		displayHistory();
	 	
		// Convert result to string and reassign value to "display"
		display = result.toString();

		// Affer calculate "DEL" work as "AC"
		isCalcuted = true;
	
	// If enter invalid expression show "Error"
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
	if (!isCalcuted){
		// Delete last character and store in "display".
		let delateLastNumber =  display.slice(0, -1);
		display = delateLastNumber;
		
		// Show removed to screen
		screen.textContent = display;
	
	// After calculate "DEL" work as "AC"
	} else {
		// Use the same function
		allClear();
		
		// Set it to defualt value
		// Mean, can use "DEL"
		isCalcuted = true;
	}

}

function calculatePrecent(){
	let precent = hold/100;
	screen.textContent = precent;
}

function hideOperator(){
	let isOperator = operator.includes(globalValue);
	
	if (isOperator) {
		// hold += globalValue;
		changeOperator();

	} else {
		display += globalValue;
		hold += display[1];
	}
}

function removeNumAfterOperator(){
	let isOperator = operator.includes(globalValue);
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
	let isOperator = operator.includes(globalValue);
	if (isOperator) {
		screen.textContent = displayBackUp;
		console.log("yes")
	} else {
		screen.textContent = display;
	}
}

function firstAssighSecondPush (){
	if (firstClick){
		hold = globalValue;
		// set false, Don't use this condition agian.
		firstClick = false;
	// If 
	} else {
		hold += globalValue;
	}
}

function changeOperator(){
	if (operator.includes(hold.slice(-1))) {
		hold = hold.slice(0, 1);
		hold += globalValue;
	} else {
		hold += globalValue;
		console.log("else")
	}
}

