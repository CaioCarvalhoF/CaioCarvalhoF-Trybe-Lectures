
//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//console.log(numbers);


//2- Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

//let soma = 0;

//for(let iterador = 0; iterador < numbers.length; iterador +=1 ) {
//    soma += numbers[iterador]
//}
//console.log(soma);


//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  soma+= numbers[iterador];
}
let media = soma / numbers.length

console.log(media);
*/

//4- Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  soma+= numbers[iterador];
}
let media = soma / numbers.length

console.log(media);

*/




// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maiorNumero = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  if (numbers[iterador] > maiorNumero) {
      maiorNumero = numbers[iterador]
  }

}
console.log(maiorNumero);
*/

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/*

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  if (numbers[iterador] % 2 == 0) {
      odd += 1;
  }
  else {
      console.log("nenhum valor ímpar encontrado");
  }

}
console.log(odd);

 */

//7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
/**
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorNumero = 5;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  if (numbers[iterador] < menorNumero) {
    menorNumero= numbers[iterador]
  }

}
console.log(menorNumero);

 */

//8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;



let numbers = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}

console.log(numbers);



// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .






for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i] / 2);
  };