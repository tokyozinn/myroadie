class NewSongController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputMusica = $('#nome_musica');
        this.inputArtista = $('#nome_artista');
        this.inputData = $('#data-desejo');
        this.inputDificuldade = 'c';
        this.listaMusicas = new WishList();
        this.wishListView = new WishListView($('#wishlist-tabela'));
        this.pesquisa = $('#filter');

        this.wishListView.update(this.listaMusicas);
    }

    cria(event) {
        let musica = new Musica(
            this.inputMusica.value,
            this.inputArtista.value,
            this.inputDificuldade,
            new Date(this.inputData.value)
            );

        console.log(musica);

        this.listaMusicas.add(musica);
        this.wishListView.update(this.listaMusicas);
        this._clearForm();
    }

    _clearForm() {
        this.inputMusica.value = '';
        this.inputArtista.value = '';

        this.inputMusica.focus();
    }

    procura() {
        var campoBusca = this.pesquisa.value;
        var musicas = this.listaMusicas.wishList;
        console.log('fui chamado!')
        var linhasTabela = document.querySelectorAll(".row-tabela");
        for(var i = 0; i < musicas.length; i++){
            var m = musicas[i].nome;
            var a = musicas[i].artista.nome;
            var exp = new RegExp(campoBusca, "i");
            if(!exp.test(m) && !exp.test(a)){
                this.wishListView.hide_element(linhasTabela[i]);
            }else{
                this.wishListView.unhide_element(linhasTabela[i]);
            }
        }      
    };
}
