const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
platformImage = loadImage("GamingBackground.jpg")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  monster = new Monster(1000,200,200)
  hero1 = new Hero(200,100,200)
  fly = new String(hero1.body,{x:200, y:70})
  
  
  var ground_options ={
    isStatic: true
}

  ground = Bodies.rectangle(500,390,400,20,ground_options);
  World.add(world,ground);

  //first tier
  block1 = new Block(300,200,40,40)

}

function draw() {
  background(platformImage);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,2000,20);

  //first tier
  block1.display();

  hero1.display();
  fly.display();
  monster.display();

 



}
function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})
}

