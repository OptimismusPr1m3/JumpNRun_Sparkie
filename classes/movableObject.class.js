class MovableObject {
    positionX = 0;
    positionY = 390;
    height = 250;
    width = 250;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    moveRight() {
        console.log('Character is moving');
    }
}