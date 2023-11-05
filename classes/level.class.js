class Level{
    enemies;
    lights;
    floors;
    level_end_x = 2100;

    constructor(enemies, lights, floors){
        this.enemies = enemies;
        this.lights = lights;
        this.floors = floors;
    }
}