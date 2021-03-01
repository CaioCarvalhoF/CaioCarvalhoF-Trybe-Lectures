/** 

let house = {
    number: 19,
    adress: 'Zaquia jorge',
    residents: ['Caio','Kaua','Edson','Graça'],
    floors: 3
};

console.log("A casa de numero " + house.number + " que fica na " + house.adress + ", tem " + house.residents + " residentes e " + house.floors + " andares");

console.table(house); //mostra dados em formato de tabela.

*/

let players = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

//console.log("A jogadora" + " " + players.name + " " + players.lastName + " " +"tem" + " " + players.age + " anos de idade.");

//"A jogadora Marta Silva tem 34 anos de idade".

//Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

//console.log( "A jogadora possui " + players.medals.golden + " medalhas de ouro e " + players.medals.silver + " medalhas de prata.");

console.log("A jogadora foi eleita a melhor do mundo por " + players.bestInTheWorld.length + " vezes.");