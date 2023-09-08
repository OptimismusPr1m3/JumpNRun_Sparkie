
class PufferFish extends MovableObject{
    height = 15;
    width = 15;
    constructor(){
        super().loadImage('sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.positionX = 120 + Math.random() * 200;
        ;
    }
}