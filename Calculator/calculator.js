/* All this stuff gets executed on page load */
var inputField = document.getElementById("inputField");
var inputExpression = "";

// Getting all the elements 
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
zeroButton.addEventListener("click", function()
{
    console.log("Event listener for zero fired.");
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
    inputExpression = "";
    inputField.textContent = inputExpression;
});


// Takes in a string expression and either calculates it or throws an error 
function calculate(expression)
{

}

// Uses this algorithm: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
// Note: Precedence of +- is 
function infixToPostfix(input)
{
    // Great visualization of how this works: https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Shunting_yard.svg/400px-Shunting_yard.svg.png
    let output = "";
    let currentToken;
    let outputStack = [], operatorStack = [];

    // Note - Don't have to worry about stripping whitespace b/c there's no way for the user to input it

    // Loops through every character in the input string 
    for (let i = 0; i < input.length; i++)
    {
        currentToken = input[i];

        // If it's a number, it enters this loop 
        if (!isNaN(currentToken))
        {
            // outputStack is a string so I have to play it safe and not use push()
            // Todo - Figure out if I can use array methods with JS strings ^ 
            outputStack = outputStack + currentToken;
            continue; // Go to the next char in the input sequence
        }

        // If it's an operator, then it enters this loop 
        else if (currentToken === "*" || currentToken === "/" || currentToken === "+" || currentToken === "-")
        {
            let precedence = getPrecedence(currentToken);

            // This is pretty much taken straight from wikipedia's pseudocode and was a LOT of fun to program
            while (getPrecedence(operatorStack[operatorStack.length - 1]) >= precedence &&
                    operatorStack[operatorStack.length - 1] !== "(")
            {
                /* The below line combines these two and is easier to understand 
                outputStack = outputStack + operatorStack[operatorStack.length - 1];
                operatorStack.splice(operatorStack[operatorStack.length - 1], 1); */
                
                // Removes that operator from the operator stack and puts it into the end stack (all in one neat line)
                outputStack = outputStack + operatorStack.pop();                
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
            while (operatorStack[operatorStack.length - 1] !== "(")
            {
                outputStack = outputStack + operatorStack.pop();
            }

            outputStack = outputStack + operatorStack.pop();
            continue;
        }    
    }

    // When there's no more tokens to read from the input, move everything from the operator stack to the output stack 
    while (operatorStack.length !== 0)
    {
        outputStack = outputStack + operatorStack.pop();
    }

    return output;
}

// */ = 2, +- = 1
function getPrecedence(input)
{
    if (input === "*" || input === "/")
    {
        return 1;
    }

    return 2;
}

// Testing infix -> postfix
var input = document.getElementById("inputString");
input.textContent = "3 * 5 + 4 - 3 * 6 + 9";

var output = document.getElementById("outputString");
output.textContent = infixToPostfix(input.textContent);

