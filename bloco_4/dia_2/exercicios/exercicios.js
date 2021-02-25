
//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//console.log(numbers);


//2- Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

//let soma = 0;

//for(let iterador = 0; iterador < numbers.length; iterador +=1 ) {
//    soma += numbers[iterador]
//}
//console.log(soma);


//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  soma+= numbers[iterador];
}
let media = soma / numbers.length

console.log(media);

//4- Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  soma+= numbers[iterador];
}
let media = soma / numbers.length

console.log(media);






// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maiorNumero = 0;

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  if (numbers[iterador] > maiorNumero) {
      maiorNumero = numbers[iterador]
  }

}
console.log(maiorNumero);





















/* serve para dividir todos os numeros do array
  let soma = 0;
let media = 0

for(let iterador = 0; iterador < numbers.length; iterador +=1) {
  soma+= numbers[iterador];
  media += soma / numbers.length;
  console.log(media);
}
*/