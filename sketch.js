
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var do1,do2,do3
var ball
var ground

function preload(){}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	do1 = new Bin(500,670,200,20)
	do2 = new Bin(400,670,20,215)
	do3 = new Bin(600,670,20,215)

	ball = new Paper(200,200,20)

	ground = new Ground(400,700,900,50)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  keyPressed();
  
  background(0);
  do1.display();
  do2.display();
  do3.display();
  ball.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


