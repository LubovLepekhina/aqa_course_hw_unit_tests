/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const result = [];
  for (let array of arrays) {
    result.push(...array);
  }
  return result;
}
console.log(mergeArrays([1,2], [3,4], [5,6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const arr = sentence.toLowerCase().trim().split(' ');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result += arr[i];
    } else if (arr[i] !== '') {
      result += `_${arr[i][0].toUpperCase()}${arr[i].slice(1)}`;
    }
  }
  return result;
}
console.log(devideBy('   I    am    an     engIneer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const fib = [0, 1];
  if (n < 2) {
    return fib[n];
  } else {
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      fib.push(fib[i]);
    }
    return fib[n];
  }
}
console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
