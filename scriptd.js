document.getElementById('btnCopiar').classList.add('esconder_btn')

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function criptografar() {
    let texto = document.querySelector('textarea').value;

    texto = removerAcentos(texto)

    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    document.getElementById('resultado').textContent = texto

    let elementosParaEsconder = document.querySelectorAll('.container_2 img, .container_2 .nmensagem, .container_2 .dgite');
    elementosParaEsconder.forEach(function(elemento) {
        elemento.classList.add('esconder');
    });

    limparCampo()
    document.getElementById('resultado').classList.remove('esconder_resul')
    document.getElementById('btnCopiar').classList.remove('esconder_btn')

    return texto;  
}

function descriptografar() {
    let texto = document.querySelector('textarea').value;

    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    document.getElementById('resultado').textContent = texto
    
    let elementosParaEsconder = document.querySelectorAll('.container_2 img, .container_2 .nmensagem, .container_2 .dgite');
    elementosParaEsconder.forEach(function(elemento) {
        elemento.classList.add('esconder');
    });

    limparCampo()
    document.getElementById('resultado').classList.remove('esconder_resul')    
    document.getElementById('btnCopiar').classList.remove('esconder_btn')

    return texto;
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById('resultado').value);
    
    let elementosParaMostrar = document.querySelectorAll('.container_2 img, .container_2 .nmensagem, .container_2 .dgite');
    elementosParaMostrar.forEach(function(elemento) {
        elemento.classList.remove('esconder');
    });
    
    document.getElementById('resultado').classList.add('esconder_resul')
    alert('Texto Copiado!');
}

function limparCampo() {
    texto = document.querySelector('textarea');
    texto.value = '';   
}