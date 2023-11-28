class StartScreen {
    ctx;
    canvas;
    startScreenImages = startImages;
    stopDrawing = false;
    playBtn = new PlayButton(450, 460)
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.drawStartScreen();
    }

    drawStartScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.startScreenImages.floors);
        this.addObjectsToMap(this.startScreenImages.lights);
        this.addToMap(this.playBtn);

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
    }

    startGameButtonListener(obj) {
        if (obj instanceof PlayButton) {
            this.canvas.addEventListener('click', (event) => {
                const canvasRect = this.canvas.getBoundingClientRect();
                const clickX = event.clientX - canvasRect.left;
                const clickY = event.clientY - canvasRect.top;
                if (
                    clickX >= obj.positionX &&
                    clickX <= obj.positionX + obj.width &&
                    clickY >= obj.positionY &&
                    clickY <= obj.positionY + obj.height
                ) {
                    this.stopDrawing = true;
                }
            });
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
}