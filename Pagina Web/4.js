var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
   
    //Este es el código para hacer una librereria y poner libros y sus estrellas.

var book = {
    title: ["Programación","Fabulas","Terror","Fantasia","Ciencia","Matemáticas","Computación","Video juegos"],
    stars: 4
};
//Código para que se pongan 2 repisas en el lienzo.
for (var c =0; c<200; c+=94){
    for (var x =0; x === 0; x+=94){
        fill(173, 117, 33);
        rect(x, c*2.13+120, width, 11);
    }
}
//Código para poder tener 2 filas de libros. 
for ( var j = 0; j <200 ; j++){
    for (var x = 10; x < 300; x+=94){
        fill(255, 214, 255);random(1,300);
        rect(x, j*200+20, 90, 100);
    }
}

//Código de maximas estrellas
for(var q = 0; q < book.stars; q++){
for (var i = 0; i < book.stars; i++) {
    image(getImage("cute/Star"),100*q+10 +i * 18, 90, 20, 30);
}
}
//Código de minimas estrellas
for(var q = 0; q < book.stars; q++){
for (var i = 2; i < book.stars; i++) {
    image(getImage("cute/Star"),100*q+10 +i * 18, 290, 20, 30);
}
}
var t = 231;
fill(0, 0, 0);
text(book.title[0], 15, 29, 70, 100);
text(book.title[4], 109, 29, 70, 100);
text(book.title[5], 204, 29, 70, 100);
text(book.title[6], 298, 29, 70, 100);
text(book.title[2], 15, t, 70, 100);
text(book.title[3], 109, t, 70, 100);
text(book.title[1], 204, t, 70, 100);
text(book.title[7], 298, t, 70, 100);

  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);