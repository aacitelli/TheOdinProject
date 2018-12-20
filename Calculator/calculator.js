var inputField = document.getElementById("inputField");
var inputExpression = "";

// Takes in a string expression and either calculates it or throws an error 
function calculate(expression)
{

}

function infixToPostfix(expression)
{

}

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
    inputExpression += "0";
    inputField.value = inputExpression;
});

oneButton.addEventListener("click", function()
{
    inputExpression += "1";
    inputField.value = inputExpression;
});

twoButton.addEventListener("click", function()
{
    inputExpression += "2";
    inputField.value = inputExpression;
});

threeButton.addEventListener("click", function()
{
    inputExpression += "3";
});

fourButton.addEventListener("click", function()
{
    inputExpression += "4";
});

fiveButton.addEventListener("click", function()
{
    inputExpression += "5";
});

sixButton.addEventListener("click", function()
{
    inputExpression += "6";
});

sevenButton.addEventListener("click", function()
{
    inputExpression += "7";
});

eightButton.addEventListener("click", function()
{
    inputExpression += "8";
});

nineButton.addEventListener("click", function()
{
    inputExpression += "9";
});

// This one legit just calls the calculate function 
equalsButton.addEventListener("click", calculate(expression));

plusButton.addEventListener("click", function()
{
    inputExpression += "+";
});

minusButton.addEventListener("click", function()
{
    inputExpression += "-";
});

multiplyButton.addEventListener("click", function()
{
    inputExpression += "*";
});

divideButton.addEventListener("click", function()
{
    inputExpression += "/";
});

clearButton.addEventListener("click", function()
{
    inputExpression = "";
});

