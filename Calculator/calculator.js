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

function infixToPostfix(input)
{
    let output = "";

    return output;
}

