/*- Creati cate 2 exemple pentru mostenire si compozitie folosindu-va de 
domeniul vostru de activitate 
sau unul preferat. (puteti folosi orice referinta).*/

//Primul exemplu
class Tree {
  constructor(branches, leaves, height, age, color, hasFruit) {
    this.branches = branches;
    this.leaves = leaves;
    this.height = height;
    this.age = age;
    this.color = color;
    this.hasFruit = hasFruit;
  }
}

class Fruit {
  constructor(name, edible, bio, origin) {
    this.name = name;
    this.edible = edible;
    this.bio = bio;
    this.origin = origin;
  }
}

class OakTree extends Tree {
  constructor(
    specimen,
    toxicity,
    branches,
    leaves,
    height,
    age,
    color,
    hasFruit
  ) {
    super(branches, leaves, height, age, color, hasFruit);
    this.specimen = specimen;
    this.toxicity = toxicity;
  }
}

class AppleTree extends Tree {
  constructor(branches, leaves, height, age, color, hasFruit, specimen, fruit) {
    super(branches, leaves, height, age, color, hasFruit);

    this.specimen = specimen;
    this.fruit = new Fruit(fruit.name, fruit.edible, fruit.bio, fruit.origin);
  }
}
const Fruit1 = new Fruit("apple", true, false, "USA");

const AppleTree1 = new AppleTree(
  34,
  3500,
  "170cm",
  3,
  "green",
  true,
  "Royal Gala",
  Fruit1
);
console.log(AppleTree1);

const OakTree1 = new OakTree(
  "Black Oak",
  true,
  55,
  70000,
  "600cm",
  144,
  "black",
  false
);
console.log(OakTree1);

//Al doilea exemplu
class Phone {
  constructor(brand, model, storage, launchdate, buttons) {
    this.brand = brand;
    this.model = model;
    this.battery = new Battery(2000, 95, 100);
    this.storage = storage;
    this.launchdate = launchdate;
    this.buttons = buttons;
    this.status = false;
  }

  start() {
    console.log("Welcome!");
    this.status = true;
  }
}

class Battery {
  constructor(mAh, batteryPercentage, health) {
    this.mAh = mAh;
    this.batteryPercentage = batteryPercentage;
    this.health = health;
  }
  charge(percent) {
    if (this.batteryPercentage >= 100) {
      const div = document.getElementById("complete");
      div.style.display = "block";
    } else {
      this.batteryPercentage = this.batteryPercentage + percent;
      console.log(document.getElementById("percentage").style.width);
      const div = document.getElementById("percentage");
      div.innerHTML = Math.floor(this.batteryPercentage) + "%";
      div.style.width = Math.floor(this.batteryPercentage) + "%";
    }
  }
}

const samsung = new Phone("Samsung", "S10", "64GB", 2019, 3);
console.log(samsung);
setInterval(() => {
  samsung.battery.charge(0.1);
}, 200);

const iphone = new Phone("iPhone", "X", 3, "128GB", 2017, 3);
console.log(iphone);
iphone.start();

/*- Creati cate o de functie si apelarea sa pentru urmatoarele cazuri (pentru a intelege):
cate o functie care primeste cate un parametru: integer, string, object, array, callback
cateva exemple si cu combinatii, unde trimiteti mai multi parametrii de mai multe tipuri*/
//integer//

const sum = {
  x: 44,
  z: 33,
};
function myInteger(Obj) {
  return Obj.x - Obj.z;
}
console.log(myInteger(sum));
//string//
function checkLength(string) {
  return string.length;
}
console.log(checkLength("condominium is a type of apartment"));
console.log(checkLength("the crocodile has cold blood"));

//object//
const tree = {
  branches: 4,
  leaves: 44,
};
function returnBranches(treeObj) {
  return treeObj.branches;
}
console.log("The tree has " + returnBranches(tree) + " branches");
//al doilea exemplu object
const house = {
  rooms: 3,
  gardens: 1,
  bathrooms: 1,
};

function roomsLength(houseObj) {
  return houseObj.rooms;
}
console.log("Number of rooms in the house: " + roomsLength(house));

//array si callback//
function carCounter(cars, callback) {
  console.log("all the cars in the park are: " + cars.length);
  callback();
  console.log(cars);
}
const carList = ["Ford", "Audi", "Bitter", "Moretti", "Abarth", "Pegasus"];
carCounter(carList, function () {
  console.log("I am the callback");
});
/*generati un callback hell (optional)
o functie care accepta un numar nedefinit de argumente care returneaza suma lor
*/
function sum1(...args) {
  let sum = 0;
  args.forEach((number) => {
    sum += number;
  });
  return sum;
}
console.log("The sum is: " + sum1(1, 2, 5, 7, 109, 4044));

/*
o functie care accepta un boolean si retuneaza un promise, resolve  
cu o valoare daca booleanul este true si rejected daca este false cu alta valoare, 
prindeti ce returneaza functia si afisati cu console.log valoarea*/
//primul promise
function myPromise(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("ro");
    } else {
      reject("error, not good");
    }
  });
}

myPromise(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// al doilea promise
const iGotCash = false;

function getCar(cash) {
  return new Promise((resolve, reject) => {
    if (cash) {
      const car = {
        brand: "Jaguar",
        color: "S-Type",
        horsepower: "340hp",
        cylinders: 8,
      };
      resolve(car);
    } else {
      reject(new Error("No cash in the bank"));
    }
  });
}

getCar(iGotCash)
  .then((resolve) => {
    console.log("Success, ", resolve);
  })
  .catch((error) => {
    console.log("There was a problem with your bank account. ", error);
  });

const checkWithBank = function () {
  return willGetCar
    .then((fulfilled) => console.log(fulfilled))
    .catch((error) => console.log(error.message));
};
