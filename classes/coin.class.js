class Coin extends MovableObject {
    
    width = 60;
    offsetBottom = 30;
    offsetTop = 30;
    height = 60;
    
    IMAGES = [
        'sprites/4. Marcadores/1. Coins/1.png',
        'sprites/4. Marcadores/1. Coins/2.png',
        'sprites/4. Marcadores/1. Coins/3.png',
        'sprites/4. Marcadores/1. Coins/4.png',
    ]
    /**
     * Creates an instance of the Coin - class with an initial position, loads images, and starts animation.
     * 
     * @param {number} posX - The initial x-coordinate position of the instance.
     * @param {number} posY - The initial y-coordinate position of the instance.
     */
    constructor(posX, posY) {
        super().loadImage(this.IMAGES[0])
        this.loadImages(this.IMAGES);
        this.positionX = posX;
        this.positionY = posY;
        this.animate();
    }
    /**
     * Initiates an animation loop that repeatedly plays the animation using a set interval.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES)
        }, 180);
    }
}