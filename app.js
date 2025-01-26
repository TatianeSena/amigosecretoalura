
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim();

    if (amigoNome === '') {
        alert('Insira um nome');
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigoNome;
    listaAmigos.appendChild(novoAmigo);

    amigoInput.value = '';
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = listaAmigos.getElementsByTagName('li');

    if (amigos.length === 0) {
        alert('Nenhum amigo adicionado para sortear');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}



