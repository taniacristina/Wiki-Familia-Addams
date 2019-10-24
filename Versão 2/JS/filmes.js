function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var array = JSON.parse(this.responseText);
            criaFilmes(array);
        }
    };
    xhttp.open("GET", "JSON/filmes.json", true);
    xhttp.send();

}

function criaFilmes(arrayJson) {

    var filmes = document.getElementById("corpo");

    for(var i = 0; i < arrayJson.length; i++) {

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

        h2.innerHTML = arrayJson[i].titulo;
        pData.classList.add("centralizar");
        em.innerHTML = arrayJson[i].data;
        pData.appendChild(em);
        img.src = arrayJson[i].imagem;;
        img.width = 200;
        img.height = 300;
        figCaption.innerHTML = arrayJson[i].legenda;;
        figure.appendChild(img);
        figure.appendChild(figCaption);
        pVideo.classList.add("centralizar");
        video.width = 300;
        video.height = 200;
        video.src = arrayJson[i].video;;
        video.setAttribute("controls","controls");
        pVideo.appendChild(video);
        pDescricao.innerHTML = arrayJson[i].descricao;
        pDescricao.classList.add("centralizar");
        h4.innerHTML = "Resumo";
        pResumo.classList.add("justificar");
        pResumo.innerHTML = arrayJson[i].resumo;
        strong.innerHTML = "Personagens principais participantes: ";
        personagens.appendChild(strong);
        personagens.innerHTML = arrayJson[i].personagens;
        a.target = "_blank";
        a.href = arrayJson[i].link;

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