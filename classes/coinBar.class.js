class CoinBar extends StatusBar{
    IMAGES = [
        'sprites/4. Marcadores/green/Coin/0_  copia 4.png',
        'sprites/4. Marcadores/green/Coin/20_  copia 2.png',
        'sprites/4. Marcadores/green/Coin/40_  copia 4.png',
        'sprites/4. Marcadores/green/Coin/60_  copia 4.png',
        'sprites/4. Marcadores/green/Coin/80_  copia 4.png',
        'sprites/4. Marcadores/green/Coin/100_ copia 4.png'
    ]

    constructor(posX, posY){
        super();
        this.percentage = 0;
        this.loadImages(this.IMAGES)
        this.positionX = posX;
        this.positionY = posY;
        this.setPercentage(0);
    }
}