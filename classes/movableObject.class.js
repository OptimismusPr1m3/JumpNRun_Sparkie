class MovableObject extends DrawableObject {
    hp;
    
    swimming_sound;
    speedY = 0;
    acceleration = 0.6;
    amountOfP = 0;
    amountOfC = 0;
    isJumping;
    lastHit = 0;

    isAlive = true;
    otherDirection = false;
    isSlapping = false;
    hasSlapped = false;
    isDamagingPlayer = false;
    isAttacking = false;
    isGameOver = false;
    isThrowingBubble = false;
    spawnBubble = false;
    isKilled = false;
    isDeadlyHurt = false;

    // Hitbox calculation offsets
    offsetRight = 40;
    offsetLeft = 5;
    offsetBottom = 5;
    offsetTop = 50;

    /**
     * Applies gravity to the character's vertical position, simulating falling.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
                this.isJumping = true;
            } else {
                this.isJumping = false;
            }
        }, 1000 / 25)
    }
    /**
     * Checks if the character is positioned above the ground.
     * @returns {boolean} Returns `true` if the character is above the ground, otherwise `false`.
     */
    isAboveGround() {
        return this.positionY < 390;
    }
    /**
     * Checks if the character is colliding with another moveable object, considering offsets.
     * @param {YourClass} moveableObject - The moveable object to check for collision.
     * @returns {boolean} Returns `true` if a collision is detected, otherwise `false`.
     */
    isColliding(moveableObject) {     //character.isColliding(pufferfish)
        return this.positionX + this.width - this.offsetRight > moveableObject.positionX + moveableObject.offsetLeft &&
            this.positionY + this.height - this.offsetBottom > moveableObject.positionY + moveableObject.offsetTop &&
            this.positionX + this.offsetLeft < moveableObject.positionX - moveableObject.offsetRight &&
            this.positionY + this.offsetTop < moveableObject.positionY + moveableObject.height - moveableObject.offsetBottom;
    }
    /**
     * Checks if the throwable object is colliding with another moveable object.
     * 
     * @param {YourClass} moveableObject - The moveable object to check for collision.
     * @returns {boolean} Returns `true` if a collision is detected, otherwise `false`.
     * 
     * @description
     * This method determines if the character is colliding with another moveable object,
     * considering offsets for more accurate collision detection.
     */
    isThrowableColliding(moveableObject) {
        return this.positionX + this.width > moveableObject.positionX &&
            this.positionY + this.height > moveableObject.positionY &&
            this.positionX < moveableObject.positionX &&
            this.positionY < moveableObject.positionY + moveableObject.height;
    }
    /**
     * Handles the collection of potions, incrementing the character's poison points.
     */
    isCollectingPotion(){
        this.amountOfP += 20;
        if (this.amountOfP > 100) {
            this.amountOfP = 100;
        }
    }
    /**
     * Handles the collection of coins, incrementing the character's coin count.
     */
    isCollectingCoins(){
        this.amountOfC += 5.6;
        if (this.amountOfC > 100) {
            this.amountOfC = 100
        }
    }
    /**
     * Plays an animation by updating the character's image based on an array of image paths.
     * 
     * @param {string[]} imagesArray - An array containing paths to images representing frames of the animation.
     */
    playAnimation(imagesArray) {
        let i = this.currentImage % imagesArray.length;  // let i = 7 % 6; => 1, Rest 1
        let path = imagesArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    /**
     * Initiates a jump action by setting the vertical speed of the character.
     */
    jump() {
        this.speedY = 15;
    }
    /**
     * Checks if the character is in a hurt state based on the time elapsed since the last hit.
     * @returns {boolean} Returns `true` if the character is hurt (within 1 second of the last hit), otherwise `false`.
     */
    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; //Difference in ms
        timePassed = timePassed / 1000 //Difference in sec
        return timePassed < 1 ;
    }
    /**
     * Initiates the throwing action, reducing the character's poison points (amountOfP).
     */
    isThrowing(){
        this.amountOfP -= 20;
        if (this.amountOfP < 0) {
            this.amountOfP = 0;
        }
    }
    /**
     * Inflicts damage on the character by reducing their health points (hp) and updating the last hit timestamp.
     * 
     * @description
     * This method decreases the character's health points by 20. If the resulting health points are less than 0,
     * it sets the health points to 0. The method also updates the last hit timestamp.
     */
    hit() {
        this.hp -= 20;
        if (this.hp < 0) {
            this.hp = 0;
        }else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * Checks if the character is dead based on their current health points.
     * @returns {boolean} Returns `true` if the character is dead (hp equals 0), otherwise `false`.
     */
    isDead() {
        return this.hp == 0;
    }
}

