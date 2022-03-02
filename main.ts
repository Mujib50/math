input.onButtonPressed(Button.A, function () {
    if (X == 0) {
        num += 1
        basic.showNumber(num)
    } else {
        num2 += 1
        basic.showNumber(num2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (X == 0) {
        X += 1
    } else {
        basic.showNumber(num)
        basic.showNumber(num2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (X == 0) {
        num += -1
    } else {
        num2 += -1
        basic.showNumber(num2)
    }
})
let num2 = 0
let X = 0
let num = 0
num = 1
basic.showNumber(num)
basic.forever(function () {
	
})
