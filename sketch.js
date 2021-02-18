
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hammer,stone,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(100,height,1600,20);
	hammer = new Hammer(100,100);
	stone = new Stone(400,100,100,100);
	rubber = new Rubber(900,450,70);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  

  drawSprites();
 
}



