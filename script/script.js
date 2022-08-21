'use strict'
// 1
// const arr = ['a', 'b', 'c', 'd'];
// const str = `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`;
// console.log(str);

//2
// const arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);

// 3
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr[1][0]);

// 4
// const obj = {
//   js: ['jQuery', 'Angular'],
//   php: 'hello',
//   css: 'world',
// };

// console.log(obj.js[0]);

// 5
// const arr = [];
// let str = 'x';

// for (let i = 0; i < 10; i++) {
//   arr.push(str);
//   str += 'x';
// }

// console.log(arr);

// 6

// const arr = [];

// for (let i = 1; i <= 5; i++) {
//   let str = '';

//   for (let j = 0; j < i; j++) {
//     str += i;
//   }
//   arr.push(str);
// }
// console.log(arr);

// 7

// let arr = [];
// function arrayFill(item, numberIt) {
//   for (let i = 0; i < numberIt; i++) {
//     arr.push(item);
//   }
//   return arr;
// }
// arrayFill("s", 6);
// console.log(arr);

// 8

// const arr = [1, 9, 2, 5, 4, 7, 3];
// let sum = 0;
// const arr1 = arr.reduce(function (accum, item) {
//   if (sum < 10) {
//     sum += item;
//     accum++;
//   }
//   return accum;
// }, 0);

// console.log(arr1);

// 9

// const arr = [1, 2, 3, 4, 5, 6];

// function reverseArr(array) {
//   let newArr = [];
//   while (array.length) {
//     newArr.push(array.pop());
//   }
//   return newArr;
// }
// console.log(reverseArr(arr));

// 10
// const arr = [[1, 2, 3], [4, 5], [6]];

// function summ(array) {
//   let arr2 = array.flat().reduce(function (summ, elem) {
//     return summ + elem;
//   }, 0);
//   return arr2;
// }

// console.log(summ(arr));


// 11

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let arr1 = arr.flat(2);
// let arr2 = arr1.reduce(function (accum, item) {
// return accum += item;
// }, 0); 
// console.log(arr2);