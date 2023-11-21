
class Character extends MovableObject {
    positionY = 390; //390 vorher
    hp = 100;
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
    IMAGES_SWIMMING = [
        'sprites/1.Sharkie/3.Swim/1.png',
        'sprites/1.Sharkie/3.Swim/2.png',
        'sprites/1.Sharkie/3.Swim/3.png',
        'sprites/1.Sharkie/3.Swim/4.png',
        'sprites/1.Sharkie/3.Swim/5.png',
        'sprites/1.Sharkie/3.Swim/6.png',
    ]
    IMAGES_ATTACKING = [
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'sprites/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
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
    ]
    hasThrown = false;
    world;

    constructor() {
        super().loadImage('sprites/1.Sharkie/1.IDLE/1.png')
        this.speed = 7;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        //this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_SWIM_UP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity();
        this.swimming_sound = new Audio('audio/swimming.mp3');
    }

    animate() {
        // moving x position
        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.positionX < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
                this.swimming_sound.play();
            } else if (this.world.keyboard.LEFT && this.positionX > 0) {
                this.otherDirection = true;
                this.moveLeft();
                this.swimming_sound.play();
            }
            if (this.world.keyboard.UP && !this.isJumping) {
                this.jump();
            }
            this.world.camera_x = -this.positionX;
        }, 1000 / 60);
        //animation Intervall
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)
            } else if (this.positionY < 390) {
                this.playAnimation(this.IMAGES_SWIM_UP);
            } else if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
                //swim Animation
                this.playAnimation(this.IMAGES_SWIMMING);
            }  
            },80);
        //idling Intervall
        setInterval(() => {
            if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);
    }

    /*attacking() {
        let i = this.currentImage % this.IMAGES_ATTACKING.length;
        let path = this.IMAGES_ATTACKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }*/
}