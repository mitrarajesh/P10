var ship, shipAnimation;
var sea, seaImage;

function preload() {
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup() {
  createCanvas(400, 400);

  sea = createSprite(400, 200);
  sea.scale = 0.25;
  sea.addImage("sea", seaImage);

  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("sailing", shipAnimation);
  ship.scale = 0.25;
 
  //sea.x = sea.width/2;
  sea.velocityX = -4;
}

function draw() {
  background("blue");
 
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
 
  drawSprites();
}