/**
 * Estruturando uma HOF
Vamos construir este conceito passo a passo para que você possa compreender e aplicar na sua jornada como pessoa desenvolvedora. Para isto, é extremamente importante ter em mente que as HOF nos permitem compactar ações e não somente repassar valores. Veja este exemplo:
 */

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.group);




  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');

    }
    else {
        console.log(number, 'is odd')
    }
    console.log(`Exitem ${even} numeros pares e ${odd} ímpares.`)
  });


/*---------------------------------------------------------------*/



const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15));
// true









