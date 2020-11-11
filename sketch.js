const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
var world;
var engine;
var ground;
var object
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option ={
     isStatic:true
  }
  var option_circle={
    restitution:1.0
  }
  object=Bodies.circle(200,200,40,option_circle)
  ground=Bodies.rectangle(400,390,800,50,option);
  
  World.add(world,ground);
  World.add(world,object);
  console.log(ground)
}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,40,40);
  drawSprites();
}