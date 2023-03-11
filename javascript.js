let runningTotal = "";
let num = "";
let operander = "";
let operanderCount = 0;

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

function operate(a, b, operander, tempOperander) {

        if (operander === "+") {
            runningTotal = add(a, b);
            if (tempOperander === "=") {
                result.innerHTML = runningTotal;
                calculation.innerHTML = "";
            }
            else {
                result.innerHTML = runningTotal;
                calculation.innerHTML = `${runningTotal} ${tempOperander}`;
            }
        num = "";
        }

        else if (operander === "-") {
            runningTotal = subtract(a, b);
            if (tempOperander === "=") {
                result.innerHTML = runningTotal;
                calculation.innerHTML = "";
            }
            else {
                result.innerHTML = runningTotal;
                calculation.innerHTML = `${runningTotal} ${tempOperander}`;
            }
        num = "";
        }

        else if (operander === "x") {
            runningTotal = multiply(a, b);
            if (tempOperander === "=") {
                result.innerHTML = runningTotal;
                calculation.innerHTML = "";
            }
            else {
                result.innerHTML = runningTotal;
                calculation.innerHTML = `${runningTotal} ${tempOperander}`;
            }
        num = "";
        }

        else if (operander === "÷") {
            console.log(num);
            if (num == 0) {
                window.alert("You can't divide by zero!");
                clearFunction();
                return;
            }

            runningTotal = divide(a, b);
            if (tempOperander === "=") {
                result.innerHTML = runningTotal;
                calculation.innerHTML = "";
            }
            else {
                result.innerHTML = runningTotal;
                calculation.innerHTML = `${runningTotal} ${tempOperander}`;
            }
        num = "";
        }

        else if (operander === "=") {
            result.innerHTML = runningTotal;
            calculation.innerHTML = `${runningTotal} ${tempOperander}`;
        }
}

//concatenate numbers
function createNumber(a) {
    return num += a;
}

//when a user clicks a number, change a
document.querySelectorAll('#number-buttons').forEach(button => {
    button.addEventListener('click', (e) => {
        let a = e.target.value;
        if (num.length <= 17) {
            num = createNumber(a);
        }       
        result.innerHTML = num;     
    })
});

//when a user clicks a function, perform that function
document.querySelectorAll('#function-buttons').forEach(button => {
    button.addEventListener('click', function()  {
        ++operanderCount;
        let tempOperander = button.value

        //the first time the user clicks a function button we dont need to perform a functio
        if (operanderCount === 1) {
            if (button.value === "=") {
                if (num === "") {
                    runningTotal = 0
                }
                else {
                    runningTotal = num;
                }
                num = "" ;
                calculation.innerHTML = runningTotal; 
                operander = button.value;
            }

            else {
                runningTotal = num;
                num = "";
                calculation.innerHTML = `${runningTotal} ${tempOperander}`;
                operander = button.value;
            }
        }

        else if (operanderCount > 1) {
            operate(runningTotal, num, operander, tempOperander);
            //change the operander after the function is called so that it is saved for the next user click
            operander = button.value;
        }
    })
});

//clear function
// const clear = document.getElementById("clear");
// clear.addEventListener("click", function() {
//     runningTotal = 0;
//     num = "";
//     calculation.innerHTML = "";
//     result.innerHTML = runningTotal;
//     operanderCount = 0;
// });

//clear function
const clear = document.getElementById("clear");
clear.addEventListener("click", clearFunction);

function clearFunction() {
    runningTotal = 0;
    num = "";
    calculation.innerHTML = "";
    result.innerHTML = runningTotal;
    operanderCount = 0;
}

//delete function
const deleteClicked = document.getElementById("delete");
deleteClicked.addEventListener("click", function(){
    let numArray = Array.from(num);
    numArray.splice(-1)
    num = numArray.join("");
    result.innerHTML = num;
});