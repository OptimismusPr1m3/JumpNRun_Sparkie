class Light extends MovableObject{
    positionY = -1;
    width = 300;
    height = 250;
    
    //sprites\3. Background\Layers\1. Light\1.png
    constructor(){
        super().loadImage('sprites/3. Background/Layers/1. Light/1.png')
        this.positionX = 0 + Math.random() * 550;
        this.moveLeft();
    }

    
}