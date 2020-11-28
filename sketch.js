var wall,thickness ;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  bullet=createSprite(100,200,100,50)
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
function draw() {
  background(0,0,0);  
  drawSprites();
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
}
