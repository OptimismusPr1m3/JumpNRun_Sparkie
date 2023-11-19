class StatusBar extends DrawableObject {
    IMAGES = [
        'sprites/4. Marcadores/green/Life/0_  copia 3.png',
        'sprites/4. Marcadores/green/Life/20_  copia 4.png',
        'sprites/4. Marcadores/green/Life/40_  copia 3.png',
        'sprites/4. Marcadores/green/Life/60_  copia 3.png',
        'sprites/4. Marcadores/green/Life/80_  copia 3.png',
        'sprites/4. Marcadores/green/Life/100_  copia 2.png',
    ]
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES)
        this.positionX = 20;
        this.positionY = 0;
        this.width = 350;
        this.height = 90;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[imagePath]
    }
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

    isCharacterHit(){

    }

}