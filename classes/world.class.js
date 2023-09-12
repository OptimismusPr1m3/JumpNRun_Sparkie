
class World {
    character = new Character();
    enemies = [
        new PufferFish(50, 30),
        new PufferFish(120, 30),
        new PufferFish(200, 30)
    ]
    lights = [
        new Light()
    ]
    floors = [
        new Floor('sprites/3. Background/Layers/5. Water/D2.png',540),
        new Floor('sprites/3. Background/Layers/5. Water/D1.png',0),
        new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png',540),
        new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png',0),
        new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png',540),
        new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png',0),
        new Floor('sprites/3. Background/Layers/2. Floor/D1.png',0),
        new Floor('sprites/3. Background/Layers/2. Floor/D2.png',540)
    ]
    canvas;
    ctx;
    keyboard;
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.addObjectsToMap(this.floors);
        this.addObjectsToMap(this.lights);
        this.addToMap(this.character)
        this.addObjectsToMap(this.enemies);


        //Draw() wird immer aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object)
        });
    }
    
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.positionX, mo.positionY, mo.width, mo.height)
    }
}