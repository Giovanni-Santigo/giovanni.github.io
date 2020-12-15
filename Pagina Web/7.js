var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
   
rect(0,338, 399, 61);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
line(158, 200, 50, 75);
line(241, 200, 350, 325);
  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);