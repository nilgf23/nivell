let x = 2
let y = 2
led.plot(x, y)
basic.forever(function () {
    basic.pause(1000)
    if (input.acceleration(Dimension.X) >= 341) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
    if (input.acceleration(Dimension.Y) >= 341) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
    if (input.acceleration(Dimension.Y) >= -341) {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
    if (input.acceleration(Dimension.X) >= -341) {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
})
