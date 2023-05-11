Version = 1

#rechts
Sprite = game.create_sprite(2, 3)
input.on_button_pressed(Button.A, on_button_pressed_a2)
def on_button_pressed_a2():
    pass
    Sprite.move(-1)

#links

input.on_button_pressed(Button.B, on_button_pressed_B2)
def on_button_pressed_B2():
    pass
    Sprite.move(1)
basic.clear_screen()
input.on_button_pressed(Button.AB, Create_Obsticale)
def Create_Obsticale():
    pass
    
    num = randint(0, 4)
    Sprite0 = game.create_sprite(0, 0)
    Sprite1 = game.create_sprite(1, 0)
    Sprite2 = game.create_sprite(2, 0)
    Sprite3 = game.create_sprite(3, 0)
    Sprite4 = game.create_sprite(4, 0)
    Sprites = [Sprite0, Sprite1, Sprite2, Sprite3, Sprite4]
    if num == 0:
     Sprite0.delete()
    elif num == 1:
     Sprite1.delete()
    elif num == 2:
     Sprite2.delete()
    elif num == 3:
     Sprite3.delete()
    elif num == 4:
     Sprite4.delete()
    basic.pause(1000)
    for x in Sprites:
     pass
     x.turn(Direction.RIGHT, 90)
     x.move(1)
    basic.pause(1000)
    for z in Sprites:
     pass
     z.move(1)
    basic.pause(1000)
    for c in Sprites:
     pass
     c.move(1)
    if Sprite.is_touching(Sprite0):
        pass
        Sprite.delete()
        GameOver()
    elif Sprite.is_touching(Sprite1):
        pass
        Sprite.delete()
        GameOver()
    elif Sprite.is_touching(Sprite2):
        pass
        Sprite.delete()
        GameOver()
    elif Sprite.is_touching(Sprite3):
        pass
        Sprite.delete()
        GameOver()
    elif  Sprite.is_touching(Sprite4):
        pass

        Sprite.delete()
        GameOver()
    basic.pause(1000)
    for a in Sprites: 
     pass
     a.move(1)
    basic.pause(500)
    for az in Sprites: 
     pass
     az.delete()

def GameOver():
  basic.pause(1000)
  basic.show_animation("""
  . . . . .
  . # . # .
  . # . # .
  . # # # .
  # . . . #
  """)
