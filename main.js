const form = document.getElementById("form-contato")
const imgPerfil = '<img src="./images/contact.png" alt="emoji de contato" />';

let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('numero-contato');

    let linha = '<str>';

    linha += `<td>${inputNumContato.value != "" ? imgPerfil : imgPerfil} </td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumContato.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}