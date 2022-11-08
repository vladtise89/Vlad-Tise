//returneaza daca argumentul trimis este un number par sau impar
const oddOrEven = (a) => {
  if (a % 2 === 0) {
    return `${a} is even`;
  } else {
    return `${a} is odd`;
  }
};
console.log(oddOrEven(4));

//primeste un numar necunoscut de parametri de tip number care returneaza suma lor (folosit Rest Parameter)
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
//Destructurati name
const { name } = person;
//Clonati obiectul person
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
//Clonati obiectul car
const Clonecar = { ...car };
//mergeuim cu modelYear: 2022 si alte settings - wheels, engine
const newCar = {
  ...car,
  modelYear: 2022,
  settings: { wheels: 4, engine: "2.5l" },
};
//Destructurati color si doors.
const { settings: color, doors } = car;
console.log(car);
