class DrawableObject {

    img;
    imageCache = [];
    currentImage = 0;
    positionX = 0;
    positionY = 250;
    height = 250;
    width = 250;
    speed = 0.15;

    /**
     * Loads a single image and sets it as the object's current image.
     * @param {string} path - The path to the image to be loaded.
     * 
     * @description
     * This method creates a new Image object, sets its source to the provided path, and assigns it as the
     * current image for the object.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }
    /**
     * Draws the object on the canvas using the provided 2D rendering context.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     * 
     * @description
     * This method uses the provided rendering context to draw the object on the canvas at its specified position
     * with the specified width and height.     */
    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }
    /**
     * Loads images into the image cache for later use.
     * @param {string[]} array - An array of image paths to be loaded.
     * 
     * @description
     * This method iterates over an array of image paths, creates Image objects for each path, and stores them
     * in the image cache for future use.
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    /**
     * Moves the character to the right based on its speed.
     */
    moveRight() {
        this.positionX += this.speed;
    }
    /**
     * Moves the character to the left based on its speed.
     */
    moveLeft() {
        this.positionX -= this.speed;
    }
}