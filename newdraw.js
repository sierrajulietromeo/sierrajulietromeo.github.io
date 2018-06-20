wvar faces;
var baddies;
var goodies;




function preload() {
  img1 = loadImage("smiling_face.png");
  img2 = loadImage("weary_face.png");

} //end preload


function setup() {
  
  createCanvas(500, 500);
  background (0);
  
  //goodies = new Group();
  //baddies = new Group();
  faces = new Group();
  
  var scared = createSprite(random(26,474), random(26,474), 45, 45);
  scared.addImage("coolEmoji",img2);
  scared.setCollider("circle",0,0,25);
  
  
  for(var i = 0;i < 2;i++) {
  
  var cool = createSprite(random(26,474), random(26,474), 50, 50);
  cool.addImage("coolEmoji",img1);
  cool.setCollider("circle",0,0,25);
  cool.setSpeed(random(2,3), random(0, 360));
  
  //goodies.add(cool);
  //baddies.add(scared);
  faces.add(cool);
  faces.add(scared);
  
    
  } // end for
  
  
  
} // end setup


function draw() {

  background(0);
  
  //all sprites bounce at the screen edges
  for(var i=0; i<allSprites.length; i++) {
  var emojis = allSprites[i];
  if(emojis.position.x<23) {
    emojis.position.x = 24;
    emojis.velocity.x = abs(emojis.velocity.x);
  }
  
  if(emojis.position.x>width-25) {
    emojis.position.x = width-24;
    emojis.velocity.x = -abs(emojis.velocity.x);
    }
  
  if(emojis.position.y<23) {
    emojis.position.y = 24;
    emojis.velocity.y = abs(emojis.velocity.y);
  }
  
  if(emojis.position.y>height-23) {
    emojis.position.y = height-24;
    emojis.velocity.y = -abs(emojis.velocity.y);
    } 
  } // end for
  
  //keyboard movement
  
 
  
  
  
  
  faces.bounce(faces);
  //baddies.bounce(baddies);
  
  
	
	drawSprites();
	
    
} // end draw