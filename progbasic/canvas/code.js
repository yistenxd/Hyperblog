var d = document.getElementById('dibujo');
var lienzo = d.getContext("2d");
//console.log(lienzo);

function dibujar(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

var l =0;
var yi, xf;
while (l < 30) {
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujar("red", 0, yi, xf, 300);
    l++;
} 
for (l = 0; l < 30; l++) {
    xf = 10 * l;
    yi = 10 * (l+1);
    dibujar("red", 300, yi, xf, 0);
}