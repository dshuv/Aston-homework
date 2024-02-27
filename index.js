// Basic

// 1. Перечислить какие бывают алгоритмы сортировок?

// Виды алгоритмов сортировки :
// 1) O(1) - получение элемента коллекции
// 2) O(n), так же называют линейным алгоритмом - перебор коллекции
// 3) O(n^2) - вложенные циклы той же коллекции
// 4) O(log n) или бинарный поиск  - алгоритмы по типу бинарного поиска
// 5) O(n log n) - итерации , который использует бинарный поиск


// 2.Создать объект Person несколькими способами, после создать объект AnotherPerson,
// чтобы в нём были доступны методы объекта Person.Добавить метод logInfo чтоб он был доступен всем объектам.

// - C помощью класса
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   logInfo(){
//     console.log(`Name: ${this.name},age: ${this.age}`)
//   }
// };
// const anotherPerson = new Person('Danila',22)

// - C помощью Object.setPrototypeOf
// const person = {
//   name: "Kirill",
//   age: 21,
//   logInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`)
//   }
// };
// const anotherPerson = {};
// Object.setPrototypeOf(anotherPerson,person);
// anotherPerson.logInfo()

// - С помощью Prototype
// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }
//
// const anotherPerson = Object.create(Person.prototype);
//
// anotherPerson.name = 'Max';
// anotherPerson.age = 20;
//
// Person.prototype.logInfo = function() {
//   console.log(`Name: ${this.name}, Age: ${this.age}`);
// };
//
// anotherPerson.logInfo();

// - C помощью __proto__
// const person = {
//   name: 'Evgeniy',
//   age: 18,
//   logInfo(){
//     console.log(`Name: ${this.name}, Age: ${this.age}`)
//   },
// }
//
// const anotherPerson = {};
//
// anotherPerson.__proto__ = person;
//
// anotherPerson.logInfo()


// 3. Создать класс SuperPerson c get и set для поля name и конструктором,сделать класс наследник от класса SuperPerson.

// class SuperPerson {
//   constructor(name) {
//     this.name = name;
//   }

//   get getName() {
//     return this.name;
//   }

//   set setName(value) {
//     if (typeof value === "string") {
//       return (this.name = value);
//     }
//     console.log(`${value} not a name!`);
//   }
// }

// class NotSuperPerson extends SuperPerson {
//   constructor(name) {
//     super(name);
//   }
// }

// const person = new SuperPerson("Danila");
// person.setName = "Stas";
// console.log(person.getName);


// Advanced

// 1.Написать функцию которая вернет массив с первой парой чисел, сумма которых равна total

// function firstSum (arr, total)  {
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length;j++){
//       if (arr[i] + arr[j] === total){
//         return [arr[i],arr[j]]
//       }
//     }
//   }
//   console.log('There are no such values in the array!')
// };
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// const total = 13;
//
// firstSum(arr, total) //result = [4, 9]


// 2. Оценить сложность вашего алгоритма для функции firstSum

// Сложность алгоритма функции firstSum  является - O(n^2).
// Считается , что ее стоит избегать , но я реализовал эту функцию таким способом.
// Почему сложность алгоритма O(n^2)? - Потому что этот алгоритм можно оценить как квадратичную сложность,
// так как он использует два вложенных цикла for, каждый из которых проходит по всему массиву.