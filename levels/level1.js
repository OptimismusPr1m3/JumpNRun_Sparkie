const level1 = new Level([
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
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
    new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540*3),
    new Floor('sprites/3. Background/Layers/5. Water/D1.png', 540*2),
    // third floor of fourthlayer
    new Floor('sprites/3. Background/Layers/5. Water/D2.png', 540*5),
    new Floor('sprites/3. Background/Layers/5. Water/D1.png', 540*4),

    // third layer
    new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540),
    new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 0),
    // second floor of third layer if char moves to right
    new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540*3),
    new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 540*2),
    // third floor
    new Floor('sprites/3. Background/Layers/4.Fondo 2/D2.png', 540*5),
    new Floor('sprites/3. Background/Layers/4.Fondo 2/D1.png', 540*4),

    // second layer
    new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540),
    new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 0),
    // second floor of second layer if char moves to right
    new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540*3),
    new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 540*2),
    // third floor
    new Floor('sprites/3. Background/Layers/3.Fondo 1/D2.png', 540*5),
    new Floor('sprites/3. Background/Layers/3.Fondo 1/D1.png', 540*4),

    // first layer
    new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540),
    new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 0),
    //second floor of first layer if char moves to right
    new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540*3),
    new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 540*2),
    // thir floor
    new Floor('sprites/3. Background/Layers/2. Floor/D2.png', 540*5),
    new Floor('sprites/3. Background/Layers/2. Floor/D1.png', 540*4)
],
[
    new Potion(),
    new Potion(),
    new Potion(),
    new Potion(),
    new Potion(),
]
)