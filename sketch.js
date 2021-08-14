var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var bg;

var divisionHeight=100;
var score =0;
var count = 0;
var gameState ="start";

function preload()
{
  bg = loadImage("gradient2.jpg");
}

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   
    for (var j = 25; j <=width; j=j+70) {
       plinkos.push(new Plinko(j,75,"red"));
    }

    for (var j = 50; j <=width-10; j=j+70) {
        plinkos.push(new Plinko(j,125,"orange"));
    }

    for (var j = 75; j <=width; j=j+70) {
        plinkos.push(new Plinko(j,175,"yellow"));
    }

    for (var j = 50; j <=width-10; j=j+70) {
        plinkos.push(new Plinko(j,225,"green"));
    }

    for (var j = 25; j <=width-10; j=j+70) {
      plinkos.push(new Plinko(j,275,"blue"));
    }

    for (var j = 50; j <=width-10; j=j+70) {
      plinkos.push(new Plinko(j,325,"purple"));
    }

    for (var j = 75; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,375,"pink"));
    }

    for (var j = 50; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,425,"red"));
    }

    for (var j = 25; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,475,"orange"));
    }

    for (var j = 50; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,525,"yellow"));
    }

    for (var j = 75; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,575,"green"));
    }

    for (var j = 50; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,625,"blue"));
    }

    for (var j = 25; j <=width; j=j+70) {
      plinkos.push(new Plinko(j,675,"purple"));
    }
    
}
 
function draw() {
  background(bg);
  textSize(35)
  text("Score : "+score,20,40);
  fill("red");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  fill("blue")
  text(" 500 ", 5, 750);
  text(" 500 ", 80, 750);
  text(" 500 ", 160, 750);
  text(" 500 ", 240, 750);
  text(" 100 ", 320, 750);
  text(" 100 ", 400, 750);
  text(" 100 ", 480, 750);
  text(" 200 ", 560, 750);
  text(" 200 ", 640, 750);
  text(" 200 ", 720, 750);
  Engine.update(engine);
  ground.display();
  
  if ((score === 1500)||(score > 1500)) {
    
    textSize(170);
    fill(217, 29, 238)
    stroke("red");
    strokeWeight(5)
    textFont("Brush Script MT")
    text("You Win..!!", 50, 400 );
    //return
  }
  

  textFont("Arial");
  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>760)
        {
              if (ball.body.position.x < 300) 
              {
                  score=score+500;      
                  ball=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
              {
                    score = score + 100;
                    ball=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
              {
                    score = score + 200;
                    ball=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     ball=new Ball(mouseX, 10, 15, 10); 
  }   
}

//function endIt()
//{
  //if((score === 1000)||(score > 1000))
  //{
    //textSize(10);
    //fill("red");
    //text("You Win..!!",width/2,height/2); 
  //}
//}