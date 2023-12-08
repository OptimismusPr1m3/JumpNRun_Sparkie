let canvas;
let world;
let startScreen;
let keyboard = new KeyBoard();


function init() {
    //removeInstructionsScreen();
    initLevel1();
    canvas = document.getElementById('GameCanvas');
    //canvas.style.display = 'flex';
    //canvas.width = canvas.offsetWidth;
    //canvas.height = canvas.offsetHeight;
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



function startGame() {
    startScreen.stopDrawing = true;
    document.getElementById('startButton').style = 'display: none';
}

function restartGame() {
    document.getElementById('restartButton').style = 'display: none';
    init();
}


