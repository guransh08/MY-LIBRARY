var c,d,e;


function setup() {
  createCanvas(800,400);
  c=createSprite(400, 200, 50, 50);
  
  d=createSprite(200,200,50,50);
 


  c.shapeColor="brown";
  d.shapeColor="brown";


  e=createSprite(30,300,50,50);
  e.shapeColor="brown";
  
}

function draw() {
  background(255,255,255);
  
  c.x=mouseX;
  c.y=mouseY;

  console.log(c.y-d.y);

 if (istouching(c,e)){

  c.shapeColor="black";
  e.shapeColor="black";

  
 }else{

c.shapeColor="brown";
  e.shapeColor="brown";
 }
  

  drawSprites();
}

