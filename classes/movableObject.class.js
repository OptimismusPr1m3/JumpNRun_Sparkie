class MovableObject {
    positionX = 0;
    positionY = 390;
    height = 250;
    width = 250;
    isAlive = true;
    img;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }
    loadImages(array){
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    moveLeft(){
        setInterval(() => {
            this.positionX -= this.speed;
        }, 1000 / 60); // 1000 / 25 = 25 FPS , 1000 / 60 = 60 FPS !
    }
    moveRight() {
        console.log('Character is moving');
    }
}