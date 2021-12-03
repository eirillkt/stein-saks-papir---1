let hånd = 0
input.onGesture(Gesture.Shake, function () {
    hånd = randint(0, 2)
    if (hånd == 0) {
        basic.showIcon(IconNames.SmallSquare)
        radio.sendNumber(0)
    } else if (hånd == 1) {
        basic.showIcon(IconNames.Square)
        radio.sendNumber(1)
    } else {
        basic.showIcon(IconNames.Scissors)
        radio.sendNumber(2)
    }
})
