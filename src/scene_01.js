import {Scene} from 'phaser';

var scene = 'uninitialized';

var birdFrames = {
    namePrefix: 'bird_',
    frames: ['00','01','02','03','04','05','06','07'],
    path: './assets/bird/'
}

var burbujaFrames = {
    namePrefix: 'Test_BURBUJA_',
    frames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '31'],
    path: './assets/burbuja/'
}

var birdScaleBox;
var screenW, screenH;




function init(){
    /* birdScaleBox = new Phaser.Structs.Size(190, 108, Phaser.Structs.Size.FIT);
    birdScaleBox.setParent(game);
    console.log(birdScaleBox.width,birdScaleBox.height );
    console.log(screen); */
}

function preload() {

    var bg = scene.load.image('bg', './assets/bg3.png');

    birdFrames.frames.forEach(function(idx) {
        //console.log(birdFrames.namePrefix + idx)
        scene.load.svg(birdFrames.namePrefix + idx, birdFrames.path + birdFrames.namePrefix + idx + '.svg', {
            width: screen.width / 10, 
            height: (screen.width / 10) * (576 / 848)
        });
    });

    burbujaFrames.frames.forEach(function(idx) {
        //console.log(birdFrames.namePrefix + idx)
        scene.load.svg(burbujaFrames.namePrefix + idx, burbujaFrames.path + burbujaFrames.namePrefix + idx + '.svg', {
            width: 1.35 * screen.width / 10, 
            height: 1.35 * (screen.width / 10)
        });
    });
}


function create(){
    //console.log(this);
    //console.log(game);

    var bg = scene.add.image(0, 0, 'bg');
    bg.x = bg.width/2;
    bg.y = bg.height/2;


    scene.anims.create({
        key:'bird_flying',
        repeat: -1,
        frameRate: 30,
        frames: birdFrames.frames.map(function(idx){
            return { key: birdFrames.namePrefix + idx};
        })
    });

    scene.anims.create({
        key:'burbuja',
        repeat: -1,
        frameRate: 22,
        frames: burbujaFrames.frames.map(function(idx){
            return { key: burbujaFrames.namePrefix + idx};
        })
    });

    for (let i = 0; i < 20; i++) {
        scene.add.sprite( 
            192*(i%5)*2 + 150, 
            140 * Math.floor(i/5)*2 + 115, 
            'birdFrame_00').play('bird_flying');
        scene.add.sprite( 
            192*(i%5)*2 + 150, 
            140 * Math.floor(i/5)*2 + 125, 
            'burbuja_00').play('burbuja');
    }


    
    //var burbuja = scene.add.sprite(100, 200, 'burbuja_00').play('burbuja');

}


function update(){

}

export default function Scene01() {
    scene = {
        ...new Scene({key:'Scene01'}),
        preload,
        create,
        update, 
    };
    return scene;
}