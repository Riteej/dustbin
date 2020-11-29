var g,d,p;





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	
	g=new wall(400,670,800,20);
	d=new dustbin(550,645)
	p=new papper(200,650,20) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  d.display();
p.display();
  g.display();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { Matter.Body.applyForce(p.body,p.body.position,{x:35,y:-70}); } } 

