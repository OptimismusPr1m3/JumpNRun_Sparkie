class MovableObject {
    positionX = 10;
    positionY = 100;
    height = 50;
    width = 70;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    moveRight() {
        console.log('Character is moving');
    }
}