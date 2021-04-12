const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers"
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers"
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers"
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C




// 2 

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers"
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers"
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C


//3 

const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers"
      },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos

  

  //4 

  const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


//5 

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (onSuccess) => {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => onSuccess(currentTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);


