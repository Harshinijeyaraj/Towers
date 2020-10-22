const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,slingshot,stone1,block10,block11;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world;
  stone1 = new Stone(200,200);
  platform = new Ground(400,200,10,10);
  //slingshot = new SlingShot(stone1.body,{x:200,y:200});
  
  block1 = new Block(400,140,20,20);
  block2 = new Block(420,140,20,20);
  block3 = new Block(440,140,20,20);
  block4 = new Block(460,140,20,20);
  block5 = new Block(410,120,20,20);
  block6 = new Block(430,120,20,20);
  block7 = new Block(450,120,20,20);
  block8 = new Block(420,100,20,20);
  block9 = new Block(440,100,20,20);
  block10 = new Block(430,80,20,20);
  slingshot = new SlingShot(stone1.body,{x:200, y:200});
 // block11 = new Block(520,80,20,20);

  /*block1 = fill(135,206,234);
  block2 = fill(135,206,234);
  block3 = fill(135,206,234);
  block4 = fill(135,206,234);
  block5 = fill(135,206,234);

  block6 = fill(62,223,207);
  block7 = fill(62,223,207);
  block8 = fill(62,223,207);

  block9 = fill(254,191,202);
  */

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  

  platform.display();
  slingshot.display();
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
 // block11.display();
  stone1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

