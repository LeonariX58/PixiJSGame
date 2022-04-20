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
            if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height).colliding) {
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

    let side
    let colliding = true
    if (x2 > w1 + x1) {
        side = 'right'
        colliding = false
    }
    if (x1 > w2 + x2)  {
       side = 'left' 
       colliding = false
    }
    if (y2 > h1 + y1) {
        side = 'bottom'
        colliding = false
    }
    if (y1 > h2 + y2) {
        side = 'top'
        colliding = false
    }

    
    return {
        colliding: colliding,
        side: side
    }
}

export {rectIntersect, detectCollisions}