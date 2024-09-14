// Js Tagueamento
// Função para pegar o valor do atributo 'data-gtm-category'
function pegarValorDoCategory(elemento) {
    if (elemento && elemento.hasAttribute('data-gtm-category')) {
        const atributoCategory = elemento.getAttribute('data-gtm-category');
        return atributoCategory;
    }
    return null;
}

// Função para pegar o valor do atributo 'data-gtm-action'
function pegarValorDoAction(elemento) {
    if (elemento && elemento.hasAttribute('data-gtm-action')) {
        const atributoAction = elemento.getAttribute('data-gtm-action');
        return atributoAction;
    }
    return null;
}

// Função para pegar o valor do atributo 'data-gtm-label'
function pegarValorDoLabel(elemento) {
    if (elemento && elemento.hasAttribute('data-gtm-label')) {
        const atributoLabel = elemento.getAttribute('data-gtm-label');
        return atributoLabel;
    }
    return null;
}

// Adiciona o evento de clique ao document inteiro
document.addEventListener('click', function(event) {
    const elementoClicado = event.target;

    // Verifica se o elemento clicado (ou algum ancestral) tem o atributo 'data-gtm-category'
    const gtmCategory = elementoClicado.closest('[data-gtm-category]');
    // Verifica se o elemento clicado (ou algum ancestral) tem o atributo 'data-gtm-action'
    const gtmAction = elementoClicado.closest('[data-gtm-action]');
    // Verifica se o elemento clicado (ou algum ancestral) tem o atributo 'data-gtm-label'
    const gtmLabel = elementoClicado.closest('[data-gtm-label]');

    if (gtmCategory || gtmAction || gtmLabel) {
        const valorCategory = pegarValorDoCategory(gtmCategory);
        const valorAction = pegarValorDoAction(gtmAction);
        const valorLabel = pegarValorDoLabel(gtmLabel);

        window.dataLayer = window.dataLayer || [];
    
        window.dataLayer.push({
            'event': 'Interaction',
            'category': valorCategory,
            'action': valorAction,
            'label': valorLabel
        });

        // console.log(valorCategory);
        // console.log(valorAction);
        // console.log(valorLabel);
    }
});