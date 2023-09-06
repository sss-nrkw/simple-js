const button = document.getElementById('sample');
const textElement = document.getElementById('hello');

function Click() {
    textElement.innerHTML = 'こんにちは世界';
}

button.addEventListener('click', Click);
