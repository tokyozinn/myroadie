class PlaylistController {

    constructor(){
        let $ = document.querySelector.bind(document);
    }

    cria(event){
        

        let nota = $('#exampleFormControlSelect1').value;
        alert(nota);
    }
}