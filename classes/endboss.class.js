class Endboss extends MovableObject {

    height = 300;
    width = 300;
    positionY = 350;
    hp = 80;
    deadCounter = 0;
    contactCounter = 0;

    hadFirstContact = false;
    isHitFromSharkie = false;
    canIdle = true;
    isBehindPlayer = false;
    isBeforePlayer = true;

    IMAGES_IDLING = [
        'sprites/2.Enemy/3 Final Enemy/2.floating/1.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/2.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/3.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/4.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/5.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/6.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/7.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/8.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/9.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/10.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/11.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/12.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/13.png',
    ]

    IMAGES_INTRODUCTION = [
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ]

    IMAGES_HURT = [
        'sprites/2.Enemy/3 Final Enemy/Hurt/1.png',
        'sprites/2.Enemy/3 Final Enemy/Hurt/2.png',
        'sprites/2.Enemy/3 Final Enemy/Hurt/3.png',
        'sprites/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]

    IMAGES_ATTACKING = [
        'sprites/2.Enemy/3 Final Enemy/Attack/1.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/2.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/3.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/4.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/5.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/6.png',
    ]

    IMAGES_DEAD = [
        'sprites/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'sprites/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'sprites/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'sprites/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'sprites/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ]
    /**
     * Creates an instance of the Endboss - class, loads images for various states, sets initial position and speed, and starts animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_IDLING[0]);
        this.loadImages(this.IMAGES_IDLING);
        this.loadImages(this.IMAGES_INTRODUCTION);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_DEAD);
        this.positionX = 1850;
        this.speed = 2.5;
        this.animate();
    }

    /**
     * Animates the boss character with different states based on its actions, such as introduction, idling, hurting, and attacking.
     * Manages the movement and animations of the boss character.
     */
    animate() {
        const bossAnim = setInterval(() => {
            this.checkIfIntroOrIdleBoss();
            this.checkifHurt();
            this.checkifAttack(); 
        }, 140);
        setInterval(() => {
            this.checkIfDead();
        }, 250);
        setInterval(() => {
            if (this.hadFirstContact) {
                this.moveBoss();    
            }
        }, 1000 / 60);
    }

    /**
     * Checks the contact counter and plays the introduction or idling animation of the boss character.
     * Manages the animation based on the contact counter, the boss's state, and the player's position.
     */
    checkIfIntroOrIdleBoss() {
        if (this.contactCounter < 10) {
            this.playAnimation(this.IMAGES_INTRODUCTION);
        } else if (this.contactCounter >= 10 && !this.isDeadlyHurt && !this.isKilled && this.canIdle) {
            this.playAnimation(this.IMAGES_IDLING)
        }
        this.contactCounter++;
        if (world.character.positionX > 730 && !this.hadFirstContact) {
            this.contactCounter = 0;
            setTimeout(() => {
                this.hadFirstContact = true;
            }, 500);
        }
    }
    /**
     * Checks if the boss character is currently hurt and initiates the hurt animation.
     * The animation is played if the boss is not fatally hurt or killed.
     */
    checkifHurt() {
        if (this.isHurt() && !this.isDeadlyHurt && !this.isKilled) {
            this.playAnimation(this.IMAGES_HURT);
        }
    }
    /**
     * Checks if the boss character is currently damaging the player and initiates the attacking animation.
     * The animation is played if the boss is not fatally hurt or killed.
     */
    checkifAttack() {
        if (this.isDamagingPlayer && !this.isDeadlyHurt && !this.isKilled) {
            this.playAnimation(this.IMAGES_ATTACKING);
        }
    }
    /**
     * Checks if the boss character is fatally hurt and initiates the deadly hurt animation.
     * Updates flags and triggers actions when the boss is considered killed.
     */
    checkIfDead() {
        if (this.isDeadlyHurt) {
            this.playAnimation(this.IMAGES_DEAD)
            this.deadCounter++;
            if (this.deadCounter == 5) {
                this.isDeadlyHurt = false;
                this.canIdle = false;
                this.loadImage(this.IMAGES_DEAD[4]);
                setTimeout(() => {
                    this.isKilled = true;
                }, 1500);
            }
        }
    }
    /**
     * Moves the boss character based on its position relative to the player and various states.
     * The boss will move toward the player if it is behind or before the player, and certain conditions are met. 
     */
    moveBoss() {
        if (this.isBehindPlayer && !this.isKilled && !this.isDamagingPlayer && !this.isHurt() && !this.isDeadlyHurt && this.canIdle) {
            this.otherDirection = true;
            this.moveRight();
        } else if (this.isBeforePlayer && !this.isKilled && !this.isDamagingPlayer && !this.isHurt() && !this.isDeadlyHurt && this.canIdle) {
            this.otherDirection = false;
            this.moveLeft();
        }
    }
}