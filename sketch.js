var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg, backgroundImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("spaceShip.png")
  blastImg = loadImage("brokenAsteroid.jpg")
  // blastImg = Image("blast.png")
   // blastImg = LoadImage("blast.png")
    // blastImg = loadImage("blast.jpg")



  bulletImg = loadImage("laser.jpg")
  blueBubbleImg = loadImage("friendlySpaceShip.jpg")
  redBubbleImg = loadImage("movingAsteroid.png")
  backBoardImg= loadImage("back.jpg")
  backgroundImg = loadImage("download (19).jpg")

}
function setup() {
  createCanvas(800, 600);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background(backgroundImg);
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble(); 
    }

    if(keyDown("space")){
      shootBullet();
    }
   
    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
    }   
    
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
    }
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
    } 

    drawSprites();
  }
    
  
}

function drawblueBubble(){
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.4;
  bluebubble.velocityX = -5;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}
function drawredBubble(){
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.4;
  redbubble.velocityX = -5;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);  
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.05
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

    blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg)

   //  blast= sprite(bullet.x+60, bullet.y, 50,50);
   // blast.addImage(blastImg)

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
   // blast.addImage(blastImg)

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
   // image(blastImg)


   blast.scale=0.15
   blast.life=20 
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
      
if (score === 50) {
  gameState=2
      
}
     
    }
  }