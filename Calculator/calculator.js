// Used only for output (NOT to read in a value)
var inputField = document.getElementById("inputField");

// Used for input
var inputArr = [];

/* Getting references for the Event Listeners */
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
var leftParenButton = document.getElementById("(Button");
var rightParenButton = document.getElementById(")Button");

/* Event Listeners */
zeroButton.addEventListener("click", function()
{
    inputArr.push(0);
    updateInputField();
});

oneButton.addEventListener("click", function()
{
    inputArr.push(1);
    updateInputField();
});

twoButton.addEventListener("click", function()
{
    inputArr.push(2);
    updateInputField();
});

threeButton.addEventListener("click", function()
{
    inputArr.push(3);
    updateInputField();
});

fourButton.addEventListener("click", function()
{
    inputArr.push(4);
    updateInputField();
});

fiveButton.addEventListener("click", function()
{
    inputArr.push(5);
    updateInputField();
});

sixButton.addEventListener("click", function()
{
    inputArr.push(6);
    updateInputField();
});

sevenButton.addEventListener("click", function()
{
    inputArr.push(7);
    updateInputField();
});

eightButton.addEventListener("click", function()
{
    inputArr.push(8);
    updateInputField();
});

nineButton.addEventListener("click", function()
{
    inputArr.push(9);
    updateInputField();
});

// This one legit just calls the calculate function 
// Todo - Make sure this works w/ the array shift 
// Function removed b/c it's not doing anything atm 
equalsButton.addEventListener("click", function()
{
    inputField.textContent = postfixToNumber(infixToPostfix(inputArr));
}); 

plusButton.addEventListener("click", function()
{
    inputArr.push('+');
    updateInputField();
});

minusButton.addEventListener("click", function()
{
    inputArr.push("-");
    updateInputField();
});

multiplyButton.addEventListener("click", function()
{
    inputArr.push("*");
    updateInputField();
});

divideButton.addEventListener("click", function()
{
    inputArr.push("/");
    updateInputField();
});

clearButton.addEventListener("click", function()
{
    // Sets input field to be an empty string 
    inputArr = [];
    updateInputField();
});

leftParenButton.addEventListener("click", function()
{
    inputArr.push("(");
    updateInputField();
});

rightParenButton.addEventListener("click", function()
{
    inputArr.push(")");
    updateInputField();
});

/* Functions */

// Draws the input array onto user output
function updateInputField()
{
    // Outputs the array, replaces all occurrences of commas with an empty string
    inputField.textContent = inputArr.join("");
}

// Assigns a precedence to each operator 
// Needed for infixToPostFix Shunting-Yard implementation 
function getPrecedence(input)
{
    if (input === "*" || input === "/")
    {
        return 1;
    }

    else if (input === "(")
    {
        return 3;
    }

    // Anything else is lower precedence 
    return 2;
}

// Converts the original array, which kept multi-digit numbers across several array spots, into one with the numbers in a single array spot 
function condenseArr(inputArr)
{
    let currIndex = 0;

    // Only need to go until the second to last element b/c the last element has nothing after it and therefore can't be simplified 
    while (currIndex < inputArr.length)
    {
        // If the current index is a number, combines it with every number thereafter until it hits an operator 
        if (!isNaN(inputArr[currIndex]))
        {
            while (!isNaN(inputArr[currIndex + 1]))
            {
                // Adds the next element onto the current element (adds them as strings then parses as an integer)
                inputArr[currIndex] = parseInt(inputArr[currIndex].toString() + inputArr[currIndex + 1].toString());
                
                // Splice modifies the intial array
                // This removes whatever's right after currIndex
                inputArr.splice(currIndex + 1, 1);
            }
        }

        currIndex++;
    }

    return inputArr;
}

// Uses this algorithm: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
function infixToPostfix(inputArr)
{
    // Condenses the array so that consequent numbers are compiled into one number 
    inputArr = condenseArr(inputArr); 

    // Great visualization of how this works: https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Shunting_yard.svg/400px-Shunting_yard.svg.png
    let currentToken;
    let outputStack = [], operatorStack = [];

    // Note - Don't have to worry about stripping whitespace b/c there's no way for the user to input it

    // Loops through every character in the input string 
    for (let i = 0; i < inputArr.length; i++)
    {
        // Read a token 
        currentToken = inputArr[i];

        // If token is a number
        if (!isNaN(currentToken))
        {
            // Push token to output queue 
            outputStack.push(parseInt(currentToken));  // Base 10 by default 
            continue; // Go to the next char in the input sequence
        }

        // If the token is an operator
        else if (currentToken === "*" || currentToken === "/" || currentToken === "+" || currentToken === "-")
        {
            let precedence = getPrecedence(currentToken);

            /* While there is an operator w/ greater precedence on top OR 
                the operator at top of stack is left associative and equal precedence
                Note - All operators built into my calculator are left associative */
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
            while (operatorStack[operatorStack.length - 1] !== "(" && operatorStack.length > 0)
            {
                outputStack.push(operatorStack.pop());
            }
            
            // Pops the open parenthesis off 
            operatorStack.pop();     
            continue;
        }    

        else
        {
            console.log("Current character results in unhandled behavior.");
            continue;
        }
    }

    // When there's no more tokens to read from the input, move everything from the operator stack to the output stack 
    while (operatorStack.length > 0)
    {
        outputStack.push(operatorStack.pop());
    }

    return outputStack;
}

// Simplifies postfix notation (each operand/number being a spot in the array) to an actual number
// This is massively easier than infix -> postfix
// Refer to http://www.oxfordmathcenter.com/drupal7/node/620 for the one I used
function postfixToNumber(inputArr)
{
    let stack = [], currToken;
    
    for (let i = 0; i < inputArr.length; i++)
    {
        currToken = inputArr[i];

        // Have to use an if here b/c there's an infinite number of possible inputs
        if (!isNaN(currToken))
        {
            stack.push(inputArr[i]);
        }

        else 
        {
            switch (currToken)
            {
                case "+":
                {
                    // Adds the last two elements then pops the last one off b/c it's accounted for 
                    stack[stack.length - 2] = stack[stack.length - 2] + stack.pop();
                    break;
                }

                case "-":
                {
                    // Subtracts the second from the first and pops the last one off for reasons discussed above
                    stack[stack.length - 2] = stack[stack.length - 2] - stack.pop();
                    break;
                }

                case "*":
                {
                    // Similar to above
                    stack[stack.length - 2] = stack[stack.length - 2] * stack.pop();
                    break;
                }
                
                case "/":
                {
                    stack[stack.length - 2] = stack[stack.length - 2] / stack.pop();
                    break;
                }

                default: 
                {
                    console.log("Input not recognized.");
                    break;
                }
            }
        }
    }

    // This is necessary b/c if the user tries any more calculations it would previously 
    // use the original stack and miss all sorts of orders of operations stuff
    inputArr = [stack[0]];

    // By this point stack has been reduced to a single number - The answer
    return stack[0];
}





