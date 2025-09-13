// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
};
delayTwoSeconds(() => console.log('Hi!'));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const newPromise = new Promise((resolve, reject) => {
  resolve(1);
});
newPromise.then(res => console.log(res));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const newPromise2 = new Promise((resolve, reject) => {
  reject('Promise failed');
});
newPromise2.catch(rej => console.log(rej));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(num) {
  return new Promise((resolve) => resolve(num));
}
promiseNumber(5).then(res => console.log(res));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

const arrayOfPromises = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];
Promise.all(arrayOfPromises).then(result => {
  // console.log(result);
  result.forEach(item => console.log(item));
})

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled(arrayOfPromises).then(result => {
  // console.log(result);
  result.forEach(item => console.log(item));
})

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function logAllResults() {
  try {
    const allPromises = await Promise.all(arrayOfPromises);
    allPromises.forEach(item => console.log(item));
  } catch (error) {
    console.error(error.message);
  }
}
logAllResults();

async function logAllStatusesAndResults() {
  try {
    const allStatAndRes = await Promise.allSettled(arrayOfPromises);
    allStatAndRes.forEach(item => console.log(item));
  } catch (error) {
    console.error(error.message);
  }
}
logAllStatusesAndResults();