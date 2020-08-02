import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;

const config:GameConfig = {
    title: "Template",
    width: 1920,
    height: 1080,
    parent: "game",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    plugins: {
        scene: [
            { key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
        ]
    },
    backgroundColor: "#18216D"
};

export class App extends Phaser.Game {
    constructor(config:GameConfig) {
        super(config);
    }
}

window.onload = () => {
    let app = new App(config);
};