class MovableObject {
    positionX = 0;
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
    draw(ctx){
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
    
    showHitbox(ctx){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.positionX, this.positionY, this.width, this.height);
        ctx.stroke();
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
}

