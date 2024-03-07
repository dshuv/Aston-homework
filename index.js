// Basic

// Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн

// function pattern(n) {
// if (typeof n !== "number" || n < 0) {
//   return null;
// }
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//       str += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       str += j;
//     }
//     for (let j = i - 1; j >= 1; j--) {
//       str += j;
//     }
//     console.log(str);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//       str += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       str += j;
//     }
//     for (let j = i - 1; j >= 1; j--) {
//       str += j;
//     }
//     console.log(str);
//   }
// }

// pattern(5);


// Advanced

// Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения) и число,отображающее количество элементов на странице.
// Пример реализации:
// helper.pageItemCount(0); // 4
// helper.pageItemCount(1); // на последней странице - 2
// helper.pageItemCount(2); // -1, так как такой страницы нет
// pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе -1
// helper.pageIndex(5); // 1
// helper.pageIndex(2); // 0
// helper.pageIndex(20); // -1
// helper.pageIndex(-10); //-1


// class PaginationUtil {
//   constructor(arr, itemsNum) {
//     this.arr = arr;
//     this.itemsNum = itemsNum;
//   }

//   pageCount() {
//     return Math.ceil(this.arr.length / this.itemsNum);
//   }

//   itemCount() {
//     return this.arr.length;
//   }

//   pageItemCount(pageIndex) {
//     if (pageIndex < 0 || pageIndex >= this.pageCount()) {
//       return -1;
//     }
//     if (pageIndex === this.pageCount() - 1) {
//       return this.arr.length % this.itemsNum;
//     }
//     return this.itemsNum;
//   }
//   pageIndex(index) {
//     if (index < 0 || index >= this.arr.length) {
//       return -1;
//     }
//     return Math.floor(index / this.itemsNum);
//   }
// }

// const helper = new PaginationUtil(["a", "b", "c", "d", "e", "f"], 4);


