let canvas;
let world;
let startScreen;
let keyboard = new KeyBoard();

/**
 * Initializes the game by setting up level 1 and creating a new World instance with the canvas and keyboard.
 */
function init() {
    initLevel1();
    canvas = document.getElementById('GameCanvas');
    world = new World(canvas, keyboard);
}
/**
 * Initializes the start screen by obtaining the canvas element and setting up the start screen.
 */
function initStartScreen() {
    canvas = document.getElementById('GameCanvas');
    setUpStartScreen(canvas);
}
/**
 * Sets up the start screen by initializing start images and creating a new StartScreen instance.
 * 
 * @param {HTMLCanvasElement} canvas - The HTML canvas element for rendering the start screen.
 */
function setUpStartScreen(canvas) {
    initStartImages();
    startScreen = new StartScreen(canvas, keyboard)
}
/**
 * Sets up an interval to check if the start screen drawing is stopped, and initializes the game when it is stopped.
 * 
 * @description
 * This code sets up an interval to continuously check if the `startScreen.stopDrawing` flag is set to true.
 * Once the flag is true, indicating that the start screen drawing is stopped, the interval is cleared, and the `init` function is called to initialize the game.
 */
const intervallId = setInterval(() => {
    if (startScreen.stopDrawing) {
        clearInterval(intervallId)
        init();
    }
}, 10);
/**
 * Initiates the game by stopping the start screen drawing, hiding the start button, and listening to device rotation changes.
 */
function startGame() {
    startScreen.stopDrawing = true;
    document.getElementById('startButton').style = 'display: none';
    const listenToRotation = setInterval(() => {
        checkIfMobile();
    }, 1000 / 60);

}
/**
 * Checks if the device is in landscape orientation and has a maximum width of 920 pixels,
 * and adjusts the display style of the 'hudMovement' element accordingly.
 */
function checkIfMobile() {
    if (window.matchMedia('(orientation: landscape) and (max-width: 920px)').matches) {
        document.getElementById('hudMovement').style = 'display: flex';
    } else {
        document.getElementById('hudMovement').style = 'display: none';
    }
}
/**
 * Restarts the game by hiding the game over section, initializing the game, and starting the game.
 */
function restartGame() {
    document.getElementById('gameOverSection').classList.add('d-none');
    document.getElementById('gameOverSection').classList.remove('game-over-section-animation');
    init();
    startGame();
}
/**
 * Redirects the user back to the main menu page.
 */
function backToMenu() {
    window.location = 'index.html';
}
/**
 * Toggles the visibility of the instructions and start button.
 */
function toggleInstructions() {
    document.getElementById('instructions').classList.toggle('d-none');
    document.getElementById('startButton').classList.toggle('d-none');
}
/**
 * Toggles between different instruction pages based on the specified action.
 * @param {string} backOrNext - The action to perform ('next' or 'back').
 */
function toggleInstructionPages(backOrNext) {
    if (backOrNext === 'next') {
        document.getElementById('firstInstruction').classList.add('d-none');
        document.getElementById('secondInstruction').classList.remove('d-none');
        document.getElementById('thirdInstruction').classList.remove('d-none');
        document.getElementById('backButton').classList.remove('d-none');
        document.getElementById('nextButton').classList.add('d-none');
    } else if (backOrNext === 'back') {
        document.getElementById('firstInstruction').classList.remove('d-none');
        document.getElementById('secondInstruction').classList.add('d-none');
        document.getElementById('thirdInstruction').classList.add('d-none');
        document.getElementById('backButton').classList.add('d-none');
        document.getElementById('nextButton').classList.remove('d-none');
    }
}
/**
 * Toggles fullscreen- mode
 */
function toggleFullscreen() {
    canvas.requestFullscreen();
}