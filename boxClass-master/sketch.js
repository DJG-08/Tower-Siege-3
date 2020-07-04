const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,pics,polygon,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,slingshot

var score 
function preload(){
 pics = loadImage ("polygon.png");
 backgroundImg = loadImage("sprites/bg.png");
 getTime();

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
polygon = Bodies.circle(50,200,20)

score = 0

World.add(world,polygon);
 slingshot = new SlingShot (this.polygon,{x:100,y:200})
  ground = new Ground (400,350,800,10)
  stand = new Ground (465,325,300,10)
  box1 = new Box (530,250,30,40)
  box2 = new Box (500,275,30,40)
  box3 = new Box (530,275,30,40)
  box4 = new Box (570,275,30,40)
  box5 = new Box (530,200,30,40)
  box6 = new Box (480,300,30,40)
  box7 = new Box (510,300,30,40)
  box8 = new Box (540,300,30,40)
  box9 = new Box (570,300,30,40)
  box10 = new Box (600,300,30,40)
 

  Engine.update(engine);
}

function draw() {
  
  background(backgroundImg);  
  imageMode(CENTER)
  image(pics,polygon.position.x,polygon.position.y,40,40)
  ground.display();
  text("SCORE:"+score,750,40)
  
  slingshot.display();
  stand.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(bird.body)
  }
}
  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON = await response.json()
    console.log(responseJSON)
    var dateTime = responseJSON.datetime
    var hour = dateTime.slice(11,13)
    console.log(hour)
    if(hour > 6 && hour < 16){
      bg = "sprites/bg.png"
      
      
    }
    else{
      bg = ("sprites/bg2.jpg") 
    }
  backgroundImg = loadImage(bg)
  }
