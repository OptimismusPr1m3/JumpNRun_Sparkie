class HealthBar extends StatusBar{
    IMAGES = [
        'sprites/4. Marcadores/green/Life/0_  copia 3.png',
        'sprites/4. Marcadores/green/Life/20_ copia 4.png',
        'sprites/4. Marcadores/green/Life/40_  copia 3.png',
        'sprites/4. Marcadores/green/Life/60_  copia 3.png',
        'sprites/4. Marcadores/green/Life/80_  copia 3.png',
        'sprites/4. Marcadores/green/Life/100_  copia 2.png',
    ]

    constructor(posX, posY){
        super();
        this.loadImages(this.IMAGES)
        this.positionX = posX;
        this.positionY = posY;
        this.setPercentage(100);
    }
}