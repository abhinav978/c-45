//var score=0 ;


var bg;
var pc,pcImg;
var enemy1,enemy2,enemy3,enemy1img,enemy2img,enemy3img;

var diamond,gold,heart,goldimg,diamondimg,heartimg;

var enemyattack1,enemyattack2,enemyattack3,attackimg1,attackimg2,attackimg3

var pcattk,pcsuper,superimg,attkimg
var ground

//var life=3;
//var score=0;
//var gameState=1;

function preload(){

  bg=loadImage("assets/bg 3.jpeg")
  pcImg=loadImage("assets/pc.png")
  enemy1img=loadImage("assets/enemy 1 copy.png")
  enemy2img=loadImage("assets/enemy2.png")
  enemy3img=loadImage("assets/enemy3.png")
  diamondimg=loadImage("assets/diamond.png")
  goldimg=loadImage("assets/gold.png")
  heartimg=loadImage("assets/heart.png")
  attackimg1=loadImage("assets/enemy attack 1.png")
  attackimg2=loadImage("assets/enemy attack 2.png")
  attackimg3=loadImage("assets/enemy attack 3.png")
  attkimg=loadImage("assets/pc slash.png")
  superimg=loadImage("assets/pc super.png")
}
function setup(){
createCanvas(1000,500)
 pc = createSprite (100,500,200,200)
 pc . addImage (pcImg)
 pc.scale = 1.2

 enemy1= createSprite (800,425,200,200)
 enemy1 . addImage (enemy1img)
 enemy1 . scale=0.8
 enemy2= createSprite (800,250,200,200)
 enemy2 . addImage (enemy2img)
 enemy2 . scale=0.8
 enemy3= createSprite (800,100,200,200)
 enemy3 . addImage (enemy3img)
 enemy3 . scale=0.8

 diamond = createSprite (350,250,200,200)
 diamond . addImage (diamondimg)
 diamond . scale=0.5
 gold = createSprite (350,100,200,200)
 gold . addImage (goldimg)
 gold . scale=0.5
 heart= createSprite (350,425,200,200)
 heart . addImage (heartimg)
 heart . scale=0.5

 enemyattack1 = createSprite (600,425,200,200)
 enemyattack1 . addImage (attackimg3)
 enemyattack1 . scale=0.8
 enemyattack2 = createSprite (600,250,200,200)
 enemyattack2 . addImage (attackimg2)
 enemyattack2 . scale=0.8
 enemyattack3 = createSprite (600,100,200,200)
 enemyattack3 . addImage (attackimg1)
 enemyattack3 . scale=0.8
 pcattk = createSprite  (100,250,200,200)
 pcattk . addImage (attkimg)
 pcattk . scale=0.5
 pcsuper = createSprite (100,100,200,200)
 pcsuper . addImage (superimg)
 pcsuper . scale=0.8

 ground = createSprite (100,500,2000,10)

 Attackgroup = createGroup();
}
function draw(){

  background(bg)

  
  //handlepcControls();

  
  //handlePcControls()

    //if(gameState===1){
      if(keyDown("space")&& pc.y>=389.4){
      pc.velocityY=-10
      }

      pc.velocityY=pc.velocityY+0.2
      if(keyDown("shift")&& enemy1.y>=389.4){
        enemy1.velocityY=-10
        }
  
        enemy1.velocityY=enemy1.velocityY+0.2
     
    
      if (keyDown(LEFT_ARROW)){
        pc.x=pc.x-10
        }

      if  (keyDown(RIGHT_ARROW)){
        pc.x=pc.x+10
      }
      if (keyDown("A")){
        enemy1.x=enemy1.x-10
        }

      if  (keyDown("D")){
        enemy1.x=enemy1.x+10
      }
      pc.collide(ground)
      enemy1.collide(ground)
      
      console.log(pc.y)
      Attack();
      
      drawSprites()

    }
    function Attack(){
      if(keyDown(UP_ARROW)){

      
      attk= createSprite(pc.x,pc.y, 50,20)
     // attk.y= pc.y
      //attk.x= pc.x
      attk.addImage(attkimg)
      attk.scale=0.5
      attk.velocityX= 5
      Attackgroup.add(attk)
      }
    }
   
        
      
    

    
  

  
 
    
    
  
    
    

  
  
  
 





