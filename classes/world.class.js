
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
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.keyboard.handleButtonsMobile();
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    clearAllIntervalls() {
        if (!(this.character.isAlive)) {
            for (let i = 0; i < 999; i++) {
                window.clearInterval(i);
            }
            this.setGameOverScreen();
        }

    }

    setGameOverScreen() {
        document.getElementById('gameOverSection').classList.remove('d-none');
        document.getElementById('gameOverSection').classList.add('game-over-section-animation');
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.clearAllIntervalls();
        }, 1000)
        setInterval(() => {
            this.checkThrownObjects();
            this.checkCollectingPotions();
            this.checkCollectingCoins();
            this.checkIfAttackAnimationisCompleted();
        }, 150);
        setInterval(() => {
            this.checkThrownObjectsCollidingEnemy();
            this.checkIfThrownObjectIsMoving();
            this.checkIfEnemyIsNearPlayer();
        }, 5);
    }

    checkThrownObjects() {
        if (!this.character.isThrowingBubble && this.keyboard.SPACE && this.character.amountOfP !== 0) {
            this.character.isThrowingBubble = true;
        }
    }

    checkIfAttackAnimationisCompleted() {
        if (this.character.spawnBubble) {
            let bubble = new ThrowableObject(this.character.positionX + 150, this.character.positionY + 150);
            this.throwableObejcts.push(bubble);
            this.character.isThrowing();
            this.poisonBar.setPercentage(this.character.amountOfP)
            this.character.spawnBubble = false;
            this.character.isThrowingBubble = false;
            console.log(this.character.amountOfP)
        }
    }

    checkThrownObjectsCollidingEnemy() {
        for (let i = 0; i < this.level.enemies.length; i++) {
            const enemy = this.level.enemies[i];
            for (let j = 0; j < this.throwableObejcts.length; j++) {
                const bubble = this.throwableObejcts[j];
                if (bubble.isThrowableColliding(enemy)) {
                    enemy.hit();
                    if (enemy.hp == 0) {
                        this.level.enemies.splice(i, 1);
                    }
                    this.throwableObejcts.splice(j, 1);
                }
            }
        }
    }

    checkIfThrownObjectIsMoving() {
        this.throwableObejcts.forEach((bubble, index) => {
            if (bubble.speedX == 0) {
                this.throwableObejcts.splice(index, 1);
            }
        })
    }

    checkCollectingPotions() {
        this.level.potions.forEach((potion, index) => {
            if (this.character.isColliding(potion)) {
                this.level.potions.splice(index, 1)
                this.character.isCollectingPotion();
                this.poisonBar.setPercentage(this.character.amountOfP);
            }
        })
    }
    checkCollectingCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1)
                this.character.isCollectingCoins();
                this.coinBar.setPercentage(this.character.amountOfC);
            }
        })
    }

    checkIfEnemyIsNearPlayer() {
        this.level.enemies.forEach(enemy => {
            const distance = this.character.positionX - enemy.positionX;
            if (distance > -400) {
                enemy.isPlayerNear = true;
            }
        })
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                //console.log('Collision with character:', enemy)
                enemy.isDamagingPlayer = true;
                this.character.hit();
                this.statusBar.setPercentage(this.character.hp);
                if (this.character.hp == 0) {
                    //this.character.isAlive = false;
                }
                //console.log("Leben des Characters:", this.character.hp)
            } else {
                enemy.isDamagingPlayer = false;
            };
        });
    }

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

        //Draw() wird immer aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        // this.testJumpFunc(mo); // Test function for klick event handling
        mo.draw(this.ctx)
        mo.showHitbox(this.ctx)
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /* Test Funtion for click event handling maybe using it for later mute button and fullscreen switch ;-)
    testJumpFunc(mo) {
        if (mo instanceof Character) {
            this.canvas.addEventListener('click', (event) => {
                const canvasRect = this.canvas.getBoundingClientRect();
                const clickX = event.clientX - canvasRect.left;
                const clickY = event.clientY - canvasRect.top;
    
                if (
                    clickX >= mo.positionX + this.camera_x &&
                    clickX <= mo.positionX + mo.width + this.camera_x &&
                    clickY >= mo.positionY &&
                    clickY <= mo.positionY + mo.height &&
                    mo.isAlive
                ) {
                    mo.jump();
                }
            });
        }
    }*/

    flipImage(moveableObject) {
        this.ctx.save();
        this.ctx.translate(moveableObject.width, 0);
        this.ctx.scale(-1, 1);
        moveableObject.positionX = moveableObject.positionX * -1
    }
    flipImageBack(moveableObject) {
        moveableObject.positionX = moveableObject.positionX * -1;
        this.ctx.restore();
    }
}

