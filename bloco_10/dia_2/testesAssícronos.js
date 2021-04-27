/**
 * Callbacks: para testar callbacks utilizamos a função done . Ela é chamada para sinalizar ao Jest que o teste deverá aguardar o retorno da função callback para que a validação aconteça.
Promises: quando testamos promises devemos retorná-la dentro do teste. Lembre-se de utilizar then quando o retorno for um resolve e catch quando o retorno for um reject .
Async/Await: para testar funções com async e await devemos utilizar a palavra chave async na função passada para teste e await onde esperamos algum retorno assíncrono. Lembre-se que o async/await é apenas uma alternativa de sintaxe mais simples para testar promises .
 */



/** 
 * 
 * allbacks
Ao realizar testes assíncronos, é necessário ter cuidado com falso-positivos, pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona. Ou seja, você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.
O exemplo abaixo gera um falso-positivo:
*/


test("Não deveria passar!", () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
    }, 500);
  });



  /** 
   * 
   * Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
Agora o Jest no exemplo abaixo consegue identificar o erro.
  */

test("Não deveria passar!", done => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
      done();
    }, 500);
  });


  /**
   * Outro exemplo para fixar melhor:
   */


   const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }
  
  test('Testando SumNumbers, soma 5 mais 10', done => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })

  


  /**
   * Quando estiver realizando testes, sempre procure verificar se o seu teste não está exibindo resultados falso-positivos. No exemplo acima, em que o teste está passando, basta mudar o valor final do expect de .toBe(15) para analisar outros cenários.
Mude o valor .toBe(15) para .toBe(10) e verifique. O esperado é o teste identificar o erro. Caso isso ocorra, quer dizer que o seu teste está correto; caso continue passando e não encontre o erro, provavelmente seu teste está com algum falso-positivo.


   */


/**Promises
Para testar uma promise será usado o código abaixo. Ele possui um array Animals , contendo animais com seu nome, idade e tipo.
Observe que a função findAnimalsByType é uma promise, responsável por buscar os animais de determinado tipo no array. Em caso de sucesso, ela retornará um resolve com um array de dados. Em caso de falha, retornará um reject com um objeto com a chave error, possuindo uma mensagem */


const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );
  
  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );



  /**
   * O primeiro teste desse código verificará se, ao chamar a função getListAnimals com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals .
   */


   const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );
  
  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );
  
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(2);
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });
  });


  /**
   * Rode o teste e verifique se ele não está dando algum falso-positivo. Mude o Dorminhoco para Agitado . Viu? O teste não passou, logo não possui falso-positivos.
Agora veja o passo a passo de como o teste foi feito.
Primeiro criamos o describe, onde os testes serão executados
   */

describe('Quando o tipo do animal, existe', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(2);
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Bob');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });
  });










  /**
   * Async/Await
Para testar o código Async/Await , será usado o mesmo código anterior, mas com pequenas mudanças. Observe:

   */

