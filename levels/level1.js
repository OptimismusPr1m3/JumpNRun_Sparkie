let level1;

/**
 * Initializes the first level of the game.
 * 
 * @description
 * This function sets up the first level with specified entities, lights, floors, potions, and coins.
 * The level includes PufferFish enemies and an Endboss. 
 */
function initLevel1() {
    level1 = new Level([
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Endboss()
    ],
        [
            new Light()
        ],
        [
            // fourth layer
            new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540),
            new Floor('sprites/3. Background/Layers/5. Water/D1.png', 0),
            // second floor of fourth layer if char moves to right
            new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540 * 3),
            new Floor('sprites/3. Background/Layers/5. Water/D1.png', 540 * 2),
            // third floor of fourthlayer
            new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540 * 5),
            new Floor('sprites/3. Background/Layers/5. Water/D1.png', 540 * 4),
            //4.
            new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540 * 7),
            new Floor('sprites/3. Background/Layers/5. Water/D1.png', 540 * 6),
            //5.
            new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540 * 9),
            new Floor('sprites/3. Background/Layers/5. Water/D1.png', 540 * 8),
            // third layer
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540),
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 0),
            // second floor of third layer if char moves to right
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540 * 3),
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 540 * 2),
            // third floor
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540 * 5),
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 540 * 4),
            //4.
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540 * 7),
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 540 * 6),
            //5.
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540 * 9),
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 540 * 8),
            // second layer
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540),
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 0),
            // second floor of second layer if char moves to right
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540 * 3),
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 540 * 2),
            // third floor
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540 * 5),
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 540 * 4),
            //4.
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540 * 7),
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 540 * 6),
            //5.
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540 * 9),
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 540 * 8),
            // first layer
            new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540),
            new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 0),
            //second floor of first layer if char moves to right
            new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540 * 3),
            new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 540 * 2),
            // thir floor
            new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540 * 5),
            new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 540 * 4),
            //4.
            new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540 * 7),
            new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 540 * 6),
            //5.
            new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540 * 9),
            new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 540 * 8)
        ],
        [
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion()
        ],
        [
            new Coin(1000, 500),
            new Coin(1050, 450),
            new Coin(1100, 420),
            new Coin(1150, 400),
            new Coin(1200, 400),
            new Coin(1250, 400),
            new Coin(1300, 420),
            new Coin(1350, 450),
            new Coin(1400, 500),

            new Coin(2100, 500),
            new Coin(2150, 450),
            new Coin(2200, 420),
            new Coin(2250, 400),
            new Coin(2300, 400),
            new Coin(2350, 400),
            new Coin(2400, 420),
            new Coin(2450, 450),
            new Coin(2500, 500),
        ])
}