let startImages;

function initStartImages() {
    startImages = new Level(
        [
            new StaticImage('sprites/2.Enemy/3 Final Enemy/Attack/2.png', 700, 250, 300, 350),
            new StaticImage('sprites/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png', 100, 300, 250, 250),
            new StaticImage('sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png', 680, 500, 70, 60),
            new StaticImage('sprites/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png', 340, 430, 70, 80),
            new StaticImage('sprites/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png', 500, 540, 70, 60)
        ],
        [],
        [
            // fourth layer
            new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540),
            new Floor('sprites/3. Background/Layers/5. Water/D1.png', 0),

            // third layer
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540),
            new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 0),

            // second layer
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540),
            new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 0),

            // first layer
            new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540),
            new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 0),
        ],
        [
            new StaticImage('sprites/4. Marcadores/Posiขn/Dark - Left.png', 950, 550, 90, 60),
            new StaticImage('sprites/4. Marcadores/Posiขn/Dark - Right.png', 100, 550, 90, 60),
        ],
        [
            new StaticImage('sprites/4. Marcadores/1. Coins/2.png', 565, 600, 55, 55),
            new StaticImage('sprites/4. Marcadores/1. Coins/2.png', 505, 600, 55, 55),
            new StaticImage('sprites/4. Marcadores/1. Coins/2.png', 445, 600, 55, 55)
        ])
}
