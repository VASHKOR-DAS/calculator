//output functions
let history = document.getElementById("history-value");
let output = document.getElementById("output-value");

// function printHistory(num) {
// 	document.getElementById("history-value").innerText = num;
// }

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        output.innerText += number[i].innerText;
    })
}

let operator = document.getElementsByClassName("operator");

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {

        //history.innerText = output.innerText + operator[i].innerText;
        //output.innerText = "";

        if (this.id == "clear") { //operator er vitorer jei id ta click korbe = this
            output.innerText = "";
            history.innerText = "";
        }

        if (this.id == "backspace") {
            output.innerText = output.innerText.substring(0, output.innerText.length-1)
        }

    })
}

