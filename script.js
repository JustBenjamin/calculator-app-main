// Calculator

let result = document.getElementById('result');

function getResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    result.value = eval(result.value);
}


// Themes script

const toggleButtons = document.getElementsByClassName("toggle-btn");
var arr = [...toggleButtons];

arr.forEach((element, index) => {
    element.addEventlistener("click", () => {
        element.style.opacity = "1";

        arr 
            .filter(function (item)  {
                return item != element;
            })
            .forEach((item) => {
                item.style.opacity = "0";
            })


    })
})
