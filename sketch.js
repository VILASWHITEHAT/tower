const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var rockImg, platform;
var rock, slingShot;


function preload() {
    rockImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
    platform = new Ground(760, 280, 300, 20);
    
    box1 = new Box(700,241,20,30);
    box2 = new Box(790,241,20,30);
    box3 = new Box(745,190,20,30);

    

   rock = new Rock(400,200, 20);

 
    //slingshot = new SlingShot(rock.body,{x:200, y:50});

}

function draw(){
Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    //box4.display();
    //box5.display();
    ground.display();

    rock.display();
    platform.display();
   
    //slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
