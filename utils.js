import { app, gameObjects, buttons, textures, buttonsDown } from './main.js'

function reSize(sprite, width, height) {
    sprite.width = width
    sprite.height = height
}

function centrilizeSprite(sprite, addX, subX, addY, subY) {
    sprite.x = app.screen.width / 2 + addX - subX
    sprite.y = app.screen.height / 2 + addY - subY
}

function distance(x1, y1, x2, y2) {
    let dis = Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)))
    return dis
}

function removeButtons() {
    buttons.playButton.parent.removeChild(buttons.playButton);
    buttons.configsButton.parent.removeChild(buttons.configsButton);
    buttons.creditsButton.parent.removeChild(buttons.creditsButton);
}

export {reSize, centrilizeSprite, distance, removeButtons}