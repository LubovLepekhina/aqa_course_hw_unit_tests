/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const sortedUniq = [...new Set(numbers.sort((a, b) => a - b))];
  let result = 0;
  if (sortedUniq[0] !== 1) {
    result = 1;
  } else {
    for (let i = 0; i < sortedUniq.length - 1; i++) {
      if (sortedUniq[i + 1] - sortedUniq[i] > 1) {
        result = sortedUniq[i] + 1;
      }
    }
  }
  if (result === 0) {
    result = sortedUniq[sortedUniq.length - 1] + 1;
  }
  
  return result;
}
console.log(findMissingNumber([5,2,7,3,8,1,6]));

export { findMissingNumber };
