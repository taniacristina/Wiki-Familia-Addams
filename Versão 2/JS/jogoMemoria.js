/** Funções para o cronometro */
var intervalo;

function tempo(op) {
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";		
		s++;
	},1000);
}

function parar() {
	window.clearInterval(intervalo);
}

function limpa() {
	document.getElementById('voltas').innerHTML = "";
}

/** Função para calcular o score */
function controlePontos (){
	var pontos = 0;
	var corretas = 0;
	var totalCliques = 0;

	this.atualizarPontos =  function (){
		var pontosDiv = document.getElementById("pontos");
		pontosDiv.innerHTML =  "Pontos: " + pontos;
	}

	this.incrementaPontos =  function (){
		corretas++;
		totalCliques+=1;
		pontos+= 1;
		if (corretas ==  10){
			parar();
			var hora = document.getElementById("hora").innerHTML;
			var segundo = document.getElementById("segundo").innerHTML;
			var minuto = document.getElementById("minuto").innerHTML;
			var tempo = hora + "h" + minuto + "m" + segundo + "s";
			setCookiesUsuario();
			setCookiesTempo("tempo",tempo);
			alert("Jogo concluído com sucesso! Sua porcentagem foi: " + 
				(corrects/totalCliques)*100 + "%");
		}
	}

	this.decrementaPontos =  function (){
		totalCliques+=1;
	}
}

/** Função para criar o fundo do card */
function cartaEstrutura(img){
	var path_img = 'IMG/'
	var img_fundo  = "fundo-carta.jpg"
	this.img = img;
	this.visible = false;
	this.block = false;

	this.equals =  function (jogoCarta){
		if (this.img.valueOf() == jogoCarta.img.valueOf()){
			return true;
		}
		return false;
	}
	this.pathImagem =  function(){
		return path_img+img;
	}
	this.imgFundo =  function(){
		return path_img+img_fundo;
	}
}

/** Lógica do jogo */
function logica(){
	var primeiraSelecao;
	var segundaSelecao;
	var block = false;
	var eventController = this;

	this.addEventListener =  function (eventName, callback){
		eventController[eventName] = callback;
	};

	this.logicaJogo =  function (carta,callback){
		if (!carta.block && !block) {
			if (primeiraSelecao == null){
				primeiraSelecao = carta;
				carta.visible = true;
			}else if (segundaSelecao == null && primeiraSelecao != carta){
				segundaSelecao = carta;
				carta.visible = true;
			}

			if (primeiraSelecao != null && segundaSelecao != null){
				block = true;
				var timer = setInterval(function(){
					if (segundaSelecao.equals(primeiraSelecao)){
						primeiraSelecao.block = true;
						segundaSelecao.block = true;
						eventController["correct"](); 
					}else{
						primeiraSelecao.visible  = false;
						segundaSelecao.visible  = false;
						eventController["wrong"]();
					}        				  		
					primeiraSelecao = null;
					segundaSelecao = null;
					clearInterval(timer);
					block = false;
					eventController["show"]();
				},1000);
			} 
			eventController["show"]();
		} else {
			alert("Essa peça já foi selecionada"); // Informando que a peça já foi selecionada
		}
	};

}

/** Lógica para criar os cards para o jogo */
function jogoCarta (carta , logica,tabelaPontos){
	var linhas = 4;
	var coluna  = 5;
	this.carta = carta;
	var logicaJogo = logica;
	var controlePontos = tabelaPontos;

	this.limpar = function (){
		var game = document.getElementById("game");
		game.innerHTML = '';
	}

	this.show =  function (){
		this.limpar();
		controlePontos.atualizarPontos();
		var cardCount = 0;
		var game = document.getElementById("game");
		for(var i = 0 ; i < linhas; i++){
			for(var j = 0 ; j < coluna; j++){
				card = carta[cardCount++];
				var cardImage = document.createElement("img");
				if (card.visible){
					cardImage.setAttribute("src",card.pathImagem());
				}else{
					cardImage.setAttribute("src",card.imgFundo());
				}
				cardImage.onclick =  (function(position,cartaJogo) {
					return function() {
						card = carta[position];
						var callback =  function (){
							cartaJogo.show();
						};
						logicaJogo.addEventListener("correct",function (){
							alert("Você acertou!"); // Adicionando mensagem de acerto
							controlePontos.incrementaPontos();
							controlePontos.atualizarPontos();
						});
						logicaJogo.addEventListener("wrong",function (){
							alert("Você errou!"); // Adicionando mensagem de erro
							controlePontos.decrementaPontos();
							controlePontos.atualizarPontos();
						});

						logicaJogo.addEventListener("show",function (){
							cartaJogo.show();
						});

						logicaJogo.logicaJogo(card);
						
					};
				})(cardCount-1,this);
				game.appendChild(cardImage);
			}
			var br = document.createElement("br");
			game.appendChild(br);
		}
	}
}

/** Função para construir os cards do jogo */
function contruirCarta(){
	var arrayImg = new Array ('margaret-alford.jpeg','margaret-alford.jpeg',
		'morticia.jpeg','morticia.jpeg',
		'gomez.jpeg','gomez.jpeg',
		'wandinha.jpeg','wandinha.jpeg',
		'feioso.png','feioso.png',
		'fester.jpeg','fester.jpeg',
		'primo-coisa.png','primo-coisa.png',
		'vovo-addams.jpg','vovo-addams.jpg',
		'lurch.jpg','lurch.jpg',
		'Lumpy.jpg','Lumpy.jpg');

	this.criaCarta =  function (){
		misturarCartas();
		cartas  = construaCartas();
		cartasJogo =  new jogoCarta(cartas, new logica(), new controlePontos())
		cartasJogo.limpar();
		return cartasJogo;
	}

	var misturarCartas = function(){
		var i = arrayImg.length, j, tempi, tempj;
		if ( i == 0 ) return false;
		while ( --i ) {
			j = Math.floor( Math.random() * ( i + 1 ) );
			tempi = arrayImg[i];
			tempj = arrayImg[j];
			arrayImg[i] = tempj;
			arrayImg[j] = tempi;
		}
	}

	var construaCartas =  function (){
		var cont = 0;
		cartas =  new Array();
		for (var i = arrayImg.length - 1; i >= 0; i--) {
			carta =  new cartaEstrutura(arrayImg[i]);
			cartas[cont++] = carta;
		};
		return cartas;
	}
}

/** Funções do ranking */

var cookiesUsuario = "";
var cookiesTempo = "";
var expires = "expires=Thu, 30 Jan 2020 00:00:00 UTC";

// Função para setar o nome do usuario nos cookies
function setCookiesUsuario() {
	cookiesUsuario += getCookies("username") + ",";
}

// Função para setar o tempo dos usuarios nos cookies
function setCookiesTempo(cookieName, cookieValue) {
	var expires = "expires=Thu, 30 Jan 2020 00:00:00 UTC";
	cookiesTempo += getCookies(cookieName) + "," + cookieValue;
	document.cookie = cookieName + "=" + cookiesTempo + "; " + expires + "; path=/";
}

// Função para obter os cookies
function getCookies(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Função para criar o ranking
function criaRanking() {
	var divRanking = document.getElementById("ranking");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var thNome = document.createElement("th");
	var thTempo = document.createElement("th");
	var tbody = document.createElement("tbody");
	var tdTempo = document.createElement("td");
	var br = document.createElement("br");
	thNome.innerText = "Nome";
	thTempo.innerText = "Tempo";

	var usuarios = cookiesUsuario.split(",");
	var tempos = cookiesTempo.split(",");

	for(var i = 0; i < usuarios.length; i++){
		var tr = document.createElement("tr");
		var tdNome = document.createElement("td");
		var tdTempo = document.createElement("td");
		tdTempo.innerText = tempos[i];
		tdNome.innerText =  usuarios[i];
		tr.appendChild(tdNome);
		tr.appendChild(tdTempo);
		tbody.appendChild(tr);
	}

	thead.appendChild(thNome);
	thead.appendChild(thTempo);
	table.appendChild(thead);
	table.appendChild(tbody);
	divRanking.appendChild(table);
}

/** Função de clicar do botão reiniciar */
function reiniciar() {
	var construirCarta =  new contruirCarta();
 	cartaJogo = construirCarta.criaCarta();
	cartaJogo.show();
	parar();
	tempo();	
}

/** Função para iniciar o jogo, ao carregar a pagina */
function iniciar() {
	var jogador = document.getElementById("jogador");
	var jogo = document.getElementById("jogo");
	var nomeUsuario = document.getElementById("nome-usuario");
	var ranking = document.getElementById("ranking");

	// setCookiesUsuario("username",nomeUsuario.value);
	document.cookie = "username=" + nomeUsuario.value + "; " + expires + "; path=/";
	jogador.setAttribute("style","display:none");
	jogo.setAttribute("style","display: block");
	ranking.setAttribute("style","display: block");
	criaRanking();

	var construirCarta =  new contruirCarta();
 	cartaJogo = construirCarta.criaCarta();
	cartaJogo.show();
	tempo();
}


