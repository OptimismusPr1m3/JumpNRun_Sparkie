class PlayButton extends StatusBar {
    IMAGE = 'sprites/6.Botones/Start/2.png';

    height = 60;
    width = 200;
    constructor(posX, posY) {
        super().loadImage(this.IMAGE);
        this.positionX = posX;
        this.positionY = posY;
    }
}