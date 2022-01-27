var bg, dormir, cepillar, ejercitarse, alimentarse, lavarse, mover;
var astronauta;

function preload(){
bg = loadImage("images/iss.png");
dormir = loadAnimation("images/sleep.png");
mover = loadAnimation("images/move.png");
cepillar = loadAnimation("images/brush.png");
ejercitarse = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png","images/gym11.png","images/gym11.png","images/gym12.png","images/gym12.png");
alimentarse = loadAnimation("images/eat1.png","images/eat2.png","images/drink1.png","images/drink2.png");
lavarse = loadAnimation("images/bath1.png","images/bath2.png");

}

function setup() {
  createCanvas(600, 500);
  astronauta = createSprite(300,230);
  astronauta.addAnimation("dormir", dormir);
  astronauta.scale = 0.1;
  
}

function draw() {
  background(bg);
  
  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia Arriba = Cepillarse",20, 55);
  text("Flecha hacia Abajo = Ejercitarse",20, 75);
  text("Flecha hacia la Izquierda = Bañarse",20, 95);
  text("Flecha hacia la Derecha = Comer",20, 115);
  text("Tecla M = Flotar",20,135);
  text("Tecla R = Girar",20,155);
  
  
  edges = createEdgeSprites();
  astronauta.bounceOff(edges);



  
   if(keyDown("UP_ARROW")){
    astronauta.addAnimation("cabello", cepillar);
    astronauta.changeAnimation("cabello");
    astronauta.y = 350;
    astronauta.velocityX = 0.5;
    astronauta.velocityY = 0.5;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronauta.addAnimation("ejercicio", ejercitarse);
    astronauta.changeAnimation("ejercicio");
    //astronauta.ChangeAnimation("ejercicio");
    //astronauta.changeanimation("ejercicio");
    //astronauta.change("ejercicio");
    astronauta.y = 350;
    astronauta.x = 300;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronauta.addAnimation("bañarse", lavarse);
    astronauta.changeAnimation("bañarse");
    astronauta.x = 200;
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  /*if(KeyDown("LEFT_ARROW")){
    astronauta.Animation("comer", alimentarse);
    astronauta.changeAnimation("comer");
    astronauta.x = 150;
    astronauta.y = 350;
    astronauta.velocityX = 0.5;
    astronauta.velocityY = 0.5;
  }*/
  
  if(keyDown("RIGHT_ARROW")){
    astronauta.addAnimation("comer",alimentarse);
    astronauta.changeAnimation("comer");
    astronauta.x = 400
    astronauta.y = 350
    astronauta.velocityX = 0.5;
    astronauta.velocityY = 0.5;
  }




  
  
  drawSprites();

  if(keyDown("m")){
    astronauta.addAnimation("rotar",mover);
    astronauta.changeAnimation("rotar");
    astronauta.velocityX = 5;
    astronauta.velocityY = 5;
    astronauta.rotation = astronauta.rotation + 5;
    console.log("hey")
  }

  if(keyDown("r")){

    astronauta.rotation = astronauta.rotation + 5;

  }

}

