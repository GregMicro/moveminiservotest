input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "L") {
        kitronik_servo_lite.left()
    } else if (receivedString == "R") {
        kitronik_servo_lite.right()
    } else if (receivedString == "F") {
        kitronik_servo_lite.forward()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
soundExpression.twinkle.playUntilDone()
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 2000) {
        kitronik_servo_lite.backward()
        basic.pause(1000)
        kitronik_servo_lite.stop()
    }
})
