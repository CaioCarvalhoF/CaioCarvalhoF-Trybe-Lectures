/**OperaçõesDe forma resumida, callback é uma função passada como parâmetro para outra função. Sem perceber você viu um exemplo de função callback quando chamamos a função setTimeout . Esta função recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function , e o segundo é o tempo que o interpretador irá esperar para executar a função. */

const myExpenses = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const myIncome = 1000;



  /**Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas myExpenses , é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, myIncome , representa o quanto esta pessoa recebeu neste mesmo mês.
Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês. */

const monthlyBudget = (myIncome, myExpenses, callback) => {

    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;
  
    console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
  };







  const handleExpenses = myExpenses => {
    const eachValue = myExpenses.map((item) => Object.values(item)[0]);
    const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
    return totalExpense;
  };
  
  monthlyBudget(myIncome, myExpenses, handleExpenses);









  const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser