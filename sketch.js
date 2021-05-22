const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function setup() {
	createCanvas(1600,700)
    engine=Engine.create()
	world=engine.world
	invisibleGround=new Ground(100,640,100,10)
	ground=new Ground(700,690,1600,20)
	dustbin=new Dustbin(1000,670)
	paper=new Paper(200,300,20)
	slingshot=new Slingshot(paper.body,{x:200,y:300})
}
function draw() {
	background(0,0,255)
	Engine.update(engine)
	

	paper.display()
	ground.display()
	dustbin.display()
	
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}




