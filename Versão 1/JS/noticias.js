function iniciar() {
    carregarDados();
}

function carregarDados() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
    };
    xhttp.open("GET", "XML/noticias.xml", true);
    xhttp.send();

}

function criaNoticias(xml) {
    console.log(xml);
}