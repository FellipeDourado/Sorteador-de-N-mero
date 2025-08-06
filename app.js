function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let até = parseInt(document.getElementById('até').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNúmeroAleatorio(de, até);

        while (sorteados.includes(numero)) {
            numero = obterNúmeroAleatorio(de, até);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    AtivarBotaoReiniciar(); 
}

function obterNúmeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AtivarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('até').value = '';
    document.getElementById('resultado').innerHTML =
        '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}
