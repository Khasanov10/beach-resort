{
  const ARR = [5, 6];
  ARR.push(7);
  console.log(ARR); // [5,6,7]
  ARR = 10; // TypeError
  ARR[0] = 3; // значение можно менять
  console.log(ARR); // [3,6,7]
}

///////////////////////////////////////////////

// Классическое функциональное выражение
let addition = function (a, b) {
  return a + b;
};

//////////////////////////////////////////////

// Стрелочная функция
let addition = (a, b) => a + b;

//////////////////////////////////////////////

let arr = ['apple', 'banana', 'orange'];

let breakfast = arr.map(fruit => {
  return fruit + 's';
});

console.log(breakfast); // ['apples', 'bananas', 'oranges']

//////////////////////////////////////////////

function Person() {
  // Конструктор Person() определяет `this` как экземпляр самого себя.
  this.age = 0;

  setInterval(function growUp() {
    // Без использования `use strict`, функция growUp() определяет `this`
    // как глобальный объект, который отличается от `this`,
    // определённого конструктором Person().
    this.age++;
  }, 1000);
}
var p = new Person();

//////////////////////////////////////////////

function Person() {
  var self = this;
  self.age = 0;

  setInterval(function growUp() {
    // Коллбэк относится к переменной `self`,
    // значением которой является ожидаемый объект.
    self.age++;
  }, 1000);
}

//////////////////////////////////////////////

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` относится к объекту person
  }, 1000);
}

var p = new Person();

//////////////////////////////////////////////

let getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850, так как значение tax не задано

getFinalPrice(500, 0.2); // 600, значение tax по-умолчанию заменяется на 0.2

//////////////////////////////////////////////

function foo(x, y, z) {
  console.log(x, y, z);
}

let arr = [1, 2, 3];
foo(...arr); // 1 2 3

//////////////////////////////////////////////

function foo(...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

//////////////////////////////////////////////

let user = 'Кевин';
console.log(`Привет, ${user}!`); // Привет, Кевин!

//////////////////////////////////////////////

let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
  console.log(nickname);
}
// di
// boo
// punkeye

//////////////////////////////////////////////

let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname in nicknames) {
  console.log(nickname);
}
// 0
// 1
// 2
// size

//////////////////////////////////////////////

mySet.forEach((item) => {
  console.log(item);
  // 1
  // 2
  // 3
  // 'строки'
  // Object { a: 1, b: 2 }
});

//////////////////////////////////////////////

class Car {
  constructor() {
    console.log("Создаём новый автомобиль");
  }
}

class Porsche extends Car {
  constructor() {
    super();
    console.log("Создаём Porsche");
  }
}

let c = new Porsche();
// Создаём новый автомобиль
// Создаём Porsche

//////////////////////////////////////////////

function* infiniteNumbers() {
  var n = 1;
  while (true) {
    yield n++;
  }
}

var numbers = infiniteNumbers(); // возвращает перебираемый объект

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }

//////////////////////////////////////////////

var p = new Promise(function (resolve, reject) {
  if (/* условие */) {
    resolve(/* значение */);  // fulfilled successfully (успешный результат)
  } else {
    reject(/* reason */);  // rejected (ошибка)
  }
});

p.then((val) => console.log("Промис успешно выполнен", val),
  (err) => console.log("Промис выполнен с ошибкой", err));

//////////////////////////////////////////////

hello.then((str) => `${str} Мир`)
  .then((str) => `${str}!`)
  .then((str) => console.log(str)) // Привет Мир!
