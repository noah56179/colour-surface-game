var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,500);
   
    //create 4 different surfaces
surface1 = createSprite(50,400,100,15);
surface1.shapeColor = "green";
surface2 = createSprite(175,400,100,15);
surface2.shapeColor = "blue";
surface2 = createSprite(300,400,100,15);
surface2.shapeColor = "yellow";
surface2 = createSprite(425,400,100,15);
surface2.shapeColor = "red";
    //create box sprite and give velocity
 box = createSprite(100,150,50,50);
 //random(20,480)
 box.shapeColor = "white";
 box.velocityY = 2;
}

function draw() {
    background(0);
    //create edgeSprite
 createEdgeSprites();


    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) ){
    box.velocityY = 0;
  box.shapeColor = "green";
}
else if(surface2.isTouching(box) ){
    box.velocityY = 0;
  box.shapeColor = "blue";
}

  drawSprites();
}
