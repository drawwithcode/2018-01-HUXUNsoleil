function preload(){
  // put preload code here

}

function setup() {
createCanvas(800, 800);

}

function draw() {
  background(120,120,120,100);

  push();
    translate(mouseX/2,mouseY/2+400);
    fill(175,175,175);
    arc(0, 0, 50, 50, 0, 180, PI);
    fill(0,0,0);
    arc(0, 0, 25, 25, 0, 180, PI);
    fill(255,255,255);
    arc(5, 5, 12, 12, 0, 180, PI);
    pop();
    push();
      translate(mouseX/2+805/2,mouseY/2+805/2);
      fill(175,175,175);
      arc(0, 0, 50, 50, 0, 180, PI);
      fill(0,0,0);
      arc(0, 0, 25, 25, 0, 180, PI);
      fill(255,255,255);
      arc(5, 5, 12, 12, 0, 180, PI);
      pop();

 stroke(0);
 // xP1, yP1, xA1, yA1, xA2, yA2, xP2, yP2
 bezier(0,800,mouseX,mouseY,mouseX+5,mouseY+5,800,800)
 push();
   translate(mouseX/2+805/4,mouseY/2+805/2);
   fill(230,97,40);
   rotate(mouseX / 100);
   if(mouseY>=100){

   polygon(0,0,4000/mouseY,3);
   }
   else{
     polygon(0,0,40,3);
   }
   pop();
}
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
