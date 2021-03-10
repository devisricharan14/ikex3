let Light_state = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Light_state == 0) {
        Light_state = 1
    } else {
        Light_state = 0
    }
})
basic.forever(function () {
    if (Light_state == 1) {
        pins.analogWritePin(AnalogPin.P2, 1023)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
