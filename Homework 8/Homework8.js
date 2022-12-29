//returns if the sent argument is an even or odd number
//
const oddOrEven = (a) => {
  if (a % 2 === 0) {
    return `${a} is even`;
  } else {
    return `${a} is odd`;
  }
};
console.log(oddOrEven(4));

//receives an unknown number of parameters of type number that return their sum (used Rest Parameter)
myTotal = (...randomNumbers) => {
  let initialSum = 0;
  for (const sum of randomNumbers) {
    initialSum += sum;
  }
  return initialSum;
};
console.log(myTotal(2, 2, 5)); //output 9
//Name
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};
//Destruct names
const { name } = person;
//Clone the person object
const clonePerson = { ...person };
console.log(person);
//Car
const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};
//Clone ''car'' object
const Clonecar = { ...car };
//merge with modelYear: 2022 si other settings - wheels, engine
const newCar = {
  ...car,
  modelYear: 2022,
  settings: { wheels: 4, engine: "2.5l" },
};
//deconstruct color and doors
const { settings: color, doors } = car;
console.log(car);
