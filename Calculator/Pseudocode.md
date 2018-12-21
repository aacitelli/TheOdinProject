Anden Acitelli

Algorithm Pseudocode:
1. Initializes variables
2. Enters array that iterates through each element in the input string

Each Iteration of the Loop: 

	1. Sets currentToken equal to a 1-character string that's that index of the input string
	2. If currentToken is not-not a number (AKA if it's a number)
		
		2a. Push currentToken to the end of the outputStack array
        2b. Skip rest of loop and go to the next character in the input string b/c this one has been handled

    3. Else If currentToken equals one of the four operators

        3a. Get the precedence of currentToken
        
        Run while precedence of currentToken <= precedence of end character of operatorStack AND 
        operatorStack isn't empty:

            1. Transfer last operator in operatorStack to end of outputStack 

        3b. Put currentToken into operatorStack 
        3c. Skip rest of loop and go to the next character in the input string b/c this one has been handled

    4. Else if currentToken is an open parentheses

        4a. Put currentToken into outputStack
        4b. Skip rest of loop and go to the next character in the input string b/c this one has been handled

    5. Else if currentToken is a closed parentheses 

        5a. Pop stuff off of the operatorStack to outputStack until you get to the open parentheses
        5b. Then, remove that open parentheses
        5c. Skip rest of loop and go to the next character in the input string b/c this one has been handled

    6. Else debug output 

Post-Iteration-Loop

1. Move all operands from operatorStack to outputStack

Actual Tracethrough
Infix 3 * 5 + 4 - 3 * 6 + 9 -> Postfix (3 5 * 4 + 3 6 * - 9 +)

//-----------------------

Current Character: 3

Gets pushed to outputStack because it is a number. Program iterates to next character.

Current Output Stack: 3 
Current Operand Stack: N/AKA

//-----------------------

Current Character: *

Gets added to operatorStack because it skips the while loop b/c length is zero. 

Current Output Stack: 3
Current Operator Stack: * 

//-----------------------

Current Character: 5

Gets pushed to outputStack b/c it is a number. Program iterates to next character. 

Current Output Stack: 3 5 
Current Operator Stack: *

//-----------------------

Current Character: +



