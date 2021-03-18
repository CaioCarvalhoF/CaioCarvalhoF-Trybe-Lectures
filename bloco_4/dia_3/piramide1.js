//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


let n = 5;

let lineContent = '';

//conteudo das colunas;
for (let index = 0; index < 5 ; index +=1)
lineContent += '*' ;


//conteudo das linhas;
for(let index = 0; index < n; index +=1) {
console.log(lineContent);
}