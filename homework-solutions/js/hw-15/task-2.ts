// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object>(object: T, value: T[keyof T]): keyof T | undefined {
    for (let k in object) {
        if (object[k] === value) return k;
    }
}
console.log(getKeyByValue({name: 'Kate', age: 45, favColor: 'green'}, 45));