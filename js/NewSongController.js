class NewSongController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputMusica = $('#nome_musica');
        this.inputArtista = $('#nome_artista');
        this.inputDificuldade = $('#nota_dificuldade');
        this.listaMusicas = new ListaMusicas();
        this.musicasView = new MusicaView($('#tabela-musica'));
        this.pesquisa = $('#filter');

        this.musicasView.update(this.listaMusicas);
    }

    cria(event) {
        let musica = new Musica(
            this.inputMusica.value,
            this.inputArtista.value,
            this.inputDificuldade.value);

        this.listaMusicas.add(musica);
        this.musicasView.update(this.listaMusicas);
        this._clearForm();
    }

    _clearForm() {
        this.inputMusica.value = '';
        this.inputArtista.value = '';

        this.inputMusica.focus();
    }

    procura() {
        var campoBusca = this.pesquisa.value;
        var musicas = this.listaMusicas.musicas;
        var linhasTabela = document.querySelectorAll(".row-tabela");
        for(var i = 0; i < musicas.length; i++){
            var m = musicas[i].nome;
            var exp = new RegExp(campoBusca, "i");
            if(!exp.test(m)){
                this.musicasView.hide_element(linhasTabela[i]);
            }else{
                this.musicasView.unhide_element(linhasTabela[i]);
            }
        }      
    };
}