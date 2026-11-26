import { operate } from "./calculations.js"


const calcContainer = document.querySelector(".calcContainer")

for (let i = 0; i < 16; i++) {
    const newBtn = document.createElement("button")
    newBtn.classList.add("calcBtn")

    if (i < 10) {
        newBtn.textContent = i
    } else if (i == 10) {
        newBtn.textContent = "+"
    } else if (i == 11) {
        newBtn.textContent = "-"
    } else if (i == 12) {
        newBtn.textContent = "*"
    } else if (i == 13) {
        newBtn.textContent = "/"
    } else if (i == 14) {
        newBtn.textContent = "="
    } else if (i == 15) {
        newBtn.textContent = "CE"
    }

    calcContainer.appendChild(newBtn)
}

let storeNum1 = "0"
let storeNum2 = ""
let storeOperator = ""



const calcBtns = document.querySelectorAll(".calcBtn")
const display = document.querySelector(".display")

calcBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent === "CE") {
            display.textContent = 0
            storeNum1 = "0"
            storeNum2 = ""
            storeOperator = ""
        } else if (operate(parseInt(storeNum1), storeOperator, parseInt(storeNum2)) === false) {
            display.textContent = "Division by 0 not possible."
            storeNum1 = "0"
            storeNum2 = ""
            storeOperator = ""
        } else if (parseInt(storeNum2) >= 0 && e.target.textContent === "=") {
            display.textContent = operate(parseInt(storeNum1), storeOperator, parseInt(storeNum2))
            storeNum1 = "0"
            storeNum2 = ""
            storeOperator = ""
        } else if (storeOperator !== "" && storeNum2 !== "" && isNaN(parseInt(e.target.textContent))) {
            storeNum1 = operate(parseInt(storeNum1), storeOperator, parseInt(storeNum2))
            storeNum2 = "0"
            storeOperator = e.target.textContent
            display.textContent = storeNum1 + storeOperator
        } else if (storeOperator !== "" && e.target.textContent === "0" && storeNum2 === "0") {
            storeNum2 = "0"
            display.textContent = storeNum1 + storeOperator + storeNum2
        } else if (storeOperator !== "" && storeNum2 === "0" && parseInt(e.target.textContent) > 0) {
            storeNum2 = e.target.textContent
            display.textContent = storeNum1 + storeOperator + storeNum2
        } else if (storeOperator !== "" && !isNaN(parseInt(e.target.textContent))) {
            storeNum2 += e.target.textContent
            display.textContent = storeNum1 + storeOperator + storeNum2
        } else if (isNaN(parseInt(e.target.textContent)) && e.target.textContent !== "=") {
            storeOperator = e.target.textContent
            display.textContent = storeNum1 + storeOperator
        } else if (storeNum1 === "0" && e.target.textContent === "0") {
            display.textContent = storeNum1 = "0"
        } else if (storeNum1 === "0" && parseInt(e.target.textContent) > 0) {
            display.textContent = storeNum1 = e.target.textContent
        } else if (parseInt(storeNum1) > 0 && e.target.textContent === "0") {
            display.textContent = storeNum1 += e.target.textContent
        } else if (parseInt(storeNum1) > 0 && parseInt(e.target.textContent) > 0) {
            display.textContent = storeNum1 += e.target.textContent
        }
    })
})

