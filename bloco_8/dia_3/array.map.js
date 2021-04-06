
//usando for

const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);




// usando map 

const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

//-------------------------------------------------------------------------------------//
//exemplo de Caio

const Animals = [
    { Name: 'Lion', Type: 'carnivore' },
    { Name: 'Monkey', Type: 'mamal' },
    { Name: 'giraffe', Type: 'herbivore' }
];

const ficha = Animals.map((Animal) => ` It's a ${Animal.Name}, that's a ${Animal.Type}`)

console.log(ficha);

//exemplo Aula

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

