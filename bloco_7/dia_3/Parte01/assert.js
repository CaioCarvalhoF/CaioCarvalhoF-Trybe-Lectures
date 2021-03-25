//O módulo Assert é uma ferramenta de aferição que permite testar expressões. Esse módulo já vem instalado com o NodeJS . Podemos entender o assert como sendo uma expressão booleana que será sempre true , ao menos que haja uma falha. Por esse motivo, o assert não dará feedback se o teste não falhar .

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70


//Neste outro exemplo utilizamos o assert para testar o retorno esperado da função division :

const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');