var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
   
    background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(202, 200, 300, 300);
noStroke(); 
fill(102, 255, 0);
rect(154, 176, 20, 50);
ellipse( 153, 94, 50, 50);
fill(237, 211, 78);
ellipse( 213, 118, 15, 66);
fill(255, 0, 0);
ellipse( 89, 172, 20, 20);
ellipse( 165, 149, 25, 25);
fill(255, 255, 0);
ellipse( 206, 229, 50, 50);
fill(255, 170, 0);
triangle(255, 304, 178, 336, 118, 234);
fill(255, 0, 0);
ellipse( 153, 267, 20, 20);
ellipse( 178, 300, 20, 20);
ellipse( 209, 300, 20, 20);
fill(235, 225, 162);
ellipse(289 , 192, 100, 100);
fill(255, 193, 69);
ellipse(289 , 192, 30, 30);
fill(255, 255, 255);
ellipse(289 , 137, 30, 30);
ellipse(265 , 146, 30, 30);
ellipse(240 , 164, 30, 30);
ellipse(312 , 154, 30, 30);
ellipse(337 , 164, 30, 30);
ellipse(283 , 236, 30, 30);
  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
 