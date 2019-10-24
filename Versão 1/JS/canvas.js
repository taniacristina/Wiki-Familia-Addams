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
ctx2.moveTo(0,canvas.height);
ctx2.lineTo(20,0);
ctx2.stroke();
ctx2.moveTo(20,0);
ctx2.lineTo(40,canvas.height);
ctx2.stroke();
ctx2.moveTo(10,50);
ctx2.lineTo(30,50);
ctx2.stroke();

// Desenhando o primeiro D
ctx2.beginPath();
ctx2.arc(50,50,40,-1.55, (0.5)*Math.PI);
ctx2.stroke();
ctx2.moveTo(50,10);
ctx2.lineTo(50,(canvas.height - 10));
ctx2.stroke();

// Desenhando o segundo D
ctx2.beginPath();
ctx2.arc(100,50,40,-1.55, (0.5)*Math.PI);
ctx2.stroke();
ctx2.moveTo(100,10);
ctx2.lineTo(100,(canvas.height - 10));
ctx2.stroke();

// Desenhando o segundo A
ctx2.moveTo(140,canvas.height);
ctx2.lineTo(170,0);
ctx2.stroke();
ctx2.moveTo(170,0);
ctx2.lineTo(200,canvas.height);
ctx2.stroke();
ctx2.moveTo(155,50);
ctx2.lineTo(185,50);
ctx2.stroke();

// Desenhando o M
ctx2.moveTo(210,canvas.height);
ctx2.lineTo(210,0);
ctx2.stroke();
ctx2.moveTo(210,0);
ctx2.lineTo(230,(canvas.height - 50));
ctx2.stroke();
ctx2.moveTo(230,(canvas.height - 50));
ctx2.lineTo(250,0);
ctx2.stroke();
ctx2.moveTo(250,0);
ctx2.lineTo(250,canvas.height);
ctx2.stroke();

// Desenhando o S
ctx2.moveTo(270,10);
ctx2.lineTo(340,10);
ctx2.stroke();
ctx2.moveTo(270,10);
ctx2.lineTo(270,50);
ctx2.stroke();
ctx2.moveTo(270,50);
ctx2.lineTo(330,50);
ctx2.stroke();
ctx2.moveTo(330,50);
ctx2.lineTo(330,canvas.height - 10);
ctx2.stroke();
ctx2.moveTo(330,canvas.height - 10);
ctx2.lineTo(270,canvas.height - 10);
ctx2.stroke();


