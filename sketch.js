
function setup() {
  createCanvas(400,400);
  }

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW))
  {
    background('yellow')
  }
  if(keyIsDown(DOWN_ARROW))
  {
    background('red')
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    background('blue')
  }
  if(keyIsDown(LEFT_ARROW))
  {
    background('pink')
  }
  drawSprites()

}





