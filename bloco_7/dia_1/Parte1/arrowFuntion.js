/*arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function : */

const printName = () => {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());


    const soma = (num1, num2) => num1 + num2;
    const mult = (num1, num2) => num1 * num2;
 // console.log(soma(4, 4))
    console.log(mult(4, 4))

    const maiuscula = nome => nome.toUpperCase()
    console.log(maiuscula('caio'))

    /*podemos omitir os parênteses apenas em dois cenários:
Quando não passamos nenhum parâmetro para a função, como no exemplo acima;
Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:*/

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const splitSentence = (word) => word.split(' ');


const to = "Caio";
const value ="13,90"

const email = `Ola ${to},
o valor da sua cobrança é ${value}
"Esta mensagem é automática"`

console.log(email);