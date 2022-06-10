let mySprite = sprites.create(img`
    ........................
    ..............fff.......
    .............f2fffff....
    ...........ff22eeeeeff..
    ..........ff222eeeeeeff.
    ..........feeeefffeeeef.
    .........fe2222eeefffff.
    .........f2efffff222efff
    ..11.....fffeeefffffffff
    ..2211...fee44fbbe44efef
    ..112211..feddfbb4d4eef.
    ....12221eefddddd4eeef..
    .....2221ddee2222222f...
    .....1111dd44e544444f...
    .........eeeeffffffff...
    .............ff...fff...
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)