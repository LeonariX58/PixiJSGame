import {rectIntersect, detectCollisions} from './colision.js'
import {reSize, centrilizeSprite, distance, removeButtons} from './utils.js'
import {makePlayerMove, playClick} from './game.js'

const Application = PIXI.Application

export const app = new Application({ 
  width: 2000, 
  height: 2000,       
  backgroundColor: 0x333334,                
  antialias: true,
  resolution: 1
}
);

document.body.appendChild(app.view);
 
export let gameObjects = [
    new PIXI.Sprite(PIXI.Texture.WHITE),
    new PIXI.Sprite(PIXI.Texture.WHITE)
]

/*export let player = new PIXI.Sprite(PIXI.Texture.WHITE),
           player2 = new PIXI.Sprite(PIXI.Texture.WHITE)*/

export const buttons = {
    playButton: PIXI.Sprite.from('assets/mainMenu/play.png'),
    configsButton: PIXI.Sprite.from('assets/mainMenu/options.png'),
    creditsButton: PIXI.Sprite.from('assets/mainMenu/credits.png')
}

export const textures = {
    playButton: PIXI.Texture.from('assets/mainMenu/play.png'),
    configsButton: PIXI.Texture.from('assets/mainMenu/options.png'),
    creditsButton: PIXI.Texture.from('assets/mainMenu/credits.png')
}
export const buttonsDown = {
    playDown: PIXI.Texture.from('assets/mainMenu/playPressed.png'),
    configsDown: PIXI.Texture.from('assets/mainMenu/optionsPressed.png'),
    creditsDown: PIXI.Texture.from('assets/mainMenu/creditsPressed.png')
}

buttons.playButton.x = app.screen.width / 2;
buttons.playButton.y = app.screen.height / 2;

reSize(buttons.playButton, 350, 350)
reSize(buttons.configsButton, 350, 400)
reSize(buttons.creditsButton, 320, 450)

centrilizeSprite(buttons.playButton, 0, 160, -130, 0)
centrilizeSprite(buttons.configsButton, -150, 200, 0, -50)
centrilizeSprite(buttons.creditsButton, 78, 0, -29, -50)

app.stage.addChild(buttons.playButton, buttons.configsButton, buttons.creditsButton);

buttons.playButton.interactive = true
buttons.playButton.buttonMode = true 

buttons.configsButton.interactive = true
buttons.configsButton.buttonMode = true 

buttons.creditsButton.interactive = true
buttons.creditsButton.buttonMode = true 

buttons.playButton
    .on('pointerdown', playClick)
    .on('pointerover', onPlayOver)
    .on('pointerout', onPlayOut);

buttons.configsButton
    .on('pointerdown', configsClick)
    .on('pointerover', onConfigsOver)
    .on('pointerout', onConfigsOut);

buttons.creditsButton
    .on('pointerdown', creditsClick)
    .on('pointerover', onCreditsOver)
    .on('pointerout', onCreditsOut);

function configsClick() {
    removeButtons()
}

function creditsClick() {
    removeButtons()
}

function onPlayOver() {
    this.texture = buttonsDown.playDown
}

function onPlayOut() {
    this.texture = textures.playButton
}

function onConfigsOver() {
    this.texture = buttonsDown.configsDown
}

function onConfigsOut() {
    this.texture = textures.configsButton
}

function onCreditsOver() {
    this.texture = buttonsDown.creditsDown
}

function onCreditsOut() {
    this.texture = textures.creditsButton
}