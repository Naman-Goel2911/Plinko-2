const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(25)
  text("500", 20, 700);
  text("200", 100, 700);
  text("200", 180, 700);
  text("100", 260, 700);
  text("100", 340, 700);
  text("100", 420, 700);
  text("100", 500, 700);
  text("200", 580, 700);
  text("200", 660, 700);
  text("500", 740, 700);

  Engine.update(engine);

  if(gameState === "play")
  {
    for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) 
    {
      
      divisions[k].display();
    }

    if(turn === 5)
    {
       gameState = "end";
    } 
  }

  if(gameState === "end")
  {
     push();
     textSize(30)
     text("Game Over", 200, 400);
     pop();
  }
  
  

  if(particles !== null)
  {
    if(particles.body.position.x < 240 && particles.body.position.x > 560)
    {
       score = score + 100;
    }

    if(particles.body.position.x < 560 && particles.body.position.x > 700)
    {
       score = score + 200;
    }

    if(particles.body.position.x < 60 && particles.body.position.x > 240)
    {
       score = score + 200;
    }

    if(particles.body.position.x < 0 && particles.body.position.x > 60)
    {
       score = score + 500;
    }

    if(particles.body.position.x < 700 && particles.body.position.x > 760)
    {
       score = score + 500;
    }
  }
  
   for (var i = 0; i < plinkos.length; i++)
   {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
  
}

function mousePressed()
{
  if(gameState !== "end")
  {
     turn++;
     particle = new Particle(mouse.x, 10, 10, 10)
  }
}