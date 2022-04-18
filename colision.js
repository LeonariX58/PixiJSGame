import { app, gameObjects, buttons, textures, buttonsDown } from './main.js'

function detectCollisions() {
    let obj1
    let obj2 

    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].isCollision = false
    }

    for (let i = 0; i < gameObjects.length; i++) {
        obj1 = gameObjects[i]
        for (let j = i + 1; j < gameObjects.length; j++) {
            obj2 = gameObjects[j]

            if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
                obj1.isColliding = true;
                obj2.isColliding = true;
            } else {
                obj1.isColliding = false;
                obj2.isColliding = false;
            }
        }
    }
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}

export {rectIntersect, detectCollisions}