class Jellyfish extends MovableObject {

    height = 120;
    width = 100;
    //positionY = 500;
    hp = 20;
    deadCounter = 0;

    IMAGES_MOVE = [
        'sprites/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'sprites/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'sprites/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'sprites/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]
    IMAGES_DEAD = [
        'sprites/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'sprites/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'sprites/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'sprites/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ]
    /**
     * Creates an instance of an enemy (Jellyfish) with initial properties and animations.
     */
    constructor() {
        super().loadImage(this.IMAGES_MOVE[0]);
        this.loadImages(this.IMAGES_MOVE);
        this.loadImages(this.IMAGES_DEAD);
        this.positionX = 700 + Math.random() * 2500;
        this.positionY = 300 + Math.random() * 200;
        this.speed = 0.3 + Math.random() * 1.5;
        this.animate();
    }
    /**
     * Initiates animation loops for movement, alive checks, and deadly hurt checks.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.moveIfAlive();
        }, 120);
        setInterval(() => {
            this.checkIfHurt();
        }, 250);
    }
    /**
     * Checks if enemy is still alive and loops through the move images
     */
    moveIfAlive() {
        if (!this.isDeadlyHurt) {
            this.playAnimation(this.IMAGES_MOVE);
        }
    }
    /**
     * Checks and manages the deadly hurt state of the enemy.
     * Plays the death animation, stops movement, and updates the state when the enemy character is fatally hurt.
     */
    checkIfHurt() {
        if (this.isDeadlyHurt) {
            this.playAnimation(this.IMAGES_DEAD);
            this.speed = 0;
            this.deadCounter++;
            if (this.deadCounter == 12) {
                this.isKilled = true;
                this.isDeadlyHurt = false;
            }
        }
    }

}