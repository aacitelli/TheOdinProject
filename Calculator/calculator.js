function calculate(input)
{

}

// Debug 
console.log("Precedence of + is " + getPrecedence("+"));
console.log("Precedence of * is " + getPrecedence("*"));

// */ = 2, +- = 1
// Lower precedence means it gets executed first 
function getPrecedence(input)
{
    if (input === "*" || input === "/")
    {
        return 1;
    }

    // Anything else is lower precedence 
    return 2;
}

// Uses this algorithm: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
function infixToPostfix(input)
{
    // Great visualization of how this works: https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Shunting_yard.svg/400px-Shunting_yard.svg.png
    let currentToken;
    let outputStack = [], operatorStack = [];

    // Note - Don't have to worry about stripping whitespace b/c there's no way for the user to input it

    // Loops through every character in the input string 
    for (let i = 0; i < input.length; i++)
    {
        // Read a token 
        currentToken = input[i];

        // If token is a number
        if (!isNaN(currentToken))
        {
            // Push token to output queue 
            outputStack.push(currentToken); 
            continue; // Go to the next char in the input sequence
        }

        // If the token is an operator
        else if (currentToken === "*" || currentToken === "/" || currentToken === "+" || currentToken === "-")
        {
            let precedence = getPrecedence(currentToken);

            /* While there is an operator w/ greater precedence on top OR 
                the operator at top of stack is left associative and equal precedence
                Note - All operators built into my calculator are left associative */
            // Exits loop pretty much only when operator stack is empty due to how I built program 
            while (getPrecedence(operatorStack[operatorStack.length - 1]) <= precedence && operatorStack.length > 0)
            {
                // Moves from end ("top") of operator stack to end of output stack 
                outputStack.push(operatorStack.pop());
            }

            // Places the current token in the next place 
            operatorStack.push(currentToken);
            continue; // Go to the next char in the input sequence
        }

        else if (currentToken === "(")
        {
            operatorStack.push(currentToken);
            continue; // Go to the next char in the input sequence
        }

        else if (currentToken === ")")
        {
            let flag = false;
            while (operatorStack[operatorStack.length - 1] !== "(")
            {
                outputStack.push(operatorStack.pop());

                if (operatorStack.length === 0)
                {
                    console.log("Program looked for a closing brace and found none. Breaking loop.");
                    flag = true;
                    break;
                }
            }

            // Flag is only true if it didn't find a left brace - This is basically error handling
            if (!flag)
            {
                operatorStack.pop();
            }
            
            continue;
        }    

        else
        {
            console.log("Current character results in unhandled behavior.");
        }
    }

    // When there's no more tokens to read from the input, move everything from the operator stack to the output stack 
    while (operatorStack.length > 0)
    {
        outputStack = outputStack + operatorStack.pop();
    }

    /* This line takes some explanation...
        The array is first converted to a string, which still has commas in it. I tried using join(""), but that didn't work
        for some unknown reason. 

        Then, replace() converts every comma to an empty string. The "/,/gi" is replace syntax for a global, case-insensitive replacement
        because otherwise replace() only replaces the first occurrence */
    return outputStack.toString().replace(/,/gi, "");
}

// Holds a reference to the field where what the user inputs is stored
var inputField = document.getElementById("inputField");

// This keeps track of what's in the inputField basically and is used for JS stuff 
var inputExpression = "";

// Getting references to all the buttons so event listeners can be assigned 
var zeroButton = document.getElementById("0Button");
var oneButton = document.getElementById("1Button");
var twoButton = document.getElementById("2Button");
var threeButton = document.getElementById("3Button");
var fourButton = document.getElementById("4Button");
var fiveButton = document.getElementById("5Button");
var sixButton = document.getElementById("6Button");
var sevenButton = document.getElementById("7Button");
var eightButton = document.getElementById("8Button");
var nineButton = document.getElementById("9Button");
var equalsButton = document.getElementById("=Button");
var plusButton = document.getElementById("+Button");
var minusButton = document.getElementById("-Button");
var multiplyButton = document.getElementById("*Button");
var divideButton = document.getElementById("/Button");
var clearButton = document.getElementById("clearButton");

/* All the event listeners... here we go */
// These all basically add their value to the expression then refresh the value of inputField 
zeroButton.addEventListener("click", function()
{
    inputExpression = inputExpression + "0";
    inputField.textContent = inputExpression;
});

oneButton.addEventListener("click", function()
{
    inputExpression += "1";
    inputField.textContent = inputExpression;
});

twoButton.addEventListener("click", function()
{
    inputExpression += "2";
    inputField.textContent = inputExpression;
});

threeButton.addEventListener("click", function()
{
    inputExpression += "3";
    inputField.textContent = inputExpression;
});

fourButton.addEventListener("click", function()
{
    inputExpression += "4";
    inputField.textContent = inputExpression;
});

fiveButton.addEventListener("click", function()
{
    inputExpression += "5";
    inputField.textContent = inputExpression;
});

sixButton.addEventListener("click", function()
{
    inputExpression += "6";
    inputField.textContent = inputExpression;
});

sevenButton.addEventListener("click", function()
{
    inputExpression += "7";
    inputField.textContent = inputExpression;
});

eightButton.addEventListener("click", function()
{
    inputExpression += "8";
    inputField.textContent = inputExpression;
});

nineButton.addEventListener("click", function()
{
    inputExpression += "9";
    inputField.textContent = inputExpression;
});

// This one legit just calls the calculate function 
equalsButton.addEventListener("click", calculate(inputExpression));

plusButton.addEventListener("click", function()
{
    inputExpression += "+";
    inputField.textContent = inputExpression;
});

minusButton.addEventListener("click", function()
{
    inputExpression += "-";
    inputField.textContent = inputExpression;
});

multiplyButton.addEventListener("click", function()
{
    inputExpression += "*";
    inputField.textContent = inputExpression;
});

divideButton.addEventListener("click", function()
{
    inputExpression += "/";
    inputField.textContent = inputExpression;
});

clearButton.addEventListener("click", function()
{
    // Sets input field to be an empty string 
    inputExpression = "";
    inputField.textContent = inputExpression;
});

// Testing infix -> postfix
var input = document.getElementById("inputString");
input.innerHTML = "3+(4+6)*3+5*(4-3)";

var output = document.getElementById("outputString");

document.addEventListener("DOMContentLoaded", function()
{
    output.innerHTML = infixToPostfix(input.textContent);
});






