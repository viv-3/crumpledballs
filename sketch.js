
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

	do1 = new Bin(350,570,20,200)
	do2 = new Bin(480,570,210,10)
	do3 = new Bin(630,570,20,200)
	

	ball = new Paper(200,200,70)

	ground = new Ground(400,700,900,50)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
  background(120);
  //do1.display();
  do2.display();
  //do3.display();
 
  ground.display();
  ball.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:140,y:-140});
	}
}


