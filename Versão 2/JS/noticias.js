function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var array = JSON.parse(this.responseText);
            criaNoticias(array);
        }
    };
    xhttp.open("GET", "JSON/noticias.json", true);
    xhttp.send();

}

function criaNoticias(arrayJson) {
    
    var noticias = document.getElementById("conteudo-noticias");

    for(var i = 0; i < arrayJson.length; i++) {

        var h2 = document.createElement("h2");
        var em = document.createElement("em");
        var p = document.createElement("p");
        var a = document.createElement("a");
        var br = document.createElement("br");

        h2.innerHTML = arrayJson[i].titulo;
        em.innerHTML = arrayJson[i].data;
        p.innerHTML = arrayJson[i].resumo;
        a.href = arrayJson[i].link;
        a.innerHTML = "Leia mais sobre a noticia";

        noticias.appendChild(h2);
        noticias.appendChild(em);
        noticias.appendChild(p);
        noticias.appendChild(a);
        noticias.appendChild(br);
    }
}
