let canvas;
let world;
let startScreen;
let keyboard = new KeyBoard();

function init() {
    //removeInstructionsScreen();
    initLevel1();
    canvas = document.getElementById('GameCanvas');
    //canvas.style.display = 'flex';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    world = new World(canvas, keyboard);
}

function initStartScreen() {
    canvas = document.getElementById('GameCanvas');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setUpStartScreen(canvas);
}

function setUpStartScreen(canvas) {
    initStartImages();
    startScreen = new StartScreen(canvas, keyboard)
}

const intervallId = setInterval(() => {
    if (startScreen.stopDrawing) {
        clearInterval(intervallId)
        init();
    }
}, 10);


window.addEventListener("keydown", (event) => {
    switch (event['key']) {
        case 'w': keyboard.UP = true;
            break;
        case 's': keyboard.DOWN = true;
            break;
        case 'a': keyboard.LEFT = true;
            break;
        case 'd': keyboard.RIGHT = true;
            break;
        case ' ': keyboard.SPACE = true;
        default:
            break;
    }
});

window.addEventListener("keyup", (event) =>{
    switch (event['key']) {
        case 'w': keyboard.UP = false;
            break;
        case 's': keyboard.DOWN = false;
            break;
        case 'a': keyboard.LEFT = false;
            break;
        case 'd': keyboard.RIGHT = false;
            break;
        case ' ': keyboard.SPACE = false;
        default:
            break;
    }
})

