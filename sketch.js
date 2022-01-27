var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(100,200,40,30);
  wall = createSprite(1500,200,30,height/2);
  
  
  
  speed=random(50,90);
  weight = random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5* weight * speed * speed/22509;
    if(deformation>188)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<188 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }

  }


  drawSprites();
}
