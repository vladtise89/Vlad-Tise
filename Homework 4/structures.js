//display in the console the numbers from 1 to 20

//1st way
var x = 1;
while (x <= 20) {
  console.log(x);
  x++;
}

//2nd way
var i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

//3rd way
for (var i = 1; i <= 20; i++) {
  console.log(i);
}

//display in the console the odd numbers from 1 to 20
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

//compute the sum of the elements of an array and display it in the console
let arr = [4, 5, 7, 13, 22, 43];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`The sum of elements is ${sum}`);

//compute the maximum of the elements of an array and display it in the console
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7];
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

//compute how many times a certain element appears in an array

const numbers2 = [1, 2, 3, 7, 5, 6, 7, 8, 9, 10, 9, 8, 7];
let target = 7;
let counter = 0;
for (let nums of numbers2) {
  if (nums === target) {
    counter++;
  }
}
console.log(
  `The number ${target} appears in the above array ${counter} times.`
);

//Challenge - using nested for generate the following pattern 0 1 0 1 1 0 1 0 0 1 0 1 1 0 1 0
