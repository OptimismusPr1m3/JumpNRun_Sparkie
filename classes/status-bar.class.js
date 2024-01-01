class StatusBar extends DrawableObject {
    width = 300;
    height = 80;
    percentage = 100;

    /**
     * Sets the percentage value and updates the displayed image accordingly.
     * 
     * @param {number} percentage - The percentage value to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[imagePath]
    }
    /**
     * Resolves the image index based on the percentage value.
     *
     * @function
     * @name resolveImageIndex
     *
     * @returns {number} - The resolved image index.
     *
     * @description
     * This function determines the appropriate image index based on the percentage value. The index is used to select
     * the corresponding image from an array of images.
     *
     * @example
     * // To resolve the image index based on a percentage value:
     * const percentage = 75;
     * const imageIndex = resolveImageIndex(percentage); // Returns 3
     */
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 30) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}