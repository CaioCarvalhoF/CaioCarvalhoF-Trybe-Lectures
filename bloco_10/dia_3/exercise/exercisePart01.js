//1
const randomNumber = () => Math.floor(Math.random() * 101);
module.exports = { randomNumber };


//2

const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});




const service = require('./service');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(10, 2)).toBe(5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
});


//3

const service = require('./service');

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});


//4

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};


const service = require("./service");
jest.mock("./service");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    service.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(service.firstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.firstFunction).toHaveBeenCalled();
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(service.secondFunction("letter")).toBe("r");
    expect(service.secondFunction).toHaveBeenCalled();
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalled();
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});