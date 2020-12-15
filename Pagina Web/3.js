var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
   
    var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW/2;
var tou = 285;
draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body? 
    fill(122, 5, 99);
    ellipse(200, 140, 118, 118);
    fill(228, 235, 21);
    ellipse(bodyX, bodyY-70, faceW, 47); // face?
    fill(255, 0, 0);
    ellipse(162, tou, 40, 40);
    ellipse(236, tou, 40, 40);
   
};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);