//output functions
let history = document.getElementById("history-value");
let output = document.getElementById("output-value");

// function printHistory(num) {
// 	document.getElementById("history-value").innerText = num;
// }


const backspace = document.getElementById("backspace");
backspace.addEventListener('click', function () {

    output.innerText = output.innerText.substring(0, output.innerText.length - 1);
})

//class name
let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        output.innerText += number[i].innerText;
    })
    
}

let operator = document.getElementsByClassName("operator");

for (let i = 0; i < operator.length; i++) {
    const element = operator[i];
    element.addEventListener('click', function () {
        output.innerText += operator[i].innerText;
    })
}







//output.innerText = parseFloat(output.innerText) + parseFloat(number[i].innerText);
//         