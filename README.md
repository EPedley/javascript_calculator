# javascript_calculator

As part of my progress through The Odin Project I have created a calculator using HTML, CSS and Javascript.

The calculator:
- Takes in the single digits the user presses on the calculator and concatenates them into a string
- Takes any operander from + = x ÷ - and performs the function on the two numbers the user enters
- Enables the user to chain functions as they would on a normal calculator
- Shows the user the running total as well as the function they are currently performing
- Enables the user to use decimal points, without chaining them
- Shows an error message when the user tries to divide by 0 and resets the calculator
- Includes a clear button which wipes the screen and the running total
- Includes a delete button which removes the last number the user has input

Working through this project I have learnt to do the following:
- Create objects
- Access object properties
- Use multiple object operators
- Use array functions to manipulate strings

The most challenging element of this project was figuring out what I wanted my code to do and when I wanted it to operate. Because, in most cases, I wanted the function to operate once the user had actually clicked the following operander (so they could chain functions) I had to find a way to store both previous numbers and the operander and perform that calculation rather than the calculation currently in play.