sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.say("Hello!")
    otherSprite.say("Hello!")
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let projectile = sprites.createProjectileFromSide(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, 0, 100)
let projectile2 = sprites.createProjectileFromSide(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 3 3 3 3 3 3 e f . . . 
    . . f b 3 3 3 3 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f b 3 3 3 3 3 3 3 3 3 3 b f . 
    . f b b 3 3 3 3 3 3 3 3 b b f . 
    . f b b b b b b b b b b b b f . 
    f c b b b b b b b b b b b b c f 
    f b b b b b b b b b b b b b b f 
    . f c c b b b b b b b b c c f . 
    . . e 4 c f f f f f f c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, 0, -100)
projectile.setPosition(80, 0)
projectile2.setPosition(80, 120)
