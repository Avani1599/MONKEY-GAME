
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var ground
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(30,340,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.09;

  
  ground = createSprite(400,370,800,5);
  ground.velocityX = 3;
  ground.x=ground.x/width;
 
  foodGroup = new Group;
  
}


function draw() {
background("white");
  
  if(ground.x >300){
    ground.x = ground.x/width;
  }
  
  if(keyDown("space")){
    monkey.velocityY = - 8;
  }
  monkey.velocityY = monkey.velocityY+0.2;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  monkey.collide(ground); 
   console.log(ground.x);
 food();
  spawnObstacle();
  drawSprites();
  
}

function food(){
  if(frameCount % 100 === 0){
    banana = createSprite(400,50,10,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -2;
    banana.scale=0.1;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 200 === 0){
    obstacle = createSprite(400,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 400;
    obstacle.velocityX = -2;
  }
}



