console.log('Oi');

function aceito() {

    alert('clicou aceito!');

    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        category: 'home',
        action: 'clicou',
        label: 'botao:aceito-termos'
    });

}

var elemento = document.getElementsByClassName('botao-aceito');

function pegarValorDoCategory() {
    const meuValor = document.getElementById('botao-aceito');
    console.log(meuValor)
    //const valorDoAtributo = meuValor.getAttribute('data-gtm-element');
    //console.log(valorDoAtributo);
}

function naoaceito() {
    
    alert('clicou não aceito!');

    //var gtmCategory = document.getElementsByTagName('data-gtm-category');
    //var gtmActio = document.getElementsByTagName('data-gtm-action');
    //var gtmLabel = document.getElementsByTagName('data-gtm-label');

    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        category: 'home',
        action: 'clicou',
        label: 'botao:nao-aceito-termos'
    });

    console.log('Eu to funcionando, teu código que não tá! rsrs')

}