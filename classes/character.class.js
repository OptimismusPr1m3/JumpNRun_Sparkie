
class Character extends MovableObject {

    positionY = 390;
    hp = 100;
    offsetTop = 100;
    offsetBottom = 20;
    deadCounter = 0;
    attackCounter = 0;
    meleeCounter = 0;
    world;
    idleCounter = 0;
    longIdleCounter = 0;
    IMAGES_IDLE = [
        'sprites/1.Sharkie/1.IDLE/1.png',
        'sprites/1.Sharkie/1.IDLE/2.png',
        'sprites/1.Sharkie/1.IDLE/3.png',
        'sprites/1.Sharkie/1.IDLE/4.png',
        'sprites/1.Sharkie/1.IDLE/5.png',
        'sprites/1.Sharkie/1.IDLE/6.png',
        'sprites/1.Sharkie/1.IDLE/7.png',
        'sprites/1.Sharkie/1.IDLE/8.png',
        'sprites/1.Sharkie/1.IDLE/9.png',
        'sprites/1.Sharkie/1.IDLE/10.png',
        'sprites/1.Sharkie/1.IDLE/11.png',
        'sprites/1.Sharkie/1.IDLE/12.png',
        'sprites/1.Sharkie/1.IDLE/13.png',
        'sprites/1.Sharkie/1.IDLE/14.png',
        'sprites/1.Sharkie/1.IDLE/15.png',
        'sprites/1.Sharkie/1.IDLE/16.png',
        'sprites/1.Sharkie/1.IDLE/17.png',
        'sprites/1.Sharkie/1.IDLE/18.png'
    ]
    IMAGES_LONG_IDLE = [
        'sprites/1.Sharkie/2.Long_IDLE/i1.png',
        'sprites/1.Sharkie/2.Long_IDLE/I2.png',
        'sprites/1.Sharkie/2.Long_IDLE/I3.png',
        'sprites/1.Sharkie/2.Long_IDLE/I4.png',
        'sprites/1.Sharkie/2.Long_IDLE/I5.png',
        'sprites/1.Sharkie/2.Long_IDLE/I6.png',
        'sprites/1.Sharkie/2.Long_IDLE/I8.png',
        'sprites/1.Sharkie/2.Long_IDLE/I9.png',
        'sprites/1.Sharkie/2.Long_IDLE/I10.png',
        'sprites/1.Sharkie/2.Long_IDLE/I11.png',
        'sprites/1.Sharkie/2.Long_IDLE/I12.png',
        'sprites/1.Sharkie/2.Long_IDLE/I13.png',
        'sprites/1.Sharkie/2.Long_IDLE/I14.png'
    ]
    IMAGES_LONG_IDLE_GREATER = [
        'sprites/1.Sharkie/2.Long_IDLE/I8.png',
        'sprites/1.Sharkie/2.Long_IDLE/I9.png',
        'sprites/1.Sharkie/2.Long_IDLE/I10.png',
        'sprites/1.Sharkie/2.Long_IDLE/I11.png',
        'sprites/1.Sharkie/2.Long_IDLE/I12.png',
        'sprites/1.Sharkie/2.Long_IDLE/I13.png',
        'sprites/1.Sharkie/2.Long_IDLE/I14.png'
    ]
    IMAGES_SWIMMING = [
        'sprites/1.Sharkie/3.Swim/1.png',
        'sprites/1.Sharkie/3.Swim/2.png',
        'sprites/1.Sharkie/3.Swim/3.png',
        'sprites/1.Sharkie/3.Swim/4.png',
        'sprites/1.Sharkie/3.Swim/5.png',
        'sprites/1.Sharkie/3.Swim/6.png',
    ]
    IMAGES_R_ATTACK = [
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ]
    IMAGES_M_ATTACK = [
        'sprites/1.Sharkie/4.Attack/Fin slap/1.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/2.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/3.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/4.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/5.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/6.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/7.png',
        'sprites/1.Sharkie/4.Attack/Fin slap/8.png',
    ]
    IMAGES_SWIM_UP = [
        'sprites/1.Sharkie/3.Swim/2.png',
        'sprites/1.Sharkie/3.Swim/3.png',
        'sprites/1.Sharkie/3.Swim/5.png',
        'sprites/1.Sharkie/3.Swim/6.png',
    ]
    IMAGES_DEAD = [
        'sprites/1.Sharkie/6.dead/1.Poisoned/1.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/2.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/3.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/4.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/5.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/6.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/7.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/8.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/9.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/10.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/11.png',
        'sprites/1.Sharkie/6.dead/1.Poisoned/12.png'
    ]
    IMAGES_HURT = [
        'sprites/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'sprites/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'sprites/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'sprites/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'sprites/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];
    /**
     * Creates an instance of Sharkie character with initial properties and animations.
     */
    constructor() {
        super().loadImage('sprites/1.Sharkie/1.IDLE/1.png')
        this.speed = 7;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE_GREATER);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_R_ATTACK);
        this.loadImages(this.IMAGES_M_ATTACK);
        this.loadImages(this.IMAGES_SWIM_UP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
        this.swimming_sound = new Audio('audio/swimming.mp3');
    };
    /**
     * Initiates animation loops for character movement, death checks, fin slap animation, and attack animation.
     */
    animate() {
        setInterval(() => {
            this.moveCharacter();
        }, 1000 / 60);
        setInterval(() => {
            this.checkIfSharkieIsDead();
            this.checkFinSlapAnimation();
        }, 180);
        setInterval(() => {
            this.checkAttackAnimationAndThrowBubble();
        }, 1000 / 10);
    }
    /**
     * Checks and manages the attack animation state and triggers the bubble throwing action.
     * Plays the attack animation and initiates the bubble throwing action when Sharkie is in the attack state.
     */
    checkAttackAnimationAndThrowBubble() {
        if (this.isThrowingBubble && this.attackCounter < 8) {
            this.playAnimation(this.IMAGES_R_ATTACK);
            this.attackCounter++;
            if (this.attackCounter == 8) {
                this.spawnBubble = true;
                this.attackCounter = 0;
            }
        }
    }
    /**
     * Checks and manages the fin slap animation state.
     * Plays the fin slap animation and updates the state when Sharkie is in the fin slap action.
     */
    checkFinSlapAnimation() {
        if (this.isSlapping && this.meleeCounter < 8) {
            this.playAnimation(this.IMAGES_M_ATTACK);
            this.meleeCounter++;
            if (this.meleeCounter == 4) {
                this.isSlapping = false;
                this.hasSlapped = true;
                this.meleeCounter = 0;
            }
        }
    }
    /**
     * Checks if Sharkie is dead and manages the death animation and state transition.
     * Plays the death animation and updates the state when Sharkie is considered dead.
     * Otherwise, plays movement animations.
     */
    checkIfSharkieIsDead() {
        if (this.isDead() && this.deadCounter < 12) {
            this.playAnimation(this.IMAGES_DEAD)
            this.deadCounter++;
            if (this.deadCounter == 12) {
                this.isAlive = false;
            }
        } else {
            this.playMovementAnimations();
        }
    }
    /**
     * Moves the character based on user input, including right, left, and upward movements.
     * Manages character movement, direction, jumping, and updates the camera position. 
     */
    moveCharacter() {
        this.swimming_sound.pause();
        if (this.world.keyboard.RIGHT && this.positionX < this.world.level.level_end_x && this.isAlive) {
            this.otherDirection = false;
            this.moveRight();
        } else if (this.world.keyboard.LEFT && this.positionX > 0 && this.isAlive) {
            this.otherDirection = true;
            this.moveLeft();
        }
        if (this.world.keyboard.UP && !this.isJumping && this.isAlive) {
            this.jump();
        }
        this.world.camera_x = -this.positionX;
    }
    /**
     * Plays different movement animations based on the character's state and user input.
     * Manages animations for hurt, swimming up, swimming, and idling.
     */
    playMovementAnimations() {
        if (this.isHurt() && this.isAlive) {
            this.playAnimation(this.IMAGES_HURT)
        } else if (this.positionY < 390 && this.isAlive) {
            this.playAnimation(this.IMAGES_SWIM_UP);
        } else if (this.world.keyboard.LEFT && !this.isHurt() && this.isAlive || this.world.keyboard.RIGHT && !this.isHurt() && this.isAlive) {
            this.playAnimation(this.IMAGES_SWIMMING);
            this.idleCounter = 0;
            this.longIdleCounter = 0;
        } else if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && this.isAlive && !this.isHurt() && !this.isThrowingBubble) {
            this.playAnimation(this.IMAGES_IDLE);
            this.idleCounter++;
            if (this.idleCounter > 30 && this.longIdleCounter < 14) {
                this.playAnimation(this.IMAGES_LONG_IDLE)
                this.longIdleCounter++;
            }
            if (this.longIdleCounter > 13) {
                console.log('jop')
                this.playAnimation(this.IMAGES_LONG_IDLE_GREATER);
            }
        }
    }
}