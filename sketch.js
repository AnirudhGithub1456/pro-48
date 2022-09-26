var alien, alienImg
var i = 0
var tile
var PLAY = 1;
var END = 0;
var score =0

var gameState = PLAY;
var speed = 0
function preload(){
  planeImg = loadAnimation("Fly (1).png", "Fly (2).png")
  planeDead = loadImage("Dead (1).png")
  backgroundImg = loadImage("BG.png")
  columnImg = loadImage("column.png")
  
  
}
function setup() 
{
  createCanvas(1400,windowHeight);
  console.log(windowWidth)
  

  bg = createSprite(700,500, width,height)
  bg.addImage("background", backgroundImg)
  bg.scale = 2
  
  console.log(bg.width)
  console.log(bg.height)
  
  //bg.x = bg.width /2
  bg.width += 2000
  console.log(bg.width)
  
  plane = createSprite(250,600)
  plane.addAnimation("running", planeImg)
  plane.addImage("dead", planeDead)
  plane.setCollider
  plane.scale =0.3
  
  plane.debug = true

  ground = createSprite(700,1010,2000,20)

  columnGroup = new Group

  
  

  
}

function draw() 
{
  
  
      
  
  if(gamestate = PLAY){
    speed = (frameCount % 1000)/50
    score +=1
  
  background(255);
  
  
   
   
    
    setTimeout(() => {
      fill("#FF0000");
    textAlign("center");
    textSize(100);
    text("Score:"+ score, 1100, 200);
      
    }, 1000)
    
    
  
   
  if(gameState === PLAY){
    bg.velocity.x = -5 -speed
    if(bg.x <200){
      bg.x = bg.width/3
    }
    
    plane.velocity.y = 2.4
    spawnColumns()
    
  
    if(keyDown(UP_ARROW)){
      plane.velocity.y = -20
    }
    if(keyDown(DOWN_ARROW)){
      plane.velocity.y = +20

    }

    
    if(plane.collide(ground) || plane.collide(columnGroup)){
      gameState = END

    }

  }
  
    
    

      

      


    }
    
    
    

    
    

      
    
  
    
  
    
    
   
      


      
     
  
      
  
      
    

    
    
  
  

    
   

    

    
  
    

  

    

  
  if(gameState === END){
    plane.changeImage("dead")
    
    bg.velocity.x = 0
    columnGroup.setVelocityXEach(0)
    plane.velocity.y = 0
    plane.velocity.x = 0
    score -=1
    
    setTimeout(() => {
      fill("#FF0000");
      textAlign("center");
      textSize(100);
      text("Game over, You scored " + score, width / 2, 100);
      
      
    }, 1000)

    
    

    

    
    
    
    

    


  }
 
 
  drawSprites()
}
function spawnColumns(){
  var i = 1000*(Math.random(200,700))
  console.log(i)
  if(frameCount % 100 === 0){
    column1 = createSprite(700,600+i)
    column1.addImage("column", columnImg)
    column1.scale = 1
    column1.debug = true
    column1.setCollider("rectangle",25,0,100,800)

    column2 = createSprite(700,i-400)
    column2.addImage("column", columnImg)
    column2.scale = 1
    column2.setCollider("rectangle",25,0,100,800)

    
    columnGroup.add(column1)
    columnGroup.add(column2)
    columnGroup.setVelocityXEach(-5 -speed)

  }
}
  


  
  
