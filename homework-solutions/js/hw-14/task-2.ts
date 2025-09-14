// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type MapCallback<T, U> = (item: T, i: number, array: T[]) => U;

function map<T, U>(arr: T[], callback: MapCallback<T, U>): U[] {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const multiplayElByItsIndex: MapCallback<number, number> = (item, i) => item * i;
const convertToString: MapCallback<number, string> = (item) => item + '';
console.log(map([1,2,3,4,5], multiplayElByItsIndex));
console.log(map([1,2,3,4,5], convertToString));