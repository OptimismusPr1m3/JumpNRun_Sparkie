
class World {
    character = new Character();
    enemies = [
        new PufferFish(50, 30),
        new PufferFish(120, 30),
        new PufferFish(200, 30)
    ]
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.character.img, this.character.positionX, this.character.positionY, this.character.width, this.character.height)
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.positionX, enemy.positionY, enemy.width, enemy.height)
        });
        let self = this;
        requestAnimationFrame(function (){
            self.draw();
        });
    };
}