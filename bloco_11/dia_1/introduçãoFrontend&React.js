/**
 * A primeira coisa a se saber é que npm é o gerenciador de pacotes em si, ou seja, ele é quem será utilizado para instalar os pacotes em nossas aplicações React, enquanto o npx executa o comando de um pacote sem instalá-lo em si.

 */
/*
 O JSX , ou Javascript Extension , como o próprio nome sugere, é uma extensão de sintaxe para Javascript. Sua utilização é recomendada pela documentação do React, pois ela demonstra como a interface deverá se comportar, de forma lógica e descritiva.
 Vamos ver um exemplo:
 */
 const element = <h1>Hello, world!</h1>;



 const textJSX = "Hello, JSX"
 const element = <h1>textJSX</h1>

/** O ReactDOM.render é o responsável por renderizar e atualizar seu código dentro do HTML , exibindo seus elementos React .
Todas as vezes que fizermos alguma alteração no código, seja através de uma função ou interação de quem usa, o React DOM compara o elemento novo e seus elementos filhos com os anteriores e aplica mudanças somente onde é necessário para levar a aplicação ao estado desejado. Vamos ver um exemplo: */

 function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
