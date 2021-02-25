//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//console.log(tasksList.length);
// 3

let afazeres = ['lavar','Reunião','passar roupas','limpar o chão'];


//afazeres.push('lavar o banheiro');// coloca no final do array

//afazeres.unshift('Banho'); //coloca no inicio do array

afazeres.pop(); 

console.log(afazeres);




console.log(afazeres.length); //exibe a quantidade de itens dentro do array 

let primeiroAfazer = afazeres[0]; //exibe o afazer de índice 0

console.log(primeiroAfazer);


let ultimoafazer = afazeres[afazeres.length -1];  // após criar uma variável para o ultimo afazer, peguei o array afazeres e reduzi seu tamanho total, - 1

console.log(ultimoafazer);





// remover itens do array
//.pop('');



let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]





/** .pop(), .shift() --Apagam respectivamente elementos do final e inicio do array.
 * 
 * .push() e .unshift() -- adicionam respectivamente ao final e inicio do array.
 * 
 * .length mostra o tamanho do array.
 * 
 *.indexOf() mostra o indice de determinado elemento no array.
 */