const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];


//SpredOperador 


const arrayDeJogos = ['Zelda','Mario','Sonic']

const juntaTudo = [...numbers, ...arrayDeJogos]


console.log(juntaTudo)




const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */


//Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


//E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min . Vamos ver um exemplo?

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5






//salada de frutas 

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Uva', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de leite', 'Leite condensado', 'açucar'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));