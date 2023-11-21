class MovableObject extends DrawableObject {
    hp;
    isAlive = true;
    otherDIrection = false;
    swimming_sound;
    speedY = 0;
    acceleration = 0.6;
    amountOfP = 0;
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
    
    //character.isColliding(chicken);
    isColliding(moveableObject) {
        return this.positionX + this.width > moveableObject.positionX &&
            this.positionY + this.height > moveableObject.positionY &&
            this.positionX < moveableObject.positionX &&
            this.positionY < moveableObject.positionY + moveableObject.height;
    }

    isCollectingPotion(){
        this.amountOfP += 20;
        if (this.amountOfP > 100) {
            this.amountOfP = 100;
        }
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
        //console.log(timePassed)
        return timePassed < 1 ;
    }

    isThrowing(){
        this.amountOfP -= 20;
        if (this.amountOfP < 0) {
            this.amountOfP = 0;
        }
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

