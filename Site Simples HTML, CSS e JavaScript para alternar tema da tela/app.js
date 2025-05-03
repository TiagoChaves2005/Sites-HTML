'use strict' //feito para evitar possiveis erros silenciosos
const switcher = document.querySelector('.btn'); //Obtendo referência ao botão do HTML

switcher.addEventListener('click', function() {   // Adiciona um ouvinte de clique ao elemento 'switcher'.
    document.body.classList.toggle('dark-theme')  // Quando clicado, alterna (adiciona/remove) a classe 'dark-theme' na página.

    var className = document.body.className; // Obtém o nome da classe atual do corpo da página (ex: 'light-theme' ou 'dark-theme')
    if(className == "light-theme") {        // Verifica se o tema atual é o tema claro
        this.textContent = "Dark";          // Se for claro, muda o texto do botão para "Dark"
    }
    else{   
        this.textContent = "Light";         //Caso seja escuro, mude o texto para "Light"
    }
    console.log('Current class name: ' + className); //Mensagem oculta para verificar o resultado na tela de desenvolvedor do navegador
});







