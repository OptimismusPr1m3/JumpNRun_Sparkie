
class PufferFish extends MovableObject {
    height = 70;
    width = 60;
    positionY = 550;
    hp = 20;
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

    IMAGES_DEAD = [
        'sprites/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'sprites/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.positionX = 350 + Math.random() * 800;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_AGGRO);
        this.loadImages(this.IMAGES_AGGRO_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.4;
        //this.swimming_sound = new Audio('audio/p_fish_swimming.mp3');
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 1000 / 25 = 25 FPS , 1000 / 60 = 60 FPS !
        let imageCounter = 0;
        setInterval(() => {
            if (this.isPlayerNear && !this.isAggro && !this.isDeadlyHurt) {
                this.playAnimation(this.IMAGES_AGGRO);
                imageCounter++;
                if (imageCounter == 5) {
                    this.setAggro(imageCounter);
                }
            } else if (!this.isPlayerNear && !this.isDeadlyHurt) {
                this.playAnimation(this.IMAGES_WALKING);
                //this.swimming_sound.play(); 
            } else if (this.isAggro && !this.isDeadlyHurt) {
                this.playAnimation(this.IMAGES_AGGRO_SWIM);
            }

        }, 100);
        let deadCounter = 0;
        setInterval(() => {
            if (this.isDeadlyHurt) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;
                deadCounter++;
                if (deadCounter == 6) {
                    this.isKilled = true;
                    this.isDeadlyHurt = false;
                }
            }
        }, 250);
    }

    setAggro(imageCounter) {
        imageCounter = 0;
        this.isAggro = true;
        this.isPlayerNear = false;
        this.speed = 0.7;
    }
}