const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bg;
var girlWalkingImg,  girl;
var snow=[];
var rand;

function preload(){
//loading background Image
bg = loadImage("snow1.jpg");

//loading girl Animation
girlWalkingImg = loadAnimation("Static pose.png","Walking1.png","Walking2.png","Walking3.png","Walking4.png","Walking5.png","Walking6.png","Walking7.png","Walking8.png");
}

function setup() {
  createCanvas(1200,560);
  engine = Engine.create();
  world = engine.world;

  girl = createSprite(width/2, 400);
  girl.addAnimation("g",girlWalkingImg);
  girl.scale = 1.6;
}

function draw() {
  background(bg);

  Engine.update(engine);

//display snowfall objects
if(frameCount%8 === 0){
  snow.push(new Snowfall(random(20 ,1100),5,50));
}

for (var p = 0; p < snow.length; p++){
  snow[p].display();
}

drawSprites();
}