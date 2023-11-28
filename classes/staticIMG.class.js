class StaticImage extends StatusBar {
    

    constructor(img, posX, posY, height, width) {
        super().loadImage(img);
        this.positionX = posX;
        this.positionY = posY;
        this.height = height;
        this.width = width;
    }
}