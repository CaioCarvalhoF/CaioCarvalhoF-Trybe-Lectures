/**
 * O ato de criar erros novos, também chamado de lançar exceções , é algo importantíssimo para casos em que o código em si executa normalmente pelos padrões da linguagem, mas a pessoa que o escreveu não quer que ele execute nessa hipótese específica.
Dito isso, vamos rever o exemplo acima de um erro lançado usando throw :
 */

function division(x, y) {
    // Queremos que o código retorne um erro com uma mensagem específica
    // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
    // for verdadeira, o que irá interromper a execução da função.
  
    if (y === 0) throw new Error('parameter y must not be 0');
    return x / y;
  }