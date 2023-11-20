class ThrowableObject extends MovableObject {
    height = 40;
    width = 40;
    speedX = 0;
    constructor(posX, posY) {
        super().loadImage('sprites/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.positionX = posX;
        this.positionY = posY;
        this.throw()
    }

    throw() {
        this.speedX = 30;
        this.applyWaterResistance();
    }


    applyWaterResistance() {
        setInterval(() => {
            if (this.speedX > 0) {
                this.positionX += this.speedX;
                this.speedX -= this.acceleration;
            } else{
                this.speedX = 0;
            }

        }, 1000 / 25)
    }
}