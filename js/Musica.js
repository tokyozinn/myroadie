class Musica {

    constructor(nome_musica, artista, dificuldade) {

        this.nome = nome_musica;
        this.artista = new Artista(artista);
        this.dificuldade = dificuldade;
        this.data = new Date();

    }

}