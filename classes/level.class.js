class Level{
    enemies;
    lights;
    floors;
    potions;
    level_end_x = 2100;

    constructor(enemies, lights, floors, potions){
        this.enemies = enemies;
        this.lights = lights;
        this.floors = floors;
        this.potions = potions;
    }
}