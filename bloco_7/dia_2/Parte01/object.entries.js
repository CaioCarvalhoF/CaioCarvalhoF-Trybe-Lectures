//O método Object.entries retorna um array com os pares chave / valor do objeto. Para visualizar seu retorno, veja o exemplo abaixo:

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);