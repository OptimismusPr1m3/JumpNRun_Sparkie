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
    //canvas.width = 1080;
    //canvas.height = 720;
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

//window.addEventListener('load', checkOrientation);

//window.addEventListener('orientationchange', checkOrientation);

function startGame() {
    startScreen.stopDrawing = true;
    document.getElementById('startButton').style = 'display: none';
    const listenToRotation = setInterval(() => {
        checkIfMobile();
    }, 1000 / 60);

}

function checkIfMobile() {
    if (window.matchMedia('(orientation: landscape) and (max-width: 920px)').matches) {
        document.getElementById('hudMovement').style = 'display: flex';
    } else {
        document.getElementById('hudMovement').style = 'display: none';
    }
}

function restartGame() {
    document.getElementById('gameOverSection').classList.add('d-none');
    document.getElementById('gameOverSection').classList.remove('game-over-section-animation');
    init();
    startGame();
}

function backToMenu() {
    window.location = 'index.html';
}


