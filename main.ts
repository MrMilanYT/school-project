let Version = 1
// rechts
let Sprite = game.createSprite(2, 3)
input.onButtonPressed(Button.A, function on_button_pressed_a2() {
    
    Sprite.move(-1)
})
// links
input.onButtonPressed(Button.B, function on_button_pressed_B2() {
    
    Sprite.move(1)
})
basic.clearScreen()
input.onButtonPressed(Button.AB, function Create_Obsticale() {
    
    let num = randint(0, 4)
    let Sprite0 = game.createSprite(0, 0)
    let Sprite1 = game.createSprite(1, 0)
    let Sprite2 = game.createSprite(2, 0)
    let Sprite3 = game.createSprite(3, 0)
    let Sprite4 = game.createSprite(4, 0)
    let Sprites = [Sprite0, Sprite1, Sprite2, Sprite3, Sprite4]
    if (num == 0) {
        Sprite0.delete()
    } else if (num == 1) {
        Sprite1.delete()
    } else if (num == 2) {
        Sprite2.delete()
    } else if (num == 3) {
        Sprite3.delete()
    } else if (num == 4) {
        Sprite4.delete()
    }
    
    basic.pause(1000)
    for (let x of Sprites) {
        
        x.turn(Direction.Right, 90)
        x.move(1)
    }
    basic.pause(1000)
    for (let z of Sprites) {
        
        z.move(1)
    }
    basic.pause(1000)
    for (let c of Sprites) {
        
        c.move(1)
    }
    if (Sprite.isTouching(Sprite0)) {
        
        Sprite.delete()
        GameOver()
    } else if (Sprite.isTouching(Sprite1)) {
        
        Sprite.delete()
        GameOver()
    } else if (Sprite.isTouching(Sprite2)) {
        
        Sprite.delete()
        GameOver()
    } else if (Sprite.isTouching(Sprite3)) {
        
        Sprite.delete()
        GameOver()
    } else if (Sprite.isTouching(Sprite4)) {
        
        Sprite.delete()
        GameOver()
    }
    
    basic.pause(1000)
    for (let a of Sprites) {
        
        a.move(1)
    }
    basic.pause(500)
    for (let az of Sprites) {
        
        az.delete()
    }
})
function GameOver() {
    basic.pause(1000)
    basic.showAnimation(`
  . . . . .
  . # . # .
  . # . # .
  . # # # .
  # . . . #
  `)
}

