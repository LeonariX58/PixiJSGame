import { app, gameObjects, buttons, textures, buttonsDown } from './main.js'
import {reSize, centrilizeSprite, distance, removeButtons} from './utils.js'
import {rectIntersect, detectCollisions} from './colision.js'

function playClick() {
    removeButtons()

    gameObjects[0].position.set((app.screen.width) / 2, (app.screen.height) / 2)
    gameObjects[0].width = 100
    gameObjects[0].height = 100
    gameObjects[0].tint = '0xFFFFFF'


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
            if (rectIntersect(player.x - 5, player.y, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).colliding == true && rectIntersect(player.x, player.y, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).side == 'left') return
            player.position.set(player.x - 5, player.y)
        } 
        if (keyName === 'w') {
            if (rectIntersect(player.x, player.y - 5, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).colliding == true && rectIntersect(player.x, player.y, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).side == 'top') return
            player.position.set(player.x, player.y - 5)
        }
        if (keyName === 'd') {
            if (rectIntersect(player.x + 5, player.y, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).colliding == true && rectIntersect(player.x, player.y, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).side == 'right') return
            player.position.set(player.x + 5, player.y)
        }
        if (keyName === 's') {
            if (rectIntersect(player.x, player.y + 5, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).colliding == true && rectIntersect(player.x, player.y, player.width, player.height, gameObjects[1].x, gameObjects[1].y, gameObjects[1].width, gameObjects[1].height).side == 'bottom') return
            player.position.set(player.x, player.y + 5)
        }
        
        detectCollisions()
    })
}

export {makePlayerMove, playClick}