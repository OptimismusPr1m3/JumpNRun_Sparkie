class DrawableObject{
    img;
    imageCache = [];
    currentImage = 0;
    positionX = 0;
    positionY = 250;
    height = 250;
    width = 250;
    speed = 0.15;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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
    moveRight() {
        this.positionX += this.speed;
    }
    moveLeft() {
        this.positionX -= this.speed;
    }
}