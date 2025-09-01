//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Por favor, insira um nome!');
        return;
    } else {
        amigos.push(amigo.value);
    }

    atualizarLista();
    amigo.value = '';
}

function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let amigo of amigos) {
        listaHTML.innerHTML += `<li class='amigo-item'>${amigo}</li>`;
    }
}

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert('Adicione pelo menos 1 nome à lista!');
            return;
        }

        indiceSorteado = Math.floor(Math.random() * amigos.length);

        nomeSorteado = amigos[indiceSorteado];

        let resultadoHTML = document.getElementById('resultado');
        resultadoHTML.innerHTML = `<p>O amigo sorteado foi: <strong class=nome-sorteado>${nomeSorteado}</strong>`
    }