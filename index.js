// Basic
// 1 Создать объект counter всеми возможными способами;

// С помощью литеральной формы
// const counter = {};

// С помощью конструктора объекта
// const counter = new Object();

// C помощью функции конструктора
// function Counter() {
//   this.count = 1;
// }
// const counter = new Counter();

// C помощью класса
// class Counter {
//   constructor() {
//     this.count = 1;
//   }
// }
// const counter = new Counter();

// C помощью Object.assign
// const counter = {};
// const counter = Object.assign({}, { count: 1 });

// C помощью Object.create
// const counter = Object.create({});

// С помощью Object.setPrototypeOf
// const counter = {};
// Object.setPrototypeOf(counter, { count: 1 });


// 2 Скопировать объект counter всеми возможными способами;

// С помощью Object.assign
// const counter = { count: 1 };
// const counterCopy = Object.assign({},counter);

// С помощью spread оператора
// const counter = { count: 1 };
// const counterCopy = { ...counter };

// С помощью собственной функции копирования с циклом for in
// const counter = { count: 1 };
// function copyObj(obj) {
//   const newObj = {};
//   for (let key in counter) {
//     newObj[key] = counter[key];
//   }
//   return newObj;
// }
// const counterCopy = copyObj(counter);

// C помощью Object.entries и методом reduce
// const counter = { count: 1 };
// const counterCopy = Object.entries(counter).reduce((acc, [key, value]) => {
//   acc[key] = value;
//   return acc;
// }, {});

// С помощью JSON parse/stringify
// const counter = { count: 1 };
// const counterCopy = JSON.parse(JSON.stringify(counter));

// C помощью библиотеки lodash
// const counter = { count: 1 };
// const counterCopy = _.cloneDeep(counter);

// С помощью Object.create
// const counter = { count: 1 };
// const counterCopy = Object.create(
//   Object.getPrototypeOf(counter),
//   Object.getOwnPropertyDescriptors(counter)
// );

// С помощью structuredClone (при глубоком копировании)
// const person = {
//   name: "danila",
//   based: {
//     country: "Belarus",
//     city: "Gomel",
//   },
// };
// const newPerson = structuredClone(person);



// 3 Создать функцию makeCounter всеми описанными и возможными способами;

// Function Declaration
// function makeCounter() {}

// Function Expression
// const makeCounter = function () {}

// Arrow function
// const makeCounter = () => {}

// Closures
// function makeCounter() {
//   let counter = 0;
//   return function incrementCounter() {
//     counter++;
//     console.log("counter", counter);
//   };
// }
// const result = makeCounter();

// Higher-order Function
// function makeCounter(callback) {
//   return callback();
// }

// function counterInfo() {
//   return console.log("Here you need to do counter");
// }

// makeCounter(counterInfo);

// Constructor Function
// function MakeCounter(start, last) {
//   this.start = start;
//   this.last = last;
// }

// const counter = new MakeCounter(1, 3);
// counter.showInfo = function () {
//   return `Start value ${this.start}, last value ${this.last}`;
// };

// Advanced

// 1 Развернуть строку в обратном направлении при помощи методов массивов

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }


// 2 Написать функцию глубокого сравнения двух объектов

// const obj1 = { here: { is: "on", other: "3" }, object: "Z" };
// const obj2 = { here: { is: "on", other: "2" }, object: "Z" };

// const deepEqual = (obj1, obj2) => {
//   if (obj1 === obj2) {
//     return true;
//   }
//   if (
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object" ||
//     obj1 === null ||
//     obj2 === null
//   ) {
//     return false;
//   }
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//       return false;
//     }
//   }
//   return true;
// };
