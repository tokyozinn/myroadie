class Musica {

    constructor(nome_musica, artista, dificuldade, data) {
        if (nome_musica == '' || artista == '' || data == '') {
            var msg = "Campos não podem estar em branco";
            throw new Error(msg);
            return;
        } else {
            this.nome = nome_musica;
            this.artista = new Artista(artista);
            this.dificuldade = dificuldade;
            this.data = data;
        }
    }

}