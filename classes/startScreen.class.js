class StartScreen {
    ctx;
    canvas;
    canvasRect;
    originalCanvasWidth = 1080;
    originalCanvasHeight = 720;
    startScreenImages = startImages;
    stopDrawing = false;
    isFullscreen = false;
    
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
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
}