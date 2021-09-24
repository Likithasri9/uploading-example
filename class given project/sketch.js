var backgroundImg;
var cat1,cat23,cat4,mouse1,mouse23,mouse4;
var tom,jerry;
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    cat1          = loadAnimation("images/cat1.png");
    cat23         = loadAnimation("images/cat2.png","images/cat3.png");
    cat4          = loadAnimation("images/cat4.png");
    mouse1        = loadAnimation("images/mouse1.png");
    mouse23       = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4        = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tom",cat1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry",mouse1);
    jerry.scale = 0.15;

}

function draw() {
    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2 ){
        tom.velocityX = 0;
        tom.addAnimation("tom1",cat4);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tom1");
        jerry.addAnimation("jerry1",mouse4);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerry1");
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
   if (keyCode === LEFT_ARROW) {
       tom.velocityX = -5;
       tom.addAnimation("tomrunning",cat23);
       tom.changeAnimation("tomrunning");
       jerry.frameDelay = 50;
       jerry.addAnimation("jerryteaseing",mouse23);
       jerry.changeAnimation("jerryteaseing",mouse23);
   }
}
