/** OCSS e Import
Você deve estar se perguntando: mas e como fica o CSS nesse contexto?
Não é nada muito diferente do que você já vem fazendo. Assim como fazia no HTML você deve criar um arquivo para manter todo o seu CSS e então deverá importá-lo onde você deseja utiliza-lo e colocar as classes e ids que você criou nos elementos da sua página. Para facilitar o entendimento veja o exemplo abaixo:*/

/* App.css */

.App {
    background-color: #282c34;
    text-align: center;
  }




  // App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;


