import { app, gameObjects, buttons, textures, buttonsDown } from './main.js'
import {reSize, centrilizeSprite, distance, removeButtons} from './utils.js'
import {rectIntersect, detectCollisions} from './colision.js'

function playClick() {
    removeButtons()

    gameObjects[0].position.set((app.screen.width) / 2, (app.screen.height) / 2)
    gameObjects[0].width = 100
    gameObjects[0].height = 100
    gameObjects[0].tint = '0x00FF00'


    gameObjects[1].position.set((app.screen.width) / 2 - 400, (app.screen.height) / 2)
    gameObjects[1].width = 100
    gameObjects[1].height = 100
    gameObjects[1].tint = '0x00FF00'

    app.stage.addChild(gameObjects[0], gameObjects[1]);

    makePlayerMove(gameObjects[0])
}

function makePlayerMove(player) {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key
        console.log(player.isColliding)

        if (keyName === 'a') {
            player.position.set(player.x - 5, player.y)
        } else if (keyName === 'w') {
            player.position.set(player.x, player.y - 5)
        } else if (keyName === 'd') {
            player.position.set(player.x + 5, player.y)
        } else if (keyName === 's') {
            player.position.set(player.x, player.y + 5)
        }
        
        detectCollisions()
    })
}

export {makePlayerMove, playClick}