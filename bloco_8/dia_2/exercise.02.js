
function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }


  //03 exercicio



function getNamedBook() {
    return books.find((book) => book.name.length === 26);
  }