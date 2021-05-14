let sprite = game.createSprite(2, 2)
basic.forever(function () {
    basic.pause(500)
    if (input.acceleration(Dimension.X) < -300) {
        sprite.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.X) > 300) {
        sprite.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.Y) < -300) {
        sprite.change(LedSpriteProperty.Y, -1)
    }
    if (input.acceleration(Dimension.Y) > 300) {
        sprite.change(LedSpriteProperty.Y, 1)
    }
})
