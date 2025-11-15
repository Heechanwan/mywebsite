//  Переменные
let name = "Anwar" //string
let age = 28 //number
let isHungry = true //boolean

let btn = document.querySelector(".ctabtn")
let clicksDisplay = document.querySelector(".clicks")
let clicks = 0

function checkAge(){
    if(age >= 18){
        console.log("Добро пожаловать!")
    }
    else{
        console.log("Вход запрещен!")
    }
}

btn.addEventListener("click", ()=> {
    clicksDisplay.innerHTML = clicks += 1
})
