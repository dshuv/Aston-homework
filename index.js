// Basic

// 1  Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Особенности массивом из-за которых их можно считать 'неправильными' это :
// 1) Они могут содержать в себе значения разных типов данных
// 2) Они динамически расширяются при добавлении новых элементов
// 3) Совмещают в себе такие структуры данных как stack или queue :
//    Stack - при использовании таких методов массива как pop/push (удалить элемента с конца массива , добавить в конец массива)
//    Queue -  при использовании таких методов массива как shift/push (удалить элемента с начала массива , добавить в конец массива)
// 4) Могут содержать не только числовые индексы , но и строки в качестве индекса
// 5) Так как массив это специальный тип объекта , он так же может иметь свойства и методы


// 2 Привязать контекст объекта к функции так,
// чтобы при вызове функции ${this.item} имело значение - 'some value'(Привязать через bind, call, apply)

// const obj = { item: "some value" };

// function logger(obj) {
//   console.log(`I output only external context: ${this.item}`);
// }

// bind
// const showResult = logger.bind(obj);
// showResult();

// call
// logger.call(obj);

// apply
// logger.apply(obj);


// Advanced

// 3 Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()

// const person = {
//   name: "Danila",
// };

// function greeting() {
//   console.log(`Hello ${this.name}!`);
// }

// function bind(fn, context, ...rest) {
//   return function () {
//     if (typeof fn !== "function") {
//       console.log(`${this} не функция`);
//     }
//     const uniqueId = Date.now().toString();
//     context[uniqueId] = fn;
//     const result = context[uniqueId](...rest);
//     delete context[uniqueId];
//     return result;
//   };
// }

// const result = bind(greeting, person);
// result();
