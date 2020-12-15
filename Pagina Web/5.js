var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
    fill(0, 34, 255);
textSize(30);
text("Donitas Doña Meche", 60, 30);
textSize(10);
fill(255, 0, 43);
text("Te apuesto a que no sabes que es lo dulce, ven y conocenos.", 59, 87);
noStroke();
fill(235, 77, 29);
ellipse(203,229,262,212); 
ellipse(203,229,262,212); 
fill(255, 255, 255);
ellipse(203,229,156,134); 

ellipse(81,229,58,52);
ellipse(91,271,58,52);
      }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);