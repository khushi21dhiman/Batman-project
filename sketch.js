const Engine = matter.Engine
const World = matter.world
const Bodies = matter.bodies

var thunder, thunder1, thunder2, thunder3, thunder4;
var rand;
var engine, world;
var drops = [];
var maxdrops = 100;
var thunderCreatedFrame = 0;

function preload(){
    thunder = loadImage("1.png");
    thunder = loadImage("2.png");
    thunder = loadImage("3.png");
    thunder = loadImage("4.png");
}

function setup(){
   engine = Engine.create(); 
   world = engine.world;
   createCanvas(400, 650);
   umbrella = new umbrella(200,450);
   if(frameCount%150===0){
    for(var i=0; i<maxdrops;i++)
    drops.push(new drop(random(0,400),random(0,400)))
   }

}
   
function draw(){
   Engine.update(engine);
   background = 0;

   rand = math.round(random(1.4));
   if(frameCount%80===0);
      thunderCreatedFrame = frameCount
         thunder = createSprite(random(10,370),random(10,30),10,10)
           switch (rand){
             case 1: thunder.addImage(thunder1);
              break; 
              case 2: thunder.addImage(thunder2);
              break; 
              case 3: thunder.addImage(thunder3);
              break; 
              case 4: thunder.addImage(thunder4);
              break; 
              default: break;
           }
           thunderScale = random(0.3,0.6);
}   
   if(thunderCreatedFrame+10===frameCount && thunder ){
      thunder.destroy();
   }
   umbrealla.display();
   for(var i=0; i<maxdrops; i++){
      drops[i].showDrop();
      drops[i].updateY();
   }
    drawSprites();