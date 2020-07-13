class MusicaView {

    constructor(id_html) {

        this.id_html = id_html;
    }

    template(model) {

        return `
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Música</th>
                    <th scope="col">Artista</th>
                    <th scope="col">Dificuldade</th>
                </tr>
            </thead>
            <tbody>
                ${model.listaMusicas.map(m => {

                    return `
                        <tr>
                            <td>${m.nome}</td>
                            <td>${m.artista.nome}</td>
                            <td>${m.dificuldade}</td>
                        </tr>
                    `
                }).join('')}

            </tbody>
        </table>`
    }

    update(model){

        this.id_html.innerHTML = this.template(model);
    }
}