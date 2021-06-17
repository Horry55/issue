const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var g1
var engine,world,ground,ball;
function preload(){
  
}
function setup() {
  //Canvas
  createCanvas(displayWidth,displayHeight-140);
  //Matte.js
  engine=Engine.create();
   world=engine.world
  //Actor
  pc=new pc(500,1100,20);
  //Npc grounds
  g1=new Bar(200,1400,1200,20);
  //Npc walls
  w1=new  Bar(790,1010,20,800)
  w2=new  Bar(-400,1010,20,800)
 // Npc bars
  b1=new  Bar(10,1200,800,10)
 //laser
 l1=new  Laser(10,1210,800,10)
}

function draw() {
  //background
  background(0);  
  //Engine
  Engine.update(engine);
  //Actor displayed
  pc.display();
  //Npc grounds Displayed
  g1.display();
  //Npc wall Displayed
  w1.display();
  w2.display();
  //laser displayed
  b1.display()
  l1.display();
 if( Matter.SAT.collides(pc.body, l1.body)){
   text("ok",10,1200)
 }

  //to draw sprites
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    Matter.Body.applyForce(pc.body,pc.body.position,{x:0,y:-300});
  }
  if(keyDown(RIGHT_ARROW)){
    Matter.Body.applyForce(pc.body,pc.body.position,{x:10,y:0});
  }
  if(keyDown(LEFT_ARROW)){
    Matter.Body.applyForce(pc.body,pc.body.position,{x:-10,y:0});
  }
  
}
