let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(i, cars[i]);
}


let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
  }


  frutas = ["Maçã", "Banana", "Laranja"];

  for(let key in frutas) {
      console.log(key, frutas[key]);
  }




  function sum(a, b) {
    return a + b;
  }

  

  console.log(sum(8, 10));