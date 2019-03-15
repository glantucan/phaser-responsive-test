import Phaser from "phaser";
import Scene01 from './scene_01.js';
//import logoImg from "./assets/logo.png";
//import bird_sps from "./assets/bird_4_sprites.svg";

var config = {
    type: Phaser.AUTO,
    backgroundColor: '#666666',
    parent: "responsive",
    scale: {
        width: 1920,
        height: 1080,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        autoRound: true,
    },
    scene: [Scene01]
};

var game = new Phaser.Game(config);

 // TODO: Create a Scene with a hierarchy of sprites created from SVGs and test this config:
    /*
        var config = {
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                parent: 'phaser-example',
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 800,
                height: 600
            },
            //...
        }
    */


