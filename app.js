var exibeListaFilmes = document.getElementById("listaFilmes");
var listaNomeFilmes = ['Quarto de Guerra',
    'Superação',
    'Até o último Homem',
    'Milagres do Paraíso',
    'Milagre na Cela 7',
    'Mais que Vencedores'
];
var listaImagemFilmes = ["https://filmegospelhd.com/wp-content/uploads/2021/06/91jr985qa7L-682x1024.jpg",
    "https://filmegospelhd.com/wp-content/uploads/2021/06/22527-cartaz.jpg",
    'https://filmegospelhd.com/wp-content/uploads/2021/09/Captura-de-Tela-2021-09-07-a%CC%80s-15.21.49.png',
    'https://filmegospelhd.com/wp-content/uploads/2021/06/milagres-do-paraiso-filme-gospel.jpg',
    'https://filmegospelhd.com/wp-content/uploads/2021/06/milagre-na-cela-7-filme-gospel.jpg',
    'https://filmegospelhd.com/wp-content/uploads/2021/06/mais-que-vencedores-filme-gospel.jpg'
];
var listaLinkFilmes = ['https://youtu.be/DVlAQOOaIhE?list=PLvevpZqPsN9rCLdGa0g002DfLl-jNyUfv',
    'https://youtu.be/iwSNz-o3lL4?list=PLvevpZqPsN9o4REx8iuTMnRdqQ47upuYs',
    'https://youtu.be/0fc-oJMRtKc?list=PLvevpZqPsN9rRG-xZoI2gAV52WBq9UKmo',
    'https://youtu.be/ev77R-Ajpok?list=PLvevpZqPsN9pTaKTByGSnVSL08EgkOWj5',
    'https://youtu.be/STPDPCNa3Ew?list=PLvevpZqPsN9pplE64HUlUJQM44F_bRxct',
    'https://youtu.be/6-zj7L0Zs7E?list=PLvevpZqPsN9pT8_Dh6hwDlXR1wT2R6C57'
];

function adicionarFilme() {
    var imagemFilme = document.getElementById("imagemFilme").value;
    var nomeFilme = document.getElementById("nomeFilme").value;
    var linkFilme = document.getElementById("linkFilme").value;
    if (imagemFilme.endsWith(".jpg") || imagemFilme.endsWith(".png")) {
        var imagemFilmeNovo = "<img src=" + imagemFilme + ">";
        if (listaNomeFilmes.indexOf(nomeFilme) >= 0 || listaImagemFilmes.indexOf(imagemFilmeNovo) >= 0) {
            alert("O filme já existe, escolha outro!");
        } else {
            listaImagemFilmes.push(imagemFilmeNovo);
            listaNomeFilmes.push(nomeFilme);
            listaLinkFilmes.push(linkFilme);
            document.getElementById("imagemFilme").value = ""
            document.getElementById("nomeFilme").value = ""
            document.getElementById("linkFilme").value = ""
        }
    } else {
        console.error("Endereço incorreto");
        alert("Informe o endereço de uma imagem JPG!");
    }
    listarFilmes();
}

function listarFilmes() {
    exibeListaFilmes.innerHTML = "";
    for (var i = 0; i < listaNomeFilmes.length; i++) {
        var nome = listaNomeFilmes[i];
        console.log(nome)
        exibeListaFilmes.innerHTML += '<a target=_blank href=' + listaLinkFilmes[i] + ' title=' + '"' + nome + '"' + '>' + '<img src=' + listaImagemFilmes[i] + '>'
    }
}

function removerFilme(nome) {
    var nomeFilme = document.getElementById("nomeFilme").value;
    console.log(listaNomeFilmes.indexOf(nomeFilme));
    if (listaNomeFilmes.indexOf(nomeFilme) >= 0) {
        indice = listaNomeFilmes.indexOf(nomeFilme);
        listaNomeFilmes.splice(indice, 1);
        listaImagemFilmes.splice(indice, 1);
        listaLinkFilmes.splice(indice, 1);
        alert("Filme excluído com sucesso!")
    } else {
        alert("Filme não encontrado!")
    }
    listarFilmes();
}

listarFilmes();