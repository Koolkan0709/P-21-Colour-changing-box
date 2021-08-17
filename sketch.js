var canvas;
var music;
var s1,s2,s3,s4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    var s1 = createSprite(30,575,50,25);
    shapeColor.s1 = ("blue");

    var s2 = createSprite(90,575,50,25);
    shapeColor.s2("red");

    var s3 = createSprite(150,575,50,25); 
    shapeColor.s3("yellow");

    var s4 = createSprite(210,575,50,25);
    shapeColor.s4("purple");

    //create box sprite and give velocity
    var box = createSprite(random(5,235),400,10,10);
    shapeColor.box("white");
    box.velocityY = -2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites(edges);

    music.play();
    //add condition to check if box touching surface and make it box
    if (box.isTouching(s1)){
        shaoeColor.box("blue");
        box.velocityY = 0;
        music.stop();
    }
    if (box.isTouching(s2)){
        shaoeColor.box("red");
        box.velocityY = 0;
        music.stop();
    }
    if (box.isTouching(s3)){
        shaoeColor.box("yellow");
        box.velocityY = 0;
        music.stop();
    }
    if (box.isTouching(s4)){
        shaoeColor.box("purple");
        box.velocityY = 0;
        music.stop();
    }
}
