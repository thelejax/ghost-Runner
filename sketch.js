var tower,towerImage
var door,doorImage,doorGroup
var climber , climberImage,climberGroup
var ghost,ghostImage
var invisibleBlock,invisibleBlockGroup
var gameState="play"
var spookySound


function preload(){
  
  towerImage= loadImage("tower.png");
  doorImage= loadImage("door.png");
  doorsGroup=new Group()
  
  climberImage=loadImage("climber.png");
  climbersGroup=new Group()
  
  ghostImage=loadImage("ghost-standing.png")
  
  invisibleBlockGroup=new Group()
  
  spookySound=loadSound("spooky.wav")
  
}


function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300,10,10);
  tower.addImage(towerImage);
  tower.velocityY=2;
  
  ghost=createSprite(300,300);
  ghost.addImage(ghostImage);
  ghost.scale=0.4;
  
  
  
  
  
  
}

 function spawndoors(){
   
   
   if(frameCount%200===0){
     door=createSprite(200,-50);
     door.addImage(doorImage);
   door.velocityY=2;
     door.x=Math.round(random(100,500))
     door.lifetime=600;
     doorsGroup.add(door)
     
     climber=createSprite(200,10)
     climber.addImage(climberImage);
     climber.x=door.x
     climber.velocityY=2;
     climber.lifetime=600;
     climbersGroup.add(climber)
     
     ghost.depth=door.depth;
     ghost.depth=ghost.depth+1;
     
     
     invisibleBlock=createSprite(200,15)
     invisibleBlock.width=climber.width
     invisibleBlock.height=3;
     //invisibleBlock.debug=true;
     invisibleBlock.x=climber.x;
     invisibleBlock.velocityY=2;
     invisibleBlockGroup.add(invisibleBlock) 
     invisibleBlock.visible=false;
     
     
     
   }   
   
   
   
   
 }






function draw(){
  if(gameState==="play") {
    
    
  
  
  
  
  if(tower.y>400){
     tower.y=300;
     
     }
  
  
  spawndoors();
  
  
  if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
  

  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
   
  
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  
  //add gravity
  ghost.velocityY=ghost.velocityY+0.5;
  
  
  if(climbersGroup.isTouching (ghost)){
     ghost.velocityY=0;
     
     }
  
  if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
    ghost.destroy()
     gameState="end"
  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  }
  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("GameOver",300,300)
    spookySound.loop()
    
    
    
  }
  
  
}








