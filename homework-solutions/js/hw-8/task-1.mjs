/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach = [];
numbers.forEach(item => {
   if (!(item % 3)) {
      forEach.push(item);
   }
})

let map = numbers.map(item => item - numbers.length);

let filter = numbers.filter((item, i, arr) => item > arr[i - 1]);

let find = numbers.find((item, i) => item === i);

let sort = numbers.toSorted((a, b) => a - b);

let reduce = numbers.reduce((acc, curr) => acc + curr, 0);

let some = numbers.some(item => item > 90);

let every = numbers.every(item => item > 9 && item < 100);

console.log(forEach);
console.log(map);
console.log(filter);
console.log(find);
console.log(sort);
console.log(reduce);
console.log(some);
console.log(every);

export { forEach, map, filter, find, sort, reduce, some, every };
