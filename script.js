// set default screen value to 0
let displayScreen = 0;
// set default two collect number to 0, 0
let calculateNumber = ["0", "0"];
// 
let resultDisplay = false;
// used to append text to screen
let displayElement = document.getElementById("display")
// used to check if value we get operator or not
let operatorSymbol = ["+", "-", "*", "/"];
// used to collect the argument of updateDisplay() function
let value;
// used to store operator that will be calculated
let toCalculate = "";
// condition to check if it's an operator
let isSymbol = false;
// get the element that will be changed in color when user clicks on the button.
let ButtonToChangeColor;
// remember the symbol of the last clicked operator
let rememberSymbol = "";

// append the text to the screen and display the changed color on the button that the user clicks.
function updateDisplay(getValue) {
    // copy the value. 
    value = getValue;

    // If there's no number appended to the screen
    if (displayScreen === 0 || resultDisplay) {
        checkOperatorSymbol();  // Call the checkOperatorSymbol();
        if (isSymbol) {
            
            changeOperatorButtonColor(); // highlight the operator button that user clicked
            
            if (rememberSymbol !== "") {
                removePrevious();
            }
        } else {
            displayScreen = getValue; // add value gotten when user clicks 
        }

    } else {
        
        checkOperatorSymbol();
        
        if (isSymbol) {
            changeOperatorButtonColor();
        } else {
            displayScreen += getValue;
        }

    };

    resultDisplay = false;
    showOnDisplay();
}

// Function to display the content on the screen
function showOnDisplay() {
    displayElement.textContent = displayScreen;
}

// Check if the button that the user clicked is a number or an operator
function checkOperatorSymbol() {
    // Check if the button that the user clicked is an operator and return boolean then store in "isOperatorInList" 
    let isOperatorInList = operatorSymbol.includes(value);
    let i = 0;
    // If the user clicked the operator button
    if (isOperatorInList) {
        // Store the number that the user entered when the user clicked the operator button 
        calculateNumber[i] = displayScreen;
        // Used in if condition in the updateDisplay() function to update the screen
        isSymbol = true;
        // Used to calculate when the user clicks "=" 
        toCalculate = value;
    } else {
        isSymbol = false;
    }
}

// Change the color of the operator that the user clicked.
function changeOperatorButtonColor() {
    resetPrevious();
    getButtonTochangeColor();
    ButtonToChangeColor.classList.add("clicked");
}

// Reset the color of the previously clicked operator button
function resetPrevious() {
    if (rememberSymbol !== "") {
        let previousButton = document.getElementById(rememberSymbol);
        previousButton.classList.remove("clicked");
        previousButton.classList.add("operator-button");
    }
}

// Function to remove the "clicked" class and add back the "operator-button" class
function removePrevious() {
    ButtonToChangeColor.classList.remove("clicked");
    ButtonToChangeColor.classList.add("operator-button");
}

// Get the button to change color based on the operator
function getButtonTochangeColor() {
    switch (toCalculate) {
        case "/":
            ButtonToChangeColor = document.getElementById("divide");
            rememberSymbol = "divide"
            break;
        case "*":
            ButtonToChangeColor = document.getElementById("multiply");
            rememberSymbol = "multiply"
            break;
        case "+":
            ButtonToChangeColor = document.getElementById("plus");
            rememberSymbol = "plus"
            break;
        case "-":
            ButtonToChangeColor = document.getElementById("minus");
            rememberSymbol = "minus"
            break;
    }
}
