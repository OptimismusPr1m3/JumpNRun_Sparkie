
class PufferFish extends MovableObject {
    height = 70;
    width = 60;
    positionY = 550;
    isPlayerNear = false;
    isAggro = false;
    IMAGES_WALKING = [
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]

    IMAGES_AGGRO = [
        'sprites/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ];

    IMAGES_AGGRO_SWIM = [
        'sprites/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'

    ]
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.positionX = 350 + Math.random() * 800;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_AGGRO);
        this.loadImages(this.IMAGES_AGGRO_SWIM);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.4;
        //this.swimming_sound = new Audio('audio/p_fish_swimming.mp3');
    }

    animate() {
        setInterval(() => {
            if (!this.isPlayerNeard) {
                this.moveLeft();
            }
        }, 1000 / 60); // 1000 / 25 = 25 FPS , 1000 / 60 = 60 FPS !
        setInterval(() => {
            if (this.isPlayerNear && !this.isAggro) {
                this.playAnimation(this.IMAGES_AGGRO);
                this.isAggro = true;
                this.isPlayerNear = false;
            } else if (!this.isPlayerNear) {
                this.playAnimation(this.IMAGES_WALKING);
                //this.swimming_sound.play(); 
            } else if (this.isAggro) {
                this.playAnimation(this.IMAGES_AGGRO_SWIM);
            }

        }, 100);
    }
}