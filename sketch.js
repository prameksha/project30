
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block912,block13,bloc14,block15,block16;
var GroundObj,GroundObj1,GroundObj2;
var slingshot;

function preload()
{
	bc=loadImage("back.jpg")
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	block1 = new block (330,235,30,40);
	block2 = new block (360,235,30,40);
	block3 = new block (390,235,30,40);
	block4 = new block (420,235,30,40);
	block5 = new block (450,235,30,40);
	block6 = new b2 (360,195,30,40);
	block7 = new b2 (390,195,30,40);
	block8 = new b2 (420,195,30,40);
	block9 = new b3 (300,275,30,40);
	block10 = new b3 (330,275,30,40);
	block11 = new b3 (360,275,30,40);
	block12 = new b3 (390,275,30,40);
	block13 = new b3 (420,275,30,40);
	block14 = new b3 (450,275,30,40);
	block15 = new b3 (480,275,30,40);
	block16 = new b4 (390,155,30,40);
	GroundObj = new ground(600,height,1500,20);
	GroundObj1 = new ground(400,450,300,10);
	GroundObj2 = new ground(1000,300,300,10);
	block18 = new block (920,290,30,40);
	block19 = new block (950,290,30,40);
	block20 = new block (980,290,30,40);
	block17 = new block (1010,290,30,40);
	block21 = new block (1040,290,30,40);
	block22 = new block (1070,290,30,40);
	block23 = new block (1100,290,30,40);
	block24 = new b2 (950,260,30,40);
	block25 = new b2 (980,260,30,40);
	block26 = new b2 (1010,260,30,40);
	block27 = new b2 (1040,260,30,40);
	block28 = new b2 (1070,260,30,40);
	block29 = new b3 (980,230,30,40);
	block30 = new b3 (1010,230,30,40);
	block31 = new b3 (1040,230,30,40);
	block32 = new b4 (1010,155,30,40);

	bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bc);


  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  GroundObj.display();
  GroundObj1.display();
  GroundObj2.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  bird.display();
  slingshot.display();



  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(shot.body);
    }
}


