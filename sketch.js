
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world,engine;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	Bob1 = new Bob(320,575,40);
	Bob2 = new Bob(360,575,40);
	Bob3 = new Bob(420,575,40);
	Bob4 = new Bob(460,575,40);
	Bob5 = new Bob(520,575,40);
	
	
	
	rope1=new rope(Bob1.body,roofObject.body,-80, 0);
	rope2=new rope(Bob2.body,roofObject.body,-40, 0);
	rope3=new rope(Bob3.body,roofObject.body,-00, 0);
	rope4=new rope(Bob4.body,roofObject.body,+40, 0);
	rope5=new rope(Bob5.body,roofObject.body,+80, 0);

	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject.display();

}


function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45}); } 
} 





