
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5,box1,box2,box3,box4,piso;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
   piso = new Piso(675.5,595,255,10);

   box1 = new Box(675,585,50,50);
   box2 = new Box(675,585,50,50);
   box3 = new Box(675,585,50,50);
   box4 = new Box(675,585,50,50);

	bob1 = new bob(320,575,40)
	rope1=new rope(bob1.body,roofObject.body,-80, 0)

	bob2 = new bob(360,575,40)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	
    bob3 = new bob(400,575,40)
	rope3=new rope(bob3.body,roofObject.body,-0, 0)
	
	bob4 = new bob(440,575,40)
	rope4=new rope(bob4.body,roofObject.body,40, 0)

	bob5 = new bob(480,575,40)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	

	
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  roofObject.display()
  piso.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed() {
   if(keyCode == UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   }
}





