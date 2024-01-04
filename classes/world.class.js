
class World {
    
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    intervallIDs = [];
    camera_x = 0;
    statusBar = new HealthBar(10, 45);
    poisonBar = new PoisonBar(5, -5);
    coinBar = new CoinBar(10, 100);
    throwableObejcts = [];
    imagesAmount = 0;

    /**
     * Creates an instance of YourClass, initializing the canvas, keyboard input, and starting the game loop.
     * 
     * @param {HTMLCanvasElement} canvas - The canvas element for rendering the game graphics.
     * @param {Keyboard} keyboard - The keyboard object for handling user input.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.keyboard.handleButtonsMobile();
        this.draw();
        this.setWorld();
        this.run();
    }
    /**
     * Gives the character class object the entire world object in a variable world
     */
    setWorld() {
        this.character.world = this;
    }
    /**
     * Clears all intervalls which has been set
     */
    clearAllIntervalls() {
        this.checkIfPlayerIsDead();
        this.checkIfPlayerWins();
    }
    /**
     * Checks if the player is dead and sets the game-over screen if applicable.
     */
    checkIfPlayerIsDead() {
        if (!(this.character.isAlive)) {
            for (let i = 0; i < 999; i++) {
                window.clearInterval(i);
            }
            this.setGameOverScreen();
        }
    }
    /**
     * Checks if the player wins by inspecting the state of specific enemies (e.g., Endboss) and sets the victory screen if applicable.
     * @description
     * This method iterates through the array of enemies, specifically checking for a certain enemy type (e.g., Endboss),
     * and if the Endboss is killed, it clears all intervals and sets the victory screen using the `setYouWinScreen` method.     
     * 
     */
    checkIfPlayerWins() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Endboss) {
                if (enemy.isKilled) {
                    for (let i = 0; i < 999; i++) {
                        window.clearInterval(i);
                    }
                    this.setYouWinScreen();
                }
            }
        })
    }
    /**
     * Displays the winning screen by updating the HTML elements' classes.
     * 
     */
    setYouWinScreen() {
        document.getElementById('gameOverSection').classList.remove('d-none');
        document.getElementById('gameOverSection').classList.add('game-over-section-animation');
        document.getElementById('winTitle').classList.remove('d-none');
        document.getElementById('gameOverText').classList.add('d-none');
    }
    /**
     * Displays the game-over screen by updating the HTML elements' classes.
     */
    setGameOverScreen() {
        document.getElementById('gameOverSection').classList.remove('d-none');
        document.getElementById('gameOverSection').classList.add('game-over-section-animation');
        document.getElementById('gameOverText').classList.remove('d-none');
        document.getElementById('winTitle').classList.add('d-none');
    }
    /**
     * The main game loop that periodically checks and updates various game mechanics.
     * 
     * @description
     * This method sets up several intervals to check and update different aspects of the game, including collisions, player actions,
     * item collection, enemy interactions, and overall game state. It also clears all intervals after a specific duration.     
     */
    run() {
        setInterval(() => {
            //this.checkCollisions();
            
        }, 1000)
        setInterval(() => {
            this.checkIfMeleeAttack();
            this.checkThrownObjects();
            this.checkCollectingPotions();
            this.checkCollectingCoins();
            this.checkIfAttackAnimationisCompleted();
            this.checkCollisions();
        }, 150);
        setInterval(() => {
            this.clearAllIntervalls();
            this.checkThrownObjectsCollidingEnemy();
            this.checkIfThrownObjectIsMoving();
            this.checkIfEnemyIsNearPlayer();
            this.checkFinSlapNearEnemy();
            this.checkIfEnemyIsDead();
            this.checkPlayerPosition();
        }, 1);
    }
    /**
     * Checks the player's position relative to specific objects (e.g., Endboss) and updates their relative position states.
     */
    checkPlayerPosition() {
        this.level.enemies.forEach((enemy) =>{
            if (enemy instanceof Endboss) {
                this.calculateDistance(enemy);
            }
        }); 
    }
    /**
     * Calculates the distance between the player and a given object, updating the object's relative position state.
     * 
     * @param {GameObject} obj - The object for which the distance is to be calculated.
     */
    calculateDistance (obj) {
        let distance = this.character.positionX - obj.positionX;
        if (distance < 0 && obj.hadFirstContact) {
            obj.isBeforePlayer = true;
            obj.isBehindPlayer = false;
        } else {
            obj.isBeforePlayer = false;
            obj.isBehindPlayer = true;
        }
    }
    /**
     * Checks if the player initiates throwing objects, updates player's throwing state.
     */
    checkThrownObjects() {
        if (!this.character.isThrowingBubble && this.keyboard.SPACE && this.character.amountOfP !== 0) {
            this.character.isThrowingBubble = true;
        }
    }
    /**
     * Checks if the player initiates a melee attack and updates player's melee attack state.
     */
    checkIfMeleeAttack() {
        if (this.keyboard.MELEE) {
            this.character.isSlapping = true;
        }
    }
    /**
     * Checks if the player's fin slap ability is near a specific type of enemy (e.g., PufferFish), triggers the ability, and updates enemy states.
     * 
     * @description
     * This method iterates through the array of enemies, specifically checking for a certain enemy type (e.g., PufferFish).
     * If the player's `hasSlapped` property is true and the distance between the player and the enemy is within a specific range,
     * it triggers the fin slap ability, marks the enemy as deadly hurt (`isDeadlyHurt`), and resets the player's `hasSlapped` property.
     */
    checkFinSlapNearEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof PufferFish) {
                const distance = this.character.positionX - enemy.positionX;
                if (distance > -300 && this.character.hasSlapped) {
                    this.character.hasSlapped = false;
                    enemy.isDeadlyHurt = true;
                }else {
                    setTimeout(() => {
                        this.character.hasSlapped = false;
                    }, 100);
                }
            }
        })
    }
    /**
     * Checks if the attack animation is completed, spawns a throwable object, updates player states, and manages poison bar.
     * 
     * @description
     * This method checks if the player's `spawnBubble` property is true, indicating that the attack animation is completed.
     * If true, it creates a new `ThrowableObject` at a specific position, adds it to the `throwableObejcts` array,
     * calls the player's `isThrowing` method, updates the poison bar based on the player's collected potions, and resets certain player properties.
     */
    checkIfAttackAnimationisCompleted() {
        if (this.character.spawnBubble) {
            let bubble = new ThrowableObject(this.character.positionX + 150, this.character.positionY + 150);
            this.throwableObejcts.push(bubble);
            this.character.isThrowing();
            this.poisonBar.setPercentage(this.character.amountOfP)
            this.character.spawnBubble = false;
            this.character.isThrowingBubble = false;
        }
    }
    /**
     * Checks for collisions between thrown objects and enemies, updates enemy states, and removes collided objects.
     * 
     * @description
     * This method iterates through the array of enemies and thrown objects, checking for collisions using the `isThrowableColliding` method.
     * If a collision is detected, it calls the enemy's `hit` method, checks if the enemy's health is reduced to zero,
     * marks the enemy as deadly hurt (`isDeadlyHurt`), and removes the collided thrown object from the array.
     */
    checkThrownObjectsCollidingEnemy() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            const enemy = this.level.enemies[i];
            for (let j = 0; j < this.throwableObejcts.length; j++) {
                const bubble = this.throwableObejcts[j];
                if (bubble.isThrowableColliding(enemy)) {
                    enemy.hit();
                    if (enemy.hp == 0) {
                        enemy.isDeadlyHurt = true;
                    }
                    this.throwableObejcts.splice(j, 1);
                }
            }
        }
    }
    /**
     * Checks if enemies are killed, removes dead enemies from the array.
     */
    checkIfEnemyIsDead() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.isKilled) {
                this.level.enemies.splice(index, 1);
            }
        })
    }
    /**
     * Checks if thrown objects are still in motion, removes stationary objects from the array.
     */
    checkIfThrownObjectIsMoving() {
        this.throwableObejcts.forEach((bubble, index) => {
            if (bubble.speedX == 0) {
                this.throwableObejcts.splice(index, 1);
            }
        })
    }
    /**
     * Checks for collisions between the player and potions, updates their states, and manages collected potions.
     */
    checkCollectingPotions() {
        this.level.potions.forEach((potion, index) => {
            if (this.character.isColliding(potion)) {
                this.level.potions.splice(index, 1)
                this.character.isCollectingPotion();
                this.poisonBar.setPercentage(this.character.amountOfP);
            }
        })
    }
    /**
     * Checks for collisions between the player and coins, updates their states, and manages collected coins.
     */
    checkCollectingCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1)
                this.character.isCollectingCoins();
                this.coinBar.setPercentage(this.character.amountOfC);
            }
        })
    }
    /**
     * Checks if enemies are near the player and updates their state accordingly.
     */
    checkIfEnemyIsNearPlayer() {
        this.level.enemies.forEach(enemy => {
            const distance = this.character.positionX - enemy.positionX;
            if (distance > -400) {
                enemy.isPlayerNear = true;
            }
        })
    }
    /**
     * Checks for collisions between the player and enemies, updates their states, and manages player health.
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !(this.character.isHurt())) {
                enemy.isDamagingPlayer = true;
                this.character.hit();
                this.statusBar.setPercentage(this.character.hp);
            } else {
                enemy.isDamagingPlayer = false;
            };
        });
    }
    /**
     * Renders the game elements on the canvas, including floors, lights, throwable objects, potions, coins, status bars,
     * characters, enemies, and more. Utilizes the camera position for scrolling effects.
     * @description
     * This method clears the canvas, translates the context based on the camera position, and renders various game elements
     * such as floors, lights, throwable objects, potions, coins, status bars, characters, and enemies.
     * It uses the `addToMap` method to handle the rendering of moveable objects.
     * The method then resets the context translation and calls itself repeatedly using `requestAnimationFrame` for continuous rendering.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.floors);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.throwableObejcts);
        this.addObjectsToMap(this.level.potions);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0)
        // --------------- Space for fixed Objects -------------
        this.addToMap(this.statusBar);
        this.addToMap(this.poisonBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0)

        //Draw() calls itself over and over
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };
    /**
     * Adds an array of moveable objects to the map.
     * @param {Array<MoveableObject>} objects - An array of moveable objects to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }
    /**
     * Adds a moveable object to the map, considering its direction and applying image flips if needed.
     * @param {MovableObject} mo - The moveable object to add to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx)
        //mo.showHitbox(this.ctx)
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    /**
     * Flips the image of a moveable object horizontally.
     * @param {MovableObject} moveableObject - The object whose image to flip.
     */
    flipImage(moveableObject) {
        this.ctx.save();
        this.ctx.translate(moveableObject.width, 0);
        this.ctx.scale(-1, 1);
        moveableObject.positionX = moveableObject.positionX * -1
    }
    /**
     * Restores the position and context state after flipping an image.
     * @param {MoveableObject} moveableObject - The object whose image was flipped.
     */
    flipImageBack(moveableObject) {
        moveableObject.positionX = moveableObject.positionX * -1;
        this.ctx.restore();
    }
}

