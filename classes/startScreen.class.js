class StartScreen {
    ctx;
    canvas;
    canvasRect;
    originalCanvasWidth = 1080;
    originalCanvasHeight = 720;
    startScreenImages = startImages;
    stopDrawing = false;
    isFullscreen = false;
    //playBtn = new PlayButton(430, 160); // 430, 260
    //fullscreenBtn = new Option('buttons/fullscreen.png', 1000, 20, false, true)
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        //this.canvasRect = this.canvas.getBoundingClientRect();
        this.drawStartScreen();
        //this.gameButtonClickListener = (event) => this.handleGameButtonClick(event);
        //this.muteButtonClickListener = (event) => this.handleMuteButtonClick(event);
        //this.fullscreenButtonClickListener = (event) => this.handleFullscreenButtonClick(event);

        //this.canvas.addEventListener('click', this.gameButtonClickListener);
        //this.canvas.addEventListener('click', this.muteButtonClickListener);
        //this.canvas.addEventListener('click', this.fullscreenButtonClickListener);

    }

    drawStartScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.startScreenImages.floors);
        this.addObjectsToMap(this.startScreenImages.lights);
        this.addObjectsToMap(this.startScreenImages.coins);
        this.addObjectsToMap(this.startScreenImages.potions);
        this.addObjectsToMap(this.startScreenImages.enemies);
        //this.addToMap(this.playBtn);
        //this.addToMap(this.muteBtn);
        //this.addToMap(this.fullscreenBtn);
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


    /*handleGameButtonClick(event) {
        const clickX = event.clientX - this.canvasRect.left;
        const clickY = event.clientY - this.canvasRect.top;
        if (this.playBtn instanceof PlayButton && this.isClickingOnElement(clickX, clickY, this.playBtn)) {
            this.stopDrawing = true;
            this.canvas.removeEventListener('click', this.gameButtonClickListener);
        }
    }*/
    /*
        handleMuteButtonClick(event) {
            const clickX = event.clientX - this.canvasRect.left;
            const clickY = event.clientY - this.canvasRect.top;
            if (this.muteBtn instanceof Option && this.isClickingOnElement(clickX, clickY, this.muteBtn)) {
                // Handle mute button click
                console.log('click Mute');
                //this.canvas.removeEventListener('click', this.muteButtonClickListener);
            }
        }*/

    /*handleFullscreenButtonClick(event) {
        const clickX = event.clientX - this.canvasRect.left;
        const clickY = event.clientY - this.canvasRect.top;
        if (this.fullscreenBtn instanceof Option && this.isClickingOnElement(clickX, clickY, this.fullscreenBtn)) {
            this.isFullscreen = true;
            this.canvas.requestFullscreen();
            this.canvas.removeEventListener('click', this.fullscreenButtonClickListener);
        }
    }*/





    /*
        startGameButtonListener(obj) {
            if (obj instanceof PlayButton) {
                this.canvas.addEventListener('click', (event) => {
                    //const canvasRect = this.canvas.getBoundingClientRect();
                    const clickX = event.clientX - this.canvasRect.left;
                    const clickY = event.clientY - this.canvasRect.top;
                    if (this.isClickingOnElement(clickX, clickY, obj)) {
                        this.stopDrawing = true;
                    }
                });
            }
        }
    
        startMuteButtonListener(obj) {
            if (obj instanceof Option && obj.isMuteBtn) {
                this.canvas.addEventListener('click', (event) => {
                    //const canvasRect = this.canvas.getBoundingClientRect();
                    const clickX = event.clientX - this.canvasRect.left;
                    const clickY = event.clientY - this.canvasRect.top;
                    console.log('X:', clickX, 'Y:', clickY)
                    if (this.isClickingOnElement(clickX, clickY, obj)) {
                        this.canvas.removeEventListener('click', this.startMuteButtonListener);
                    }
                });
            }
        }
    
        startFullscreenListener(obj) {
            if (obj instanceof Option && obj.isFullscreenSwitch) {
                this.canvas.addEventListener('click', (event) => {
                    const clickX = event.clientX - this.canvasRect.left;
                    const clickY = event.clientY - this.canvasRect.top;
                    if (this.isClickingOnElement(clickX, clickY, obj)) {
                        console.log('fulls klicked')
                        this.canvas.requestFullscreen();
                        this.canvas.removeEventListener('click', this.startFullscreenListener);
                    }
                });
            }
        }
        */

    /*
        isClickingOnElement(clickX, clickY, obj) {
            const scaleFactorX = this.canvas.width / this.originalCanvasWidth;
            const scaleFactorY = this.canvas.height / this.originalCanvasHeight;
    
            const adjustedClickX = clickX * scaleFactorX;
            const adjustedClickY = clickY * scaleFactorY;
            return (adjustedClickX >= obj.positionX &&
                adjustedClickX <= obj.positionX + obj.width &&
                adjustedClickY >= obj.positionY &&
                adjustedClickY <= obj.positionY + obj.height);
        }
    */
    /*isClickingOnElement(clickX, clickY, obj) {
        const scaleFactorX = this.canvas.width / this.originalCanvasWidth;
        const scaleFactorY = this.canvas.height / this.originalCanvasHeight;

        const clickThreshold = this.isFullscreen ? 2 : 1; //kurze if else abfrage

        const adjustedClickX = clickX * scaleFactorX;
        const adjustedClickY = clickY * scaleFactorY;

        return (
            adjustedClickX >= obj.positionX - obj.width * (clickThreshold - 1) / 2 &&
            adjustedClickX <= obj.positionX + obj.width * clickThreshold &&
            adjustedClickY >= obj.positionY - obj.height * (clickThreshold - 1) / 2 &&
            adjustedClickY <= obj.positionY + obj.height * clickThreshold
        );
    }*/


    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
}