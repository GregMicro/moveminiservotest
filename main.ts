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
        if (TurnLeft == 0) {
            TurnLeft = 90
            basic.showIcon(IconNames.No)
        } else {
            TurnLeft = 0
        }
        pins.servoWritePin(AnalogPin.P1, TurnLeft)
        pins.servoWritePin(AnalogPin.P2, TurnLeft)
    } else if (receivedString == "R") {
        if (TurnRight == 90) {
            TurnRight = 180
        } else {
            TurnRight = 90
            basic.showIcon(IconNames.No)
        }
        pins.servoWritePin(AnalogPin.P1, TurnRight)
        pins.servoWritePin(AnalogPin.P2, TurnRight)
    } else if (receivedString == "F") {
        if (Speed == 0) {
            Speed = 1
        } else {
            Speed = 0
            basic.showIcon(IconNames.No)
        }
        pins.servoWritePin(AnalogPin.P1, 90 - 90 * Speed)
        pins.servoWritePin(AnalogPin.P2, 90 + 90 * Speed)
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
let TurnRight = 0
let TurnLeft = 0
let Speed = 0
music.ringTone(349)
radio.setGroup(1)
Speed = 0
TurnLeft = 90
TurnRight = 90
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 2000) {
        kitronik_servo_lite.backward()
        basic.pause(1000)
        kitronik_servo_lite.stop()
    }
})
