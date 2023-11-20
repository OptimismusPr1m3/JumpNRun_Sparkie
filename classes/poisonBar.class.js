class PoisonBar extends StatusBar{
    IMAGES = [
        'sprites/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'sprites/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'sprites/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ]
    width = 305
    constructor(posX, posY){
        super();
        this.percentage = 0;
        this.loadImages(this.IMAGES)
        this.positionX = posX;
        this.positionY = posY;
        this.setPercentage(0);
    }
}