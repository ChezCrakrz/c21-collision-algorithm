var fRect, mRect;

function setup() {
  createCanvas(800,400);
  fRect = createSprite(200,100,50,70);
  mRect = createSprite(400,100,70,50);
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
  fRect.debug = true;
  mRect.debug = true;
}

function draw() {
  background(255,255,255); 
  mRect.x = mouseX;
  mRect.y = mouseY;

  if(isTouching(mRect, fRect)){
    fRect.shapeColor = "pink";
  mRect.shapeColor = "pink";
  }
else{
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
}

  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2){ 
      return true;
  }
  
  else{
    return false;
  }
}
