# Calculator

## What is this?

This is a calculator where you can put in a mathematical expression and it will spit out an answer. 

## How does it work?

This is much simplified. The program runs through the following few steps for every calculation: 

1. The user's input is read in as a string
2. That string is then fed through an array that condenses the numbers (which are currently just
    length 1 strings) into multi-digit numbers. This works by combining everything in between the operators, in short. It also puts each operator or multi-digit number in an array. 
3. That array is then fed into a infix to postfix conversion function, which goes through an 
    algorithm called the "Shunting-Yard Algorithm" (https://en.wikipedia.org/wiki/Shunting-yard_algorithm) in order to get the expression into postfix form, a form far easier to algorithmically reduce to the answer
4. The postfix form is then fed into a function which converts it into a number (the answer). The       algorithm for this is relativitely simple and I figured it out manually. 

## What did I learn from it? 

I learned the general process for how calculators work and got a pretty in-depth look at the actual algorithm(s) behind it. 

As a continuation of that, I learned what postfix notation is, how to convert from infix to postfix, and how to resolve postfix notation to a number. I also got practice express an algorithm in actual code that works with the general framework you are running it in. 

I leared a lot about JavaScript in general, but particularly with DOM editing and parsing, event listeners, and JavaScript arrays and array functions. 










