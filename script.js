// set default screen value to 0
let displayScreen = 0;
// set default two collect number to 0, 0
let calculateNumber = [0, 0];
// 
let resultDisplay = false;
// used to append text to screen
let displayElement = document.getElementById("display")
// used to check if value we get operator or not
let operatorSymbol = ["+", "-", "*", "/"];
// used to collect the argument of updateDisplay() function
let value;
// ueed to store operator that will be calculated
let toCalculate = "";
// condition to check is it operator? 
let isSymbol = false;
//get the element that will be change the color when user click on the button.
let ButtonToChangeColor;


// This function used to append the text to screen and display the change color on the button that user click.
function updateDisplay(getValue){
    // copy the value. 
    value = getValue;
    
    // If there's no number append to screen
    if (displayScreen === 0 || resultDisplay){
        // Call the checkOperatorSymbol();
        checkOperatorSymbol();
        if (isSymbol) {
            // highlight the operator button that user click
            changeOperatorButtonColor();
        } else {
            // add value get when user click 
            displayScreen = getValue;
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


//
function showOnDisplay(){
    displayElement.textContent = displayScreen;
}


/*
    1. Check the botton that user click is number or operator. 
*/
function checkOperatorSymbol(){
    // Check the botton that user click is operator. and return boolean then store in "isOperatorInList" 
    let isOperatorInList = operatorSymbol.includes(value);
    
    // If user click operator button
    if(isOperatorInList){
        // Store the number that user enter when user click operator button 
        calculateNumber[i] = displayScreen;
        // Used in if conditon in updateDisplay() function to update screen
        isSymbol = true;
        // Used to calculate when the user click "=" 
        toCalculate = value;
    }
}

// Change the color of operator that user click.
function changeOperatorButtonColor(){
    getButtonTochangeColor();
    ButtonToChangeColor.classList.add("clicked");
}

function getButtonTochangeColor(){
    
    switch (toCalculate) {
        case "/":
            ButtonToChangeColor = document.getElementById("divide");
            break;
        case "*":
            ButtonToChangeColor = document.getElementById("multiply");
            break;
        case "+":
            ButtonToChangeColor = document.getElementById("plus");
            break;
        case "-":
            ButtonToChangeColor = document.getElementById("minus");
            break;
    }
}