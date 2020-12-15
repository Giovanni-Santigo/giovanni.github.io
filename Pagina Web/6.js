var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
    fill(0, 34, 255);
background(217, 242, 242);

fill(255, 255, 255);
rect(60, 150, 280, 207);

for (var j=4; j<11; j++){// ladrillos.
    for ( var i = 2; i< 11 ;i++){
    image(getImage("cute/RampSouth"), i*30, j*30, 41, 57);
} 
}
fill(120, 80, 19);//puertaaa
rect(180, 280, 40, 77);

fill(174, 180, 214);//techo
triangle(200, 28, 350, 150, 50, 150);


for (var z =1; z<3; z++) {
    for (var x = 9; x<10; x++){
image(getImage("cute/WindowTall"),  z*120,x*20, 45, 57);
}
}

var im = "cute/GrassBlock";

 for ( var a=0; a<20; a++){
     image(getImage(im),a*50,350, 50, 50);
 }
 
 
 
image(getImage("cute/TreeTall"),  11,257, 45, 104);
image(getImage("cute/TreeTall"),  353,257, 45, 104);


        }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);