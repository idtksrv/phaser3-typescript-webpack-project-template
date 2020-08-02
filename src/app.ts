import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;

const config:GameConfig = {
    title: "Template",
    width: 800,
    height: 600,
    parent: "game",
    backgroundColor: "#18216D"
};

export class StarfallGame extends Phaser.Game {
    constructor(config:GameConfig) {
        super(config);
    }
}

window.onload = () => {
    let game = new StarfallGame(config);
};