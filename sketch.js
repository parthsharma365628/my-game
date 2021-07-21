const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var player, plst, plrun, plgun, gro, gro1, en, en1 ,gr2, gr23



function preload(){
    plst=loadAnimation("man_stand.png")
    plrun=loadAnimation("man_run/mr1.png","man_run/mr2.png","man_run/mr3.png","man_run/mr4.png")
    plgun=loadAnimation("man_gun/mg1.png","man_gun/mg2.png","man_gun/mg3.png","man_gun/mg4.png")
    gro1=loadImage("back1.jpg")
    gr23=loadImage("back2.jpg")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(windowWidth,windowHeight);
  

    gro=createSprite(width/2,height/2 ,width, 20)
    gro.addImage(gro1)
    gro.scale=3
  
    gr2=createSprite(gro.width+1919,height/2 ,width, 20)
    gr2.addImage(gro1)
    gr2.scale=3


  

    player=createSprite(170,height-200)
    player.addAnimation("playerAni",plst)
    player.scale=1

    
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    if(keyWentDown("right")){
        gro.velocityX= -15
        gr2.velocityX= -15
        player.addAnimation("playerAni",plrun)

      
    }
    if(keyWentUp("right")){
        gro.velocityX= 0
        gr2.velocityX= 0
    
        player.addAnimation("playerAni",plst)
    }

 //   if(gro.x < -100){
   //     gro.x = width/2
    //}
    
console.log(gr2.x)
    drawSprites();
}   