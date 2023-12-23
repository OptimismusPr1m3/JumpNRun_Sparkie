class Coin extends MovableObject {
    IMAGES = [
        'sprites/4. Marcadores/1. Coins/1.png',
        'sprites/4. Marcadores/1. Coins/2.png',
        'sprites/4. Marcadores/1. Coins/3.png',
        'sprites/4. Marcadores/1. Coins/4.png',
    ]
    width = 60;
    offsetBottom = 30;
    offsetTop = 30;
    height = 60;
    constructor(posX, posY) {
        super().loadImage(this.IMAGES[0])
        this.loadImages(this.IMAGES);
        this.positionX = posX;
        this.positionY = posY;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES)
        }, 180);
    }
}