let runningTotal = "";
let num = "";
let functionCounter = 0;

const result = document.querySelector(".result");
const calculation = document.querySelector(".calculation");
calculation.innerHTML = runningTotal;

//functions
function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

//concatenate numbers
function createNumber(a) {
    return num += a;
}

//end of functions

//when a user clicks a number, change a
document.querySelectorAll('#number-buttons').forEach(button => {
    button.addEventListener('click', (e) => {
        let a = e.target.value;
        num = createNumber(a);
        result.innerHTML = num;        
    })
});

//when a user clicks a function, perform that function
document.querySelectorAll('#function-buttons').forEach(button => {
    button.addEventListener('click', (e) => {
        // if (e.target.value = "÷") {
        //     //perform the function, i.e. + - x
        //     let temp = 1;
        //     runningTotal = divide(num, temp);
        //     //show the user the result so far
        //     result.innerHTML = runningTotal;
        //     //show the user the calculation so far
        //     calculation.innerHTML = `${runningTotal} + `;
        //     //reset the number the user is now typing
        //     num = "";
        // }
        
        // // else if (e.target.value = "x") {
        // //     //perform the function, i.e. + - x
        // //     runningTotal = multiply(runningTotal, num);
        // //     //show the user the result so far
        // //     result.innerHTML = runningTotal;
        // //     //show the user the calculation so far
        // //     calculation.innerHTML = `${runningTotal} + `;
        // //     //reset the number the user is now typing
        // //     num = "";
        // // }

        // if (e.target.value = "-") {
        //     //perform the function, i.e. + - x
        //     runningTotal = subtract(runningTotal, num);
        //     //show the user the result so far
        //     result.innerHTML = runningTotal;
        //     //show the user the calculation so far
        //     calculation.innerHTML = `${runningTotal} - `;
        //     //reset the number the user is now typing
        //     num = "";
        //     functionCounter++;
        // }

        if (e.target.value = "+") {
            //perform the function, i.e. + - x
            runningTotal = add(runningTotal, num);
            //show the user the result so far
            result.innerHTML = runningTotal;
            //show the user the calculation so far
            calculation.innerHTML = `${runningTotal} + `;
            //reset the number the user is now typing
            num = "";
        }
    })
});

//clear function
const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
    runningTotal = 0;
    num = "";
    calculation.innerHTML = "";
    result.innerHTML = runningTotal;
});

// const colourModeClicked = document.querySelector(".colour-mode");
// colourModeClicked.addEventListener("click", function() {
//     paintSetting = "colour";
// });

// console.log(add(a, b));
// console.log(subtract(a, b));
// console.log(multiply(a, b));
// console.log(divide(a, b));