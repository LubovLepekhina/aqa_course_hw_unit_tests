/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n;
n = 3;

const twoConcat = String(n) + n;
const threeConcat = String(n) + n + n;

const result = n + +twoConcat + +threeConcat;
console.log(result);