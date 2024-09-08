document.getElementById('meuformulario').addEventListener('submit', function(event){
    event.preventDefault();
    var campoA= parseFloat(document.getElementById('campoA').value);
    var campoB= parseFloat(document.getElementById('campoB').value);
    var mensagem = document.getElementById('mensagem');

    if(campoB>campoA){
        mensagem.textContent ="Muito bem o numero B é maior que o numero  digitado no A.";
        mensagem.style.color="blue";
    } else {
        mensagem.textContent ="ERRO FATAL! O numero B precisa ser maior que o numero A. NAO PODEMOS CONTINUAR DESSE JEITO";
        mensagem.style.color="red";
    }
});