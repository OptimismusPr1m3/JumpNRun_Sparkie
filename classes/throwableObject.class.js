class ThrowableObject extends MovableObject {
    height = 40;
    width = 40;
    speedX = 0;
    isWhite;
    constructor(posX, posY, bubbleColorPath, poisonOrNot) {
        super().loadImage(bubbleColorPath);
        this.positionX = posX;
        this.positionY = posY;
        this.isWhite = poisonOrNot;
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