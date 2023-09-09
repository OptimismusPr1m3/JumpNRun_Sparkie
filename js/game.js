let canvas;
let world;

function init(){
    canvas = document.getElementById('canvas');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    world = new World(canvas);

    console.log(world.character);
}