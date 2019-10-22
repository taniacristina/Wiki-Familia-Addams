// Não pode usar métodos prontos como filltext, strokeText, text etc
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/** Desenhando a palavra Familia */
// Desenhando o F
ctx.moveTo(0,0);
ctx.lineTo(0, canvas.height);
ctx.stroke();
ctx.moveTo(0,0);
ctx.lineTo(60,0);
ctx.stroke();
ctx.moveTo(0,40);
ctx.lineTo(40,40);
ctx.stroke();

// Desenhando o primeiro A
ctx.moveTo(50,100);
ctx.lineTo(80, 0);
ctx.stroke();
ctx.moveTo(110,100);
ctx.lineTo(80, 0);
ctx.stroke();
ctx.moveTo(65,50);
ctx.lineTo(95,50);
ctx.stroke();

// Desenhando o M
ctx.moveTo(120,0);
ctx.lineTo(120,canvas.height);
ctx.stroke();
ctx.moveTo(120,0);
ctx.lineTo(140,(canvas.height - 50));
ctx.stroke();
ctx.moveTo(140,(canvas.height - 50));
ctx.lineTo(160,0);
ctx.stroke();
ctx.moveTo(160,0);
ctx.lineTo(160,100);
ctx.stroke();

// Desenhando o primeiro I
ctx.moveTo(180,0);
ctx.lineTo(180,canvas.height);
ctx.stroke();

// Desenhando o L
ctx.moveTo(200,0);
ctx.lineTo(200,canvas.height);
ctx.stroke();
ctx.moveTo(200,canvas.height);
ctx.lineTo(240,canvas.height);
ctx.stroke();

// Desenhando o segundo I
ctx.moveTo(250,0);
ctx.lineTo(250,canvas.height);
ctx.stroke();

// Desenhando o segundo A
ctx.moveTo(260,canvas.height);
ctx.lineTo(280,0);
ctx.stroke();
ctx.moveTo(280,0);
ctx.lineTo(300,canvas.height);
ctx.stroke();
ctx.moveTo(290,50);
ctx.lineTo(270,50);
ctx.stroke();

/** Desenhando a palavra Addams */
var canvas2 = document.getElementById("segundo-canvas");
var ctx2 = canvas2.getContext("2d");

// Desenhando a letra A
ctx2.moveTo(330,canvas.height);
ctx2.lineTo(350,0);
ctx2.stroke();
ctx2.moveTo(350,0);
ctx2.lineTo(370,canvas.height);
ctx2.stroke();
ctx2.moveTo(340,50);
ctx2.lineTo(360,50);
ctx2.stroke();

// Desenhando o primeiro D
ctx2.beginPath();
ctx2.arc(380,50,40,-1.55, (0.5)*Math.PI);
ctx2.stroke();
ctx2.moveTo(380,10);
ctx2.lineTo(380,(canvas.height - 10));
ctx2.stroke();

// Desenhando o segundo D
ctx2.beginPath();
ctx2.arc(430,50,40,-1.55, (0.5)*Math.PI);
ctx2.stroke();
ctx2.moveTo(430,10);
ctx2.lineTo(430,(canvas.height - 10));
ctx2.stroke();

// Desenhando o segundo A
ctx2.moveTo(470,canvas.height);
ctx2.lineTo(490,0);
ctx2.stroke();
ctx2.moveTo(490,0);
ctx2.lineTo(520,canvas.height);
ctx2.stroke();
ctx2.moveTo(480,50);
ctx2.lineTo(505,50);
ctx2.stroke();

// Desenhando o primeiro M
ctx2.moveTo(530,canvas.height);
ctx2.lineTo(530,0);
ctx2.stroke();
ctx2.moveTo(530,0);
ctx2.lineTo(550,(canvas.height - 50));
ctx2.stroke();
ctx2.moveTo(550,(canvas.height - 50));
ctx2.lineTo(570,0);
ctx2.stroke();
ctx2.moveTo(570,0);
ctx2.lineTo(570,canvas.height);
ctx2.stroke();

// Desenhando o S
ctx2.moveTo(580,10);
ctx2.lineTo(640,10);
ctx2.stroke();
ctx2.moveTo(580,10);
ctx2.lineTo(580,50);
ctx2.stroke();
ctx2.moveTo(580,50);
ctx2.lineTo(640,50);
ctx2.stroke();
ctx2.moveTo(640,50);
ctx2.lineTo(640,canvas.height - 10);
ctx2.stroke();
ctx2.moveTo(640,canvas.height - 10);
ctx2.lineTo(580,canvas.height - 10);
ctx2.stroke();


