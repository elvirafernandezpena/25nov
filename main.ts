input.onButtonPressed(Button.A, function () {
    basic.showString("MAIS")
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showString("PULSA B")
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("MENOS")
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.showString("MENU SEN VIOLENCIA")
    basic.clearScreen()
})
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.clearScreen()
basic.showString("BENVIDES AO RESTAURANTE 25N")
basic.showIcon(IconNames.Happy)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.showString("PULSA A")
basic.showArrow(ArrowNames.West)
basic.forever(function () {
	
})