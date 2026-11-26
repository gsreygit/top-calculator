const add = function (num1, num2) {
    return num1 += num2
}

const subtract = function (num1, num2) {
    return num1 -= num2
}

const divide = function (num1, num2) {
    return num1 /= num2
}

const multiply = function (num1, num2) {
    return num1 *= num2
}

const operate = function (num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2)

        case "/":
            if (num2 === 0) {
                return false
            } else {
                return Math.round(divide(num1, num2)*100)/100
            }
        case "*":
            return multiply(num1, num2)
    }
}

export { operate }