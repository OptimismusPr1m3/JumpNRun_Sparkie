class Floor extends MovableObject{
    width = 540;
    height = 720;
    /*
    constructor(path, width, height, posX, posY){
        super().loadImage(path);
        this.width = width;
        this.height = height;
        this.positionX = posX;
        this.positionY = posY;
        //this.positionX = 120 + Math.random() * 200;
    }*/
    constructor(path, x){
        super().loadImage(path)
        this.positionY = 720 - this.height;
        this.positionX = x;
    }
}