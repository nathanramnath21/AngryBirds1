const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ball, ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  var ball_options ={

    restitution: 1.0

  }

  ball = Bodies.circle(200,100,50);
  World.add(world,ball);

}

function draw() {
  background(0,0,0);

  Engine.update(engine);
  ellipseMode(RADIUS);  
  ellipse(ball.position.x,ball.position.y,50);

  drawSprites();
}