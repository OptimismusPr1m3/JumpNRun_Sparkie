class Floor extends MovableObject{
    width = 200;
    height = 80;
    positionX = 0;
    positionY = 70;
    constructor(path, width, height, posX, posY){
        super().loadImage(path);
        this.width = width;
        this.height = height;
        this.positionX = posX;
        this.positionY = posY;
        //this.positionX = 120 + Math.random() * 200;
    }
}