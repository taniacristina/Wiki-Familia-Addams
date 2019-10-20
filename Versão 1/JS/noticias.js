function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            criaNoticias(this);
        }
    };
    xhttp.open("GET", "XML/noticias.xml", true);
    xhttp.send();

}

function criaNoticias(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("NOTICIA");
    var noticias = document.getElementById("conteudo-noticias");

    for(var i = 0; i < x.length; i++) {

        var h2 = document.createElement("h2");
        var em = document.createElement("em");
        var p = document.createElement("p");
        var a = document.createElement("a");
        var br = document.createElement("br");

        h2.innerHTML = x[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue;
        em.innerHTML = x[i].getElementsByTagName("DATA")[0].childNodes[0].nodeValue;
        p.innerHTML = x[i].getElementsByTagName("RESUMO")[0].childNodes[0].nodeValue;
        a.href = x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue;
        a.innerHTML = "Leia mais sobre a noticia";

        noticias.appendChild(h2);
        noticias.appendChild(em);
        noticias.appendChild(p);
        noticias.appendChild(a);
        noticias.appendChild(br);
    }
}
