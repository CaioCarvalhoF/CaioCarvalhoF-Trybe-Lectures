

/**
 * toEqual
Para compreendermos a diferença entre toEqual e toBe , precisamos entender que no JavaScript existem duas formas de atribuir valores. A primeira é para a variável e a segunda é para propriedade do objeto, bem como ao passar argumentos para uma função. Essas formas de atribuição são conhecidas por valor e referência .
Para nos aprofundarmos nessas duas formas, é importante entender os tipos de dados, que separamos em tipos primitivos (Ex. number, string, boolean, etc) e objetos (Ex. Objetos, Funções, Arrays, etc).
Os tipos primitivos a atribuição ocorre por valor , ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, uma vez o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:


 */

let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro

/**
 * toBe
toBe , que utilizamos no exemplo anterior, é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.

 */

expect(5).toBe("5")


//**Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes: */


/***
 * Valores booleanos
null , undefined e false são valores falsy . Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles. Jest fornece matchers específicos para cada um. Leia mais sobre eles na documentação do Jest .,
 */


/**
 * Exceções
toThrow testa se uma função lança um erro quando é executada. Para testar se uma função está retornando um erro, é importante estar atento à sintaxe do .toThrow :
 */

const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

  /**
   * not
not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:
   */

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});