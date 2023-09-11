class MovableObject {
    positionX = 0;
    positionY = 390;
    height = 250;
    width = 250;
    isAlive = true;
    img;
    imageCache = [];

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
    moveRight() {
        console.log('Character is moving');
    }
}