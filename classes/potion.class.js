class Potion extends MovableObject{
    width = 70;
    height = 90;
    positionY = 500;
    IMAGES = [
        'sprites/4. Marcadores/Posiขn/Animada/1.png',
        'sprites/4. Marcadores/Posiขn/Animada/2.png',
        'sprites/4. Marcadores/Posiขn/Animada/3.png',
        'sprites/4. Marcadores/Posiขn/Animada/4.png',
        'sprites/4. Marcadores/Posiขn/Animada/5.png',
        'sprites/4. Marcadores/Posiขn/Animada/6.png',
        'sprites/4. Marcadores/Posiขn/Animada/7.png',
        'sprites/4. Marcadores/Posiขn/Animada/8.png',
    ]

    constructor(){
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.positionX = 350 + Math.random() * 1500
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES)
        }, 100);
    }
}