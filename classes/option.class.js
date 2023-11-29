class Option extends StatusBar {
    height = 50;
    width = 50;
    isMuteBtn;
    isFullscreenSwitch;
    constructor(img, posX, posY, isMuteBtn, isFullscreenSwitch){
        super().loadImage(img);
        this.positionX = posX;
        this.positionY = posY;
        this.isMuteBtn = isMuteBtn;
        this.isFullscreenSwitch = isFullscreenSwitch;
    }
}