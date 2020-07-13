class MusicaController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this.inputMusica = $('#nome_musica');
        this.inputArtista =  $('#nome_artista');
        this.inputDificuldade = $('#nota_dificuldade');
        this.listaMusicas = new ListaMusicas();
    }

    cria(event){
        let musica = new Musica(
            this.inputMusica.value,
            this.inputArtista.value,
            this.inputDificuldade.value);
        
        this.listaMusicas.add(musica);
        this._clearForm();

        console.log(this.listaMusicas);
    }

    _clearForm() {
        this.inputMusica.value = '';
        this.inputArtista.value = '';

        this.inputMusica.focus();
    }
}