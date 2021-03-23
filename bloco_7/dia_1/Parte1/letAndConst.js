/*quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:*/

const userInfo = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com"
  };
  userInfo.name = "João"
  
  console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

  /*Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado: */

  const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro