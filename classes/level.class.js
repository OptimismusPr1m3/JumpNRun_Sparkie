class Level{
    enemies;
    lights;
    floors;
    potions;
    coins;
    level_end_x = 4300;

    constructor(enemies, lights, floors, potions, coins){
        this.enemies = enemies;
        this.lights = lights;
        this.floors = floors;
        this.potions = potions;
        this.coins = coins
    }
}