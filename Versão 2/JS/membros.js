function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var array = JSON.parse(this.responseText);
            criaMembros(array);
        }
    };
    xhttp.open("GET", "JSON/membros.json", true);
    xhttp.send();
}

function criaMembros(arrayJson) {

    var membros = document.getElementById("conteudo-membros");

    for(var i = 0; i < arrayJson.length; i++) {
        
        var tr = document.createElement("tr");
        var tdImg = document.createElement("td");
        var img = document.createElement("img");
        var tdNome = document.createElement("td");

        tdNome.innerHTML = arrayJson[i].nome;
        img.src = arrayJson[i].imagem;
        img.width = 90;
        img.height = 130;

        tdImg.appendChild(img);
        tr.appendChild(tdImg);
        tr.appendChild(tdNome);
        membros.appendChild(tr);
    }
}