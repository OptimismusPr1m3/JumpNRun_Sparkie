class StartScreen {
    ctx;
    canvas;
    canvasRect;
    originalCanvasWidth = 1080;
    originalCanvasHeight = 720;
    startScreenImages = startImages;
    stopDrawing = false;
    isFullscreen = false;
    /**
     * Creates an instance of the StartScreen - class, initializes the canvas and context, and starts drawing the start screen.
     * @param {*} canvas 
     */
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.drawStartScreen();
    }
    /**
     * Clears the canvas and draws the start screen with various objects such as floors, lights, coins, potions, and enemies.
     * Continuously animates the start screen if `stopDrawing` is not set to true.
     *
     */
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

    /**
     * Adds an array of objects to the map by calling the `addToMap` method for each object.
     * @param {Array} obj -  An array of objects to be added to the map.
     */
    addObjectsToMap(obj) {
        obj.forEach(object => {
            this.addToMap(object)
        });
    }
    /**
     * Adds an object to the map by calling its `draw` method with the provided canvas context.
     * @param {Array} obj - An array of objects to be added to the map.
     */
    addToMap(obj) {
        obj.draw(this.ctx);
    }
    /**
     * Draws the object on the canvas using the provided 2D rendering context by drawing an image.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
}