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

function themeSwitch(x) {

    const btn = document.getElementsByTagName("button");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");


    switch(x) {
        case 1: 
        // code
        one.style.opacity = "1";
        two.style.opacity = "0";
        three.style.opacity = "0";


        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "hsl(45, 7%, 89%)";
            btn[i].style.color = "hsl(221, 14%, 31%)";
            btn[i].style.borderBottomColor = "hsl(35, 11%, 61%)";
          }
        document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
        document.getElementsByTagName("body")[0].style.color = "hsl(0, 0%, 100%)";
        document.querySelector(".pill").style.backgroundColor = "hsl(223, 31%, 20%)";
        document.querySelector(".pad").style.backgroundColor = "hsl(223, 31%, 20%)";
        document.querySelector(".display").style.backgroundColor = "hsl(224, 36%, 15%)";
        document.querySelector(".display").style.color = "hsl(0, 0%, 100%)";
        document.querySelectorAll(".delReset")[0].style.backgroundColor = "hsl(225, 21%, 49%)";
        document.querySelectorAll(".delReset")[0].style.color = "hsl(0, 0%, 100%)";
        document.querySelectorAll(".delReset")[1].style.backgroundColor = "hsl(225, 21%, 49%)";
        document.querySelectorAll(".delReset")[1].style.color = "hsl(0, 0%, 100%)";

        document.querySelectorAll(".delReset")[0].style.borderBottomColor = "hsl(224, 28%, 35%)";
        document.querySelectorAll(".delReset")[1].style.borderBottomColor = "hsl(224, 28%, 35%)";
      

        document.querySelector(".equalSign").style.backgroundColor = "hsl(6, 63%, 50%)";
        document.querySelector(".equalSign").style.color = "hsl(0, 0%, 100%)";
        document.querySelector(".equalSign").style.borderBottomColor = "hsl(6, 70%, 34%)"


        break;


        case 2:
        //code
        console.log("two")

        one.style.opacity = "0";
        two.style.opacity = "1";
        three.style.opacity = "0";

        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "hsl(45, 7%, 89%)";
            btn[i].style.color = "hsl(60, 10%, 19%)";
            btn[i].style.borderBottomColor = "hsl(35, 11%, 61%)";
          }
        document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
        document.getElementsByTagName("body")[0].style.color = "hsl(60, 10%, 19%)";
        document.querySelector(".pill").style.backgroundColor = "hsl(0, 5%, 81%)";
        document.querySelector(".pad").style.backgroundColor = "hsl(0, 5%, 81%)";
        document.querySelector(".display").style.backgroundColor = "hsl(0, 0%, 93%)";
        document.querySelector(".display").style.color = "hsl(60, 10%, 19%)";

        document.querySelectorAll(".delReset")[0].style.backgroundColor = "hsl(185, 42%, 37%)";
        document.querySelectorAll(".delReset")[1].style.backgroundColor = "hsl(185, 42%, 37%)";
        document.querySelectorAll(".delReset")[0].style.color = "hsl(0, 0%, 100%)";
        document.querySelectorAll(".delReset")[1].style.color = "hsl(0, 0%, 100%)";

        document.querySelectorAll(".delReset")[0].style.borderBottomColor = "hsl(185, 58%, 25%)";
        document.querySelectorAll(".delReset")[1].style.borderBottomColor = "hsl(185, 58%, 25%)";

        document.querySelector(".equalSign").style.backgroundColor = "hsl(25, 98%, 40%)";
        document.querySelector(".equalSign").style.color = "hsl(0, 0%, 100%)";
        document.querySelector(".equalSign").style.borderBottomColor = "hsl(6, 70%, 34%)";
        break;

        case 3:
        // code
        console.log("three")
        one.style.opacity = "0";
        two.style.opacity = "0";
        three.style.opacity = "1";



            for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "hsl(268, 47%, 21%)";
            btn[i].style.color = "hsl(52, 100%, 62%)";
            btn[i].style.borderBottomColor = "hsl(290, 70%, 36%)";
          }

        document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
        document.getElementsByTagName("body")[0].style.color = "hsl(52, 100%, 62%)";

        document.querySelector(".pill").style.backgroundColor = "hsl(268, 71%, 12%)";

        document.querySelector(".pad").style.backgroundColor = "hsl(268, 71%, 12%)";

        document.querySelector(".display").style.backgroundColor = "hsl(268, 71%, 12%)";
        document.querySelector(".display").style.color = "hsl(52, 100%, 62%)";

        document.querySelectorAll(".delReset")[0].style.backgroundColor = "hsl(268, 47%, 21%)";
        document.querySelectorAll(".delReset")[0].style.color = "hsl(0, 0%, 100%)";

        document.querySelectorAll(".delReset")[1].style.backgroundColor = "hsl(268, 47%, 21%)";
        document.querySelectorAll(".delReset")[1].style.color = "hsl(0, 0%, 100%)";

        document.querySelector(".equalSign").style.backgroundColor = "hsl(176, 100%, 44%)";
        document.querySelector(".equalSign").style.color = "hsl(198, 20%, 13%)";
        document.querySelector(".equalSign").style.borderBottomColor = "hsl(177, 92%, 70%)";
        break;
    }
}

