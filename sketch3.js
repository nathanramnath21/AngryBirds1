const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var box1, box2, ground, pig1;
var log1, log2, box3, box4, pig2;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //creating Box object using BOX class
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    pig1 = new Pig(800,350);
    pig2 = new Pig(800,220);

    log1 = new Log(810,260,300,PI)
    log2 = new Log(810,180,300,PI)

    ground = new Ground(600,390,1200,20);

}
function draw() {
    background(0,0,0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
}