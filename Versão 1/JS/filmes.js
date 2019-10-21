function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            criaFilmes(this);
        }
    };
    xhttp.open("GET", "XML/filmes.xml", true);
    xhttp.send();

}

function criaFilmes(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("FILME");
    var filmes = document.getElementsByTagName("body");

    for(var i = 0; i < x.length; i++) {
        // console.log(x[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue);
        // console.log(x[i].getElementsByTagName("DATA")[0].childNodes[0].nodeValue);
        // console.log(x[i].getElementsByTagName("IMAGEM")[0].childNodes[0].nodeValue);
        // console.log(x[i].getElementsByTagName("DESCRICAO")[0].childNodes[0].nodeValue);
        // console.log(x[i].getElementsByTagName("RESUMO")[0].childNodes[0].nodeValue);
        // console.log(x[i].getElementsByTagName("PERSONAGENS")[0].childNodes[0].nodeValue);
        // console.log(x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue);

        var section = document.createElement("section");
        var h2 = document.createElement("h2");
        var pData = document.createElement("p");
        var em = document.createElement("em");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figCaption = document.createElement("figcaption");
        var h4 = document.createElement("Resumo");
        var pResumo = document.createElement("p");
        var personagens = document.createComment("p");
        var strong = document.createElement("strong");
        var a = document.createElement("a");

        h2.innerHTML = x[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue;
        pData.class

        filmes.appendChild(section);
        
    }
}