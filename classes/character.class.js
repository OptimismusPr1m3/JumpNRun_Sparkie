
class Character extends MovableObject {
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
    world;
    movementSpeed = 7;
    constructor() {
        super().loadImage('sprites/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.animate();
    }

    animate() {
        // moving x position
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.positionX += this.movementSpeed;
            } else if(this.world.keyboard.LEFT){
                this.otherDirection = true;
                this.positionX -= this.movementSpeed;
            }
            this.world.camera_x = -this.positionX;
        }, 1000 / 60);
        //animation Intervall
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                //swim Animation
                this.moveLeft();
            } else if (this.world.keyboard.RIGHT) {
                this.moveRight();
            }
        }, 50);
        //idling Intervall
        setInterval(() => {
            if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT) {
                this.idling();
            }
        }, 100);
    }

    moveRight() {
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
        let path = this.IMAGES_SWIMMING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        this.otherDirection = false;
    }

    moveLeft() {
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
        let path = this.IMAGES_SWIMMING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        this.otherDirection = true;
    }

    idling() {
        let i = this.currentImage % this.IMAGES_IDLE.length;
        let path = this.IMAGES_IDLE[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }
    attacking() {
        let i = this.currentImage % this.IMAGES_ATTACKING.length;
        let path = this.IMAGES_ATTACKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }


    jump() {

    }
}