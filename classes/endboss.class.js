class Endboss extends MovableObject {
    height = 300;
    width = 300;
    positionY = 350;
    hp = 80;
    hadFirstContact = false;
    isHitFromSharkie = false;
    IMAGES_IDLING = [
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

    IMAGES_INTRODUCTION = [
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'sprites/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ]

    IMAGES_HURT = [
        'sprites/2.Enemy/3 Final Enemy/Hurt/1.png',
        'sprites/2.Enemy/3 Final Enemy/Hurt/2.png',
        'sprites/2.Enemy/3 Final Enemy/Hurt/3.png',
        'sprites/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]

    IMAGES_ATTACKING = [
        'sprites/2.Enemy/3 Final Enemy/Attack/1.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/2.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/3.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/4.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/5.png',
        'sprites/2.Enemy/3 Final Enemy/Attack/6.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_IDLING[0]);
        this.loadImages(this.IMAGES_IDLING);
        this.loadImages(this.IMAGES_INTRODUCTION);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACKING);
        this.positionX = 1800;
        this.animate();
    }


    animate() {
        let i = 0;
        const bossAnim = setInterval(() => {
            //console.log(world.character.positionX)
            if (i < 10) {
                this.playAnimation(this.IMAGES_INTRODUCTION);
            } else {
                this.playAnimation(this.IMAGES_IDLING)
            }
            i++;
            if (world.character.positionX > 710 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }
            if (this.isDamagingPlayer) {
                this.playAnimation(this.IMAGES_ATTACKING);
            }
        }, 140);
    }
}