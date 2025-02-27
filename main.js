const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

////////////////////
// Ja-MON 
// 1. RECTANGULO
// 1.1 Definir el inicio del trazo
ctx.beginPath();

// 1.2 Definir los estilos
ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;

// 1.3 Especificamos la figura
// ctx.rect(x, y, width, height);
ctx.rect(63, 17, 92, 142);

// 1.4 Dibujar el relleno o el contorno
ctx.stroke();


// 2. LINEAS
// 2.1 Definir funcion para hacer lineas
function dibujarLineaRoja(y) {
    // 2.1.1 Definir el inicio del trazo
    ctx.beginPath();
    // 2.1.2 Definir los estilos
    ctx.strokeStyle = "red";
    ctx.lineWidth = 8;

    // 2.1.3 Especificamos la figura
    ctx.moveTo(16, y);
    ctx.lineTo(86, y + 143);

    // 2.1.4 Dibujar el relleno o el contorno
    ctx.stroke();
}

// 3 Dibujar la linea
dibujarLineaRoja(132);
dibujarLineaRoja(160);
dibujarLineaRoja(190);


// 3. CÍRCULO
// 3.1 Definir el inicio del trazo
ctx.beginPath();

// 3.2 Definir los estilos
ctx.fillStyle = 'black';

// 3.3 Especificamos la figura
// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(60, 70, 55, 55, 0, 0, Math.PI);

// 3.4 Dibujar el relleno o el contorno
ctx.fill();


//Hass- Aguacate 🥑 
// Lineas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.moveTo(240, 353);
ctx.lineTo(240, 583);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.moveTo(222, 375);
ctx.lineTo(222, 605);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow";
ctx.moveTo(205, 400);
ctx.lineTo(205, 630);
ctx.stroke(); 

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.moveTo(185, 540);
ctx.lineTo(305, 472);
ctx.stroke(); 
//rectangulo
ctx.save(); // Guarda el estado actual del contexto
ctx.translate(280 + 35 / 2, 380 + 35 / 2); // Mueve el origen al centro del rectángulo
ctx.rotate(45 * Math.PI / 180); // Rota 45 grados en radianes

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.rect(-35 / 2, -35 / 2, 35, 35); // Dibuja el rectángulo centrado en el origen
ctx.fill();

ctx.restore(); // Restaura el contexto a su estado original
// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.rect(280, 380, 35, 35); //agregar rotacion
// ctx.fill();
// //media elipse
// ctx.beginPath();
// ctx.fillStyle = 'red';

// // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
// ctx.ellipse(260, 580, 28, 28, -Math.PI/2, 0, Math.PI);
// ctx.fill();



//Emi-nion 🗣️
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.rect(364, 400, 370, 400);
ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.arc(1, 2, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();



//Pam-bazo 🥪 x 0 y 340
//Pam-bazo 🥪 x 0 y 340
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.rect(90,355,30,155);
ctx.fill();

function dibujarrec1(x,y) {
    // 2.1.1 Definir el inicio del trazo
    ctx.beginPath();
    // 2.1.2 Definir los estilos
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;

    // 2.1.3 Especificamos la figura
    // ctx.rect(x, y + 10,30,154);
    ctx.rect(x, y,30,154);

    // 2.1.4 Dibujar el relleno o el contorno
    ctx.stroke();
    
}


dibujarrec1(20,458);
dibujarrec1(46,423);
dibujarrec1(66,388);

function dibujarline1(y) {
    // 2.1.1 Definir el inicio del trazo
    ctx.beginPath();
    // 2.1.2 Definir los estilos
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;

    // 2.1.3 Especificamos la figura
    // ctx.rect(x, y + 10,30,154);
    ctx.moveTo(60, y);
    ctx.lineTo(60, y+40);

    // 2.1.4 Dibujar el relleno o el contorno
    ctx.stroke();
    
}


dibujarline1(458);





//Go-Diego-go 🐆
// x - 511
// y  - 340

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.moveTo(562, 396);
ctx.lineTo(562, 455);
ctx.stroke();

function dibujarCirculo(y) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.ellipse(562, y, 13, 13, 0, 0, Math.PI*2);
    ctx.stroke();
}

dibujarCirculo(471);
dibujarCirculo(471+50);
dibujarCirculo(471+(50*2));
dibujarCirculo(471+(50*3));

function dibujarLineas(y) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 7;
    ctx.moveTo(562, y);
    ctx.lineTo(562, y+50-21);
    ctx.stroke();
}

dibujarLineas(480);
dibujarLineas(480+50);
dibujarLineas(480+(50*2));


ctx.beginPath();
ctx.strokeStyle = '#red';
ctx.lineWidth = 8;
ctx.rect(600, 562, 90, 90);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.moveTo(562, 480+(50*3));
ctx.lineTo(562, 480+(50*3)+70);
ctx.stroke();





//Fer-rocarril 🚅
//y- 0
////x - 170
function dibujarCirculo(x,y) {
ctx.beginPath();
ctx.fillStyle = 'yello';
ctx.ellipse(x, y, 27 ,28, Math.PI *1.24, 0, Math.PI);
ctx.fill(); 
}

dibujarCirculo (295,65);
dibujarCirculo(275,85);
dibujarCirculo(255,105);
dibujarCirculo(235,125);

ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.ellipse(215, 145, 15, 15, 0, 0, Math.PI*2);
    ctx.stroke();
    
ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.moveTo(215, 165);
    ctx.lineTo(215, 325);
    ctx.stroke();

function dibujarrec(x) {
    ctx.beginPath();

ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;
ctx.rect(x, 240, 15, 15);
ctx.fill();
}
dibujarrec(300);
dibujarrec(260);
dibujarrec(280);


//Emi-nion 🗣️
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.rect(364, 50, 50, 50);
ctx.stroke();






//Zeth-ass 
// 1. Lines
// 1.1 next line = y + 37
// x - 620 to x - 676 to x - 730
// y - 73 to y - 18 to y - 73
// 1.1.1 Make it a function :D
function dibujarLineaBlack(y) {
    // 1.1.2 Define the beginningo the trace
    ctx.beginPath();

    // 1.2 Styles
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;

    // 1.3 Specify the figure 
    ctx.moveTo(390, y);
    ctx.lineTo(426, y - 35);
    ctx.lineTo(460, y);

    // 1.4 Draw the filling or the border
    ctx.stroke();
}

// 1.5 Draw the mfing line

dibujarLineaBlack(50);
dibujarLineaBlack(75);
dibujarLineaBlack(100);

// 2. Circle
// x - 426
// y - 270

// 2.1 Define the beginning of the drawing.
ctx.beginPath();

// 2.2 Define styles
ctx.fillStyle = 'black';

// 2.3 Specify the shape
// ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
ctx.ellipse(426, 170, 30, 30, 0, 0, Math.PI*2);

// 2.4 Draw the filling or border
ctx.fill();

// 3. Rectangles
// 3.1 Rectangle 1
// x - 390
// y - 185

// 3.1.1 Define the beginning of the drawing.
ctx.beginPath();

// 3.1.2 Define styles
ctx.strokeStyle = 'blue';
ctx.lineWidth = 8;

// 3.1.3 Specify the shape
//ctx.rect(x,y,width,height);
ctx.rect(391,185,69,36);

// 3.1.4 Draw the filling or border
ctx.stroke();

// 3.2 Rectangle 2
// x - 595
// y - 335

// 3.2.1 Define the beginning of the drawing.
ctx.beginPath();

// 3.2.2 Define styles
ctx.strokeStyle = 'blue';
ctx.lineWidth = 8;

// 3.2.3 Specify the shape
//ctx.rect(x,y,width,height);
ctx.rect(375,210,100,36);

// 3.2.4 Draw the filling or border
ctx.stroke();

// 3.3 Rectangle 3
// x - 568
// y - 375
 
// 3.3.1 Define the beginning of the drawing.
ctx.beginPath();

// 3.3.2 Define styles
ctx.strokeStyle = 'blue';
ctx.lineWidth = 8;

// 3.3.3 Specify the shape
//ctx.rect(x,y,width,height);
ctx.rect(360,235,130,36);

// 3.3.4 Draw the filling or border
ctx.stroke();


//Becky-G (Becksaster) (b.apellido de Becky) 
//    x  512 - 681       y 0 - 340 

//CIRCULO
//figura
ctx.beginPath();
//estilo
ctx.fillStyle = ("blue");
// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(550, 40, 30, 30, - 10 , 0, Math.PI);
//dibujar
ctx.fill();


// RECTANGULO
ctx.beginPath();
//estilo
ctx.strokeStyle=("yellow"); 
// ctx.rect(x, y, width, height);
ctx.rect(645, 20, 20, 200);

ctx.stroke();

//LINEAS
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="black";
ctx.moveTo(570,80);
ctx.lineTo(570, 246);
ctx.lineTo(600, 270);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="black";
ctx.moveTo(555,85);
ctx.lineTo(555, 251);
ctx.lineTo(585, 276);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="black";
ctx.moveTo(540,90);
ctx.lineTo(540, 256);
ctx.lineTo(570,282);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="black";
ctx.moveTo(525,95);
ctx.lineTo(525, 261);
ctx.lineTo(555,287);
ctx.stroke();