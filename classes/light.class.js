class Light extends MovableObject{
    positionY = -1;
    width = 100;
    //sprites\3. Background\Layers\1. Light\1.png
    constructor(){
        super().loadImage('sprites/3. Background/Layers/1. Light/1.png')
        this.positionX = 0 + Math.random() * 300;
        ;
    }
}