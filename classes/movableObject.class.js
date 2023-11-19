class MovableObject {
    positionX = 0;
    hp;
    height = 250;
    width = 250;
    isAlive = true;
    img;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDIrection = false;
    swimming_sound;
    speedY = 0;
    acceleration = 0.6;
    isJumping;
    lastHit = 0;
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
                this.isJumping = true;
            } else {
                this.isJumping = false;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.positionY < 390;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    showHitbox(ctx) {
        if (this instanceof Character || this instanceof PufferFish) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.positionX, this.positionY, this.width, this.height);
            ctx.stroke();
        }
    }

    //character.isColliding(chicken);
    isColliding(moveableObject) {
        return this.positionX + this.width > moveableObject.positionX &&
            this.positionY + this.height > moveableObject.positionY &&
            this.positionX < moveableObject.positionX &&
            this.positionY < moveableObject.positionY + moveableObject.height;
    }
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    moveLeft() {
        this.positionX -= this.speed;
    }

    moveRight() {
        this.positionX += this.speed;
    }
    playAnimation(imagesArray) {
        let i = this.currentImage % imagesArray.length;  // let i = / % 6; => 1, Rest 1
        let path = imagesArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 15;
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; //Differenz in ms
        timePassed = timePassed / 1000 //Differenz in sekunden
        console.log(timePassed)
        return timePassed < 0.7 ;
    }

    hit() {
        this.hp -= 20;
        if (this.hp < 0) {
            this.hp = 0;
        }else {
            this.lastHit = new Date().getTime();
        }

    }

    isDead() {
        return this.hp == 0;
    }
}

