class MusicaController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this.inputMusica = $('#nome_musica');
        this.inputArtista =  $('#nome_artista');
        this.inputDificuldade = $('#nota_dificuldade');
    }

    cria(event){
        let nota = this.inputMusica.value;
        alert(nota);
    }
}