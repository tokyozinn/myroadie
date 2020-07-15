class WishListView {

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
                    <th scope="col">Data</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                ${model.wishList.map(m => {

                    return `
                        <tr class="row-tabela">
                            <td class="nome-musica">${m.nome}</td>
                            <td class="nome-artista">${m.artista.nome}</td>
                            <td class="dificuldade-musica">${DateHelper.dateToText(m.data)}</td>
                        </tr>
                    `
            }).join('')}
            </tbody>
        </table>
        `
    }

    update(model){
        this.id_html.innerHTML = this.template(model);
    }

    hide_element(e){
        e.classList.add("d-none");
    }

    unhide_element(e){
        e.classList.remove("d-none");
    }
}