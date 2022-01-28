var ocean,turtle,bottle,bag,seaweed,shrub, end;
var oceanImg,trutleImg,bottleImg,seaweedImg,bagImg,shrubImg, emdImg;
var foodCollection = 0;
var bottleG,bagG,seaweedG,shrubG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  oceanImg = loadImage("ocean.jpg");
  turtleImg = loadImage("turtle.png")
  bottleImg = loadImage("bottle.png");
  bagImg = loadImage("bag.png");
  seaweedImg = loadImage("seaweed.png");
  shrubImg = loadImage("shrub.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  createCanvas(400, 600);
// Moving background
ocean=createSprite( 200,200);
ocean.addImage(oceanImg);
ocean.velocityY = 4;



//creating boy running
turtle = createSprite( 200,520);
turtle.addImage(turtleImg);
turtle.scale=0.25;
  
  
bottleG=new Group();
bagG=new Group();
seaweedG=new Group();
shrubG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  turtle.x = World.mouseX;
  
  edges= createEdgeSprites();
  turtle.collide(edges);
  
  //code to reset the background
  if(ocean.y > 400 ){
    ocean.y = height/2;
  }
  
    createBottle();
    createBag();
    createShrub();
    createSeaweed();

    if (shrubG.isTouching(turtle)) {
      shrubG.destroyEach();
      foodCollection=foodCollection+10;
    }
    else if (seaweedG.isTouching(turtle)) {
      shrubG.destroyEach();
      foodCollection=foodCollection+20;
      
    }else{
      if(bottleG.isTouching(turtle)||bagG.isTouching(turtle)) {
        gameState=END;
        
        gameOver=createSprite(200, 300);
        gameOver.addImage(endImg)
        gameOver.scale=0.07;
        turtle.destroy();
       
        
        bottleG.destroyEach();
        bagG.destroyEach();
        seaweedG.destroyEach();
        shrubG.destroyEach();
        
        bottleG.setVelocityYEach(0);
        bagG.setVelocityYEach(0);
        seaweedG.setVelocityYEach(0);
        shrubG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Points: "+ foodCollection,150,30);
  }

}

function end(){
  if(gameState===END){
   
    ocean.velocity(0);
    turtle.velocity(0);
    seaweedG.setVelocityYEach(0);
    shrubG.setVelocityYEach(0);
    bottleG.setVelocityYEach(0);
    bagG.setVelocityYEach(0);

  }
}


function createBottle() {
  if (World.frameCount % 200 == 0) {
  var bottle = createSprite(Math.round(random(50, 350),40, 10, 10));
  bottle.addImage(bottleImg);
  bottle.scale=0.02;
  bottle.velocityY = 3;
  bottle.lifetime = 150;
  bottleG.add(bottle);
  }
}

function createBag() {
  if (World.frameCount % 320 == 0) {
  var bag = createSprite(Math.round(random(50, 350),40, 10, 10));
  bag.addImage(bagImg);
  bag.scale=0.15;
  bag.velocityY = 3;
  bag.lifetime = 150;
  bagG.add(bag);
}
}

function createSeaweed() {
  if (World.frameCount % 410 == 0) {
  var seaweed = createSprite(Math.round(random(50, 350),40, 10, 10));
  seaweed.addImage(seaweedImg);
  seaweed.scale=0.09;
  seaweed.velocityY = 3;
  seaweed.lifetime = 150;
  seaweedG.add(seaweed);
  }
}

function createShrub(){
  if (World.frameCount % 530 == 0) {
  var shrub = createSprite(Math.round(random(50, 350),40, 10, 10));
  shrub.addImage(shrubImg);
  shrub.scale=0.07;
  shrub.velocityY = 3;
  shrub.lifetime = 150;
  shrubG.add(shrub);
  }
}