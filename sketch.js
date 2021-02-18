const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var eggArr = [],
  goldEggArr = [];
var score = 0;

var introBg, introBgImg, playButtonImg, playButton;

function preload() {}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  nest = new Nest(370, 500, 100, 80);
  ground = new Ground(width / 2, height - 5, width, 10);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background(0);

  ground.display();

  if (frameCount % 20 === 0) {
    eggArr.push(new whiteEgg(Math.round(random(50, 1200)), 100, 20));
  }

  if (frameCount % 60 === 0) {
    goldEggArr.push(new goldEgg(Math.round(random(50, 1200)), 100, 20));
  }

  textSize(25);
  text("Score : " + score, 50, 50);

  Matter.Body.setPosition(nest.nest, { x: mouseX, y: 500 });

  for (var j = 0; j < eggArr.length; j++) {
    eggArr[j].display();
  }

  for (var j = 0; j < goldEggArr.length; j++) {
    goldEggArr[j].display();
  }
  nest.display();
  drawSprites();
}
