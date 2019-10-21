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
    var filmes = document.getElementById("corpo");

    for(var i = 0; i < x.length; i++) {

        var section = document.createElement("section");
        var h2 = document.createElement("h2");
        var pData = document.createElement("p");
        var em = document.createElement("em");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figCaption = document.createElement("figcaption");
        var video = document.createElement("video");
        var pVideo = document.createElement("p");
        var pDescricao = document.createElement("p");
        var h4 = document.createElement("Resumo");
        var pResumo = document.createElement("p");
        var personagens = document.createElement("p");
        var strong = document.createElement("strong");
        var a = document.createElement("a");

        h2.innerHTML = x[i].getElementsByTagName("TITULO")[0].childNodes[0].nodeValue;
        pData.classList.add("centralizar");
        em.innerHTML = x[i].getElementsByTagName("DATA")[0].childNodes[0].nodeValue;
        pData.appendChild(em);
        img.src = x[i].getElementsByTagName("IMAGEM")[0].childNodes[0].nodeValue;
        img.width = 200;
        img.height = 300;
        figCaption.innerHTML = x[i].getElementsByTagName("LEGENDA")[0].childNodes[0].nodeValue;
        figure.appendChild(img);
        figure.appendChild(figCaption);
        pVideo.classList.add("centralizar");
        video.width = 300;
        video.height = 200;
        video.src = x[i].getElementsByTagName("VIDEO")[0].childNodes[0].nodeValue;
        pVideo.appendChild(video);
        pDescricao.innerHTML = x[i].getElementsByTagName("DESCRICAO")[0].childNodes[0].nodeValue
        pDescricao.classList.add("centralizar");
        h4.innerHTML = "Resumo";
        pResumo.classList.add("justificar");
        pResumo.innerHTML = x[i].getElementsByTagName("RESUMO")[0].childNodes[0].nodeValue;
        strong.innerHTML = "Personagens principais participantes: ";
        personagens.appendChild(strong);
        personagens.innerHTML = x[i].getElementsByTagName("PERSONAGENS")[0].childNodes[0].nodeValue;
        a.target = "_blank";
        a.href = x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue;

        section.appendChild(h2);
        section.appendChild(pData);
        section.appendChild(figure);
        section.appendChild(pVideo);
        section.appendChild(pDescricao);
        section.appendChild(h4);
        section.appendChild(pResumo);
        section.appendChild(personagens);
        section.appendChild(a);
        filmes.appendChild(section);

    }
}