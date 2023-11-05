
class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0)
        this.addObjectsToMap(this.level.floors);
        this.addObjectsToMap(this.level.lights);
        this.addToMap(this.character)

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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.positionX = mo.positionX * -1
            
        }
        this.ctx.drawImage(mo.img, mo.positionX, mo.positionY, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.positionX = mo.positionX * -1;
            this.ctx.restore();
        }
    }
}