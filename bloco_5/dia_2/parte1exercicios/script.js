//1- document.querySelector('#elementoOndeVoceEsta')
//2- document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue'
//3- document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Acessado com sucesso.'
//4- document.querySelector('#pai').firstElementChild
//5- document.querySelector('#elementoOndeVoceEsta').previousElementSibling
//6- document.querySelector('#elementoOndeVoceEsta').nextSibling
//7- document.querySelector('#elementoOndeVoceEsta').nextElementSibling
//8- document.querySelector('#pai').lastElementChild.previousElementSibling 
//outra solução: document.getElementById('pai').childNodes[5]

/*Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho .*/

let brother = document.querySelector('#pai');
let brtoher = document.createElement('div');

console.log (brother);


