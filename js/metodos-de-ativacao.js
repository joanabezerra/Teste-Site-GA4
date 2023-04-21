console.log('Oi');

function pegarValorDoElement(elemento) {

    const atributoElement = elemento.getAttribute('data-gtm-element');    
    return atributoElement;

}

function pegarValorDoCategory(elemento) {

    const atributoCategory = elemento.getAttribute('data-gtm-category');
    return atributoCategory;

}

function pegarValorDoAction(elemento) {

    const atributoAction = elemento.getAttribute('data-gtm-action');
    return atributoAction;
    
}

function pegarValorDoLabel(elemento) {

    const atributoLabel = elemento.getAttribute('data-gtm-label');
    return atributoLabel;
    
}

function aceito(elemento) {

    console.log('clicou aceito!');
    
    // esconder div de termos
    document.getElementById(elemento).style.display = 'none';

    // Elemento do botão
    var idBotao = document.getElementById('aceito-termos');

    const element = pegarValorDoElement(idBotao);
    const category = pegarValorDoCategory(idBotao);
    const action = pegarValorDoAction(idBotao);
    const label = pegarValorDoLabel(idBotao);

    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        event: 'eventGA',
        element: element,
        category: category,
        action: action,
        label: label
    });
    
}

// pegarValorDoCategory('aceito-termos');

function naoaceito(elemento) {
    
    console.log('clicou não aceito!');

    // esconder div de termos
    document.getElementById(elemento).style.display = 'none';

    // Elemento do botão
    var idBotao = document.getElementById('nao-aceito-termos');

    const element = pegarValorDoElement(idBotao);
    const category = pegarValorDoCategory(idBotao);
    const action = pegarValorDoAction(idBotao);
    const label = pegarValorDoLabel(idBotao);

    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        event: 'eventGA',
        element: element,
        category: category,
        action: action,
        label: label
    });

}