var a , b;
var car,wall;
function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(400, 200, 50, 50);
 a.shapeColor = "blue";
 b.shapeColor = "blue";
 car = createSprite(100,100,50,50);
 car.shapecolor = "blue";
 car.velocityX = 4;
 wall = createSprite(400,100,10,100);
 wall.shapecolor = "red";
}


function draw() {
  background(255,255,255); 
  
  a.x = World.mouseX;
  a.y = World.mouseY;
  if (isTouching(a,b)){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    a.shapeColor = "blue";
    b.shapeColor = "blue";
   }
 if (isTouching(car,wall)){
  wall.shapeColor = "green";


 }
 collide(car,wall);
  drawSprites();
}
