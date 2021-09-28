const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base,base2,bridge,joinPoint,jointLink;
var stones = [];





function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(50,500,100,200)
  base2 = new Base(windowWidth/2+700,windowHeight/2+120,100,200)

  bridge = new Bridge(25,{x:50,y:400})

  joinPoint = new Base(windowWidth/2+650,windowHeight/2+50,20,20)

  Matter.Composite.add(bridge.body,joinPoint);
  jointLink = new Link(bridge,joinPoint);

  for(var i = 0; i <= 8; i++) {
    var x = random(width/2-200, width/2+300);
    var y = random(-10,140);
    var stone = new Stone(x,y,60,60);
    stones.push(stone)

  }

}


function draw() {
  background(51);
  Engine.update(engine);
  base.show()
  base2.show()
  bridge.show()
  joinPoint.show()

  for (var stone of stones) { 
    stone.show();
   }

}
