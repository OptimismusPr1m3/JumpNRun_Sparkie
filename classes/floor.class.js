class Floor extends MovableObject{
    width = 540;
    height = 720;
    
    constructor(path, x){
        super().loadImage(path)
        this.positionY = 720 - this.height;
        this.positionX = x;
    }
}