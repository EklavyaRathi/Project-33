const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;

function preload(){
  bg = loadImage("snow2.jpg");
  snowImage = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  //snow=createSprite(350, 240, 50, 50);
  //snow.addImage(snowImage);
  //snow.scale=0.6;
  snow1=new Snow(10,0);
  //snow1.x=Math.round(random(10,790));
  
  snow2=new Snow(30,0);
  snow3=new Snow(60,0);
  snow4=new Snow(90,0);
  snow5=new Snow(120,0);
  snow6=new Snow(150,0);
  snow7=new Snow(180,0);
  snow8=new Snow(210,0);
  snow9=new Snow(690,0);
  snow10=new Snow(770,0);
  snow11=new Snow(580,0);
  snow12=new Snow(490,0);
  snow13=new Snow(320,0);
  snow14=new Snow(380,0);
  snow15=new Snow(260,0);
 
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  drawSprites();
}