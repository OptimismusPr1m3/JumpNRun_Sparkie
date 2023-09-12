
class PufferFish extends MovableObject{
    height = 60;
    width = 60;
    positionY = 550;
    IMAGES_WALKING = [
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]
    constructor(){
        super().loadImage('sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.positionX = 350 + Math.random() * 800;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.4;
    }

    animate(){
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }


}