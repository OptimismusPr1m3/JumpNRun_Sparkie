class PoisonBar extends StatusBar{
    IMAGES = [
        'sprites/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'sprites/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ]

    constructor(posX, posY){
        super();
        this.loadImages(this.IMAGES)
        this.positionX = posX;
        this.positionY = posY;
        this.width = 350;
        this.height = 90;
        this.setPercentage(100);
    }
}