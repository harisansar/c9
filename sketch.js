var r = 0
var g = 0
var b = 0
function setup() {
  createCanvas(400,400);
  var redbutton = createButton()
  redbutton.position(100,50)
  redbutton.mousePressed(red_bg)
}

function draw() 
{
  background(r,g,b);
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

function red_bg(){
  r=255
  g=0
  b=0
}



