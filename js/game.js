let canvas;
let world;
let keyboard = new KeyBoard();
function init() {
    removeInstructionsScreen();
    initLevel1();
    canvas = document.getElementById('canvas');
    //canvas.style.display = 'flex';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    world = new World(canvas, keyboard);
}

function removeInstructionsScreen() {
    document.getElementById('instructionSection').classList.add('d-none');
    document.getElementById('playBtn').classList.add('d-none');
    canvas = document.getElementById('game').classList.remove('d-none');
}

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