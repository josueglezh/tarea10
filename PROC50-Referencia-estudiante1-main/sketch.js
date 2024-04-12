var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameOver,gameOverImg

function preload(){
bgImg = loadImage("assets/bg.png")
gameOverImg = loadImage("assets/gameOver.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//Imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//Crear bases superiores e inferiores
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

//crear imagen game over
gameOver = createSprite(190,100,1,1);
gameOver.addImage(gameOverImg);
gameOver.visible=false;
gameOver.scale =0.7;



}

function draw() {
  
  background("black");
        
          //Hacer brincar el globo aerostático
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }
          if(keyDown("right")) {
            balloon.velocityX=balloon.velocityX+0.5
            
          }
          if(keyDown("left")) {
            balloon.velocityX=balloon.velocityX-0.5
            
          }


          //Añadir gravedad
           balloon.velocityY = balloon.velocityY+1;
           if(balloon.position.y>400){
            gameOver.visible=true;
           }
   
        drawSprites();
        
}
