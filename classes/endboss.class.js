class Endboss extends MovableObject{
    height = 300;
    width = 300;
    positionY = 350;
    IMAGES_IDLING =[
        'sprites/2.Enemy/3 Final Enemy/2.floating/1.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/2.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/3.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/4.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/5.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/6.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/7.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/8.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/9.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/10.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/11.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/12.png',
        'sprites/2.Enemy/3 Final Enemy/2.floating/13.png',
    ]

    constructor(){
        super().loadImage(this.IMAGES_IDLING[0]);
        this.loadImages(this.IMAGES_IDLING);
        this.positionX = 800;
        this.animate();
    }


    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLING)
        }, 100);
    }
}