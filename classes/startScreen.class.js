class StartScreen {
    ctx;
    canvas;
    startScreenImages = startImages;
    stopDrawing = false;
    playBtn = new PlayButton(430, 260);
    muteBtn = new Option('buttons/mute.png', 940, 20, true, false);
    fullscreenBtn = new Option('buttons/fullscreen.png', 1000, 20, false, true)
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.drawStartScreen();
    }

    drawStartScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.startScreenImages.floors);
        this.addObjectsToMap(this.startScreenImages.lights);
        this.addObjectsToMap(this.startScreenImages.coins);
        this.addObjectsToMap(this.startScreenImages.potions);
        this.addObjectsToMap(this.startScreenImages.enemies);
        this.addToMap(this.playBtn);
        this.addToMap(this.muteBtn);
        this.addToMap(this.fullscreenBtn);
        let self = this;
        if (!this.stopDrawing) {
            requestAnimationFrame(() => {
                self.drawStartScreen();
            })
        }
    }


    addObjectsToMap(obj) {
        obj.forEach(object => {
            this.addToMap(object)
        });
    }

    addToMap(obj) {
        obj.draw(this.ctx);
        this.startGameButtonListener(obj);
        this.startMuteButtonListener(obj);
        this.startFullscreenListener(obj);
    }

    startGameButtonListener(obj) {
        if (obj instanceof PlayButton) {
            this.canvas.addEventListener('click', (event) => {
                const canvasRect = this.canvas.getBoundingClientRect();
                const clickX = event.clientX - canvasRect.left;
                const clickY = event.clientY - canvasRect.top;
                if (this.isClickingOnElement(clickX, clickY, obj)) {
                    this.stopDrawing = true;
                }
            });
        }
    }

    startMuteButtonListener(obj) {
        if (obj instanceof Option && obj.isMuteBtn) {
            this.canvas.addEventListener('click', (event) => {
                const canvasRect = this.canvas.getBoundingClientRect();
                const clickX = event.clientX - canvasRect.left;
                const clickY = event.clientY - canvasRect.top;
                if (this.isClickingOnElement(clickX, clickY, obj)) {
                    console.log('mute clicked')
                }
            });
        }
    }

    startFullscreenListener(obj) {
        if (obj instanceof Option && obj.isFullscreenSwitch) {
            this.canvas.addEventListener('click', (event) => {
                const canvasRect = this.canvas.getBoundingClientRect();
                const clickX = event.clientX - canvasRect.left;
                const clickY = event.clientY - canvasRect.top;
                if (this.isClickingOnElement(clickX, clickY, obj)) {
                    console.log('fulls klicked')
                    this.canvas.requestFullscreen()
                }
            });
        }
    }

    isClickingOnElement(clickX, clickY, obj) {
        return clickX >= obj.positionX &&
            clickX <= obj.positionX + obj.width &&
            clickY >= obj.positionY &&
            clickY <= obj.positionY + obj.height;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
}