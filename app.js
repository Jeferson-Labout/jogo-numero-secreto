
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagenInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);

}

exibirMensagenInicial();

function verificarChute() {
    let numeroInformado = document.querySelector('input').value;
 
    if(numeroInformado == numeroAleatorio){

        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto ${numeroAleatorio} com ${tentativa} ${palavraTentativa} !`;
       
        exibirTextoNaTela('p', ` ${mensagemTentativa} `);

        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{

        if(numeroInformado > numeroAleatorio){
          
            exibirTextoNaTela('p', `O número secreto é menor !`); 
        
        } else {

            exibirTextoNaTela('p', `O número secreto é maior !`); 
        }

        tentativa ++;
        limpaCampo ();
    }
}

function gerarNumeroAleatorio() {

    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1 );

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {

   return gerarNumeroAleatorio(); 

     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }

   }

function limpaCampo() {
    numeroInformado = document.querySelector('input');
    numeroInformado.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limpaCampo();
    tentativa = 1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}