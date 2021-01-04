let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB_RGB)
let colors = [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Purple), neopixel.colors(NeoPixelColors.White), neopixel.colors(NeoPixelColors.Green)]
let 位置 = 0
basic.forever(function () {
    strip.setBrightness(16)
    strip.setPixelColor(位置, colors[randint(0, 3)])
    strip.show()
    位置 += 1
    if (位置 == 24) {
        位置 = 0
        strip.clear()
    }
    basic.pause(100)
})
