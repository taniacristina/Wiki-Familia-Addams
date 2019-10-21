function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            criaMembros(this);
        }
    };
    xhttp.open("GET", "XML/membros.xml", true);
    xhttp.send();
}

function criaMembros(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("MEMBRO");
    var membros = document.getElementById("conteudo-membros");

    for(var i = 0; i < x.length; i++) {
        
        var tr = document.createElement("tr");
        var tdImg = document.createElement("td");
        var img = document.createElement("img");
        var tdNome = document.createElement("td");

        tdNome.innerHTML = x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue;
        img.src = x[i].getElementsByTagName("IMAGEM")[0].childNodes[0].nodeValue;
        img.width = 90;
        img.height = 130;

        tdImg.appendChild(img);
        tr.appendChild(tdImg);
        tr.appendChild(tdNome);
        membros.appendChild(tr);
    }
}