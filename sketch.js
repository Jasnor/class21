var ball, up_movement;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world, groundObj, leftSide , rightSide; 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	var ball_options={ 
		isStatic:false,
		restitution:0.3,
		friction:0
		
	}
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(150,50,20,ball_options);
	World.add(world, ball)
  	ellipseMode(RADIUS);

	groundObj=new Ground(width/2,670,width,20)
    leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1300,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}

