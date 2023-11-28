let startImages;

function initStartImages() {
    startImages = new Level(
        [],
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
        [],
        [])
}
