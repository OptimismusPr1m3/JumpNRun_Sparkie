
class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar()
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    //console.log('Collision with character:', enemy)
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.hp);
                    //console.log("Leben des Characters:", this.character.hp)
                };
            });
        }, 1000)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.floors);
        this.addObjectsToMap(this.level.lights);

        this.ctx.translate(-this.camera_x, 0)
        // --------------- Space for fixed Objects -------------
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0)

        //Draw() wird immer aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx)
        mo.showHitbox(this.ctx)
        if (mo.otherDirection) {
           this.flipImageBack(mo);
        }
    }
    flipImage(moveableObject){
        this.ctx.save();
        this.ctx.translate(moveableObject.width, 0);
        this.ctx.scale(-1, 1);
        moveableObject.positionX = moveableObject.positionX * -1
    }
    flipImageBack(moveableObject){
        moveableObject.positionX = moveableObject.positionX * -1;
        this.ctx.restore();
    }
}

