let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let númeroSecreto = gerarNúmeroAleatório();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

   function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == númeroSecreto) {
     exibirTextoNaTela('h1', 'Acertou!');
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
     let mensagemTentativa = 'Você descobriu o numero secreto com  ${tentativas} ${palavraTentativa}!'; 
     exibirTextoNaTela('p', mensagemTentativa);
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
     if (chute > númeroSecreto) {
    exibirTextoNaTela('p', 'o numero secreto é menor');
     } else {
     exibirTextoNaTela('p', 'o numero secreto é maior');
     }
     tentativas++;
     limparCampo();
  }

   }

  function gerarNúmeroAleatório() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
     return gerarNúmeroAleatório();
     } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
  chute = document.querySelector('input');
  chute.valueOf = '';
}

    function reiniciarJogo() {
    númeroSecreto = gerarNúmeroAleatório();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable',true);
}