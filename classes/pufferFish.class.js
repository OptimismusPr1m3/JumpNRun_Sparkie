
class PufferFish extends MovableObject{
    height = 60;
    width = 60;
    positionY = 550;
    constructor(){
        super().loadImage('sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.positionX = 350 + Math.random() * 800;
        ;
    }
}