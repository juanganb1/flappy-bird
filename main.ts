input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let EmptyObstacleY = 0
let Bird: game.LedSprite = null
let Ticks = 0
let Obstáculo: game.LedSprite[] = []
Bird = game.createSprite(0, 1)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstáculo.length > 0 && Obstáculo[0].get(LedSpriteProperty.X) == 0) {
        Obstáculo.removeAt(0).delete()
    }
    for (let Obstáculo_2 of Obstáculo) {
        Obstáculo_2.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        EmptyObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != EmptyObstacleY) {
                Obstáculo.push(game.createSprite(4, index))
            }
        }
    }
    for (let Obstáculo_3 of Obstáculo) {
        if (Obstáculo_3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstáculo_3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(500)
})
