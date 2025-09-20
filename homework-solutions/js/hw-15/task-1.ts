// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {
    name: string; 
    salary: number; 
    isManager: boolean;
}

const qa: IEmployee = {
    name: 'Jack',
    salary: 2000,
    isManager: false
}

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type EmployeeKeys = keyof IEmployee;

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)

type QaKeys = keyof typeof qa;

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type UserType = typeof qa;
const user: UserType = {
    name: 'Alice',
    salary: 1000,
    isManager: false,
}

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type PartialUser = Partial<IEmployee>;
const user1: PartialUser = {
    name: 'Dima'
}

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type NameSalaryUser = Pick<IEmployee, 'name' | 'salary'>;
const user2: NameSalaryUser = {
    name: 'Kate',
    salary: 10000
}

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type WithoutIsManagerUser = Omit<IEmployee, 'isManager'>;
const user3: WithoutIsManagerUser = {
    name: 'Irina',
    salary: 500
}

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type ReadonlyUser = Readonly<IEmployee>;
const user4: ReadonlyUser = {
    'isManager': true,
    'name': 'Peter',
    'salary': 15000
}
// user4.isManager = false;

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

type CustomObj = Record<string, keyof typeof qa>;
const customObj: CustomObj = {
    'Jack': 'name',
    '2000': 'salary',
    'false': 'isManager',
}


// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
// 4. Создайте объект класса Car и проверьте работоспособность

interface IVehicle {
    getDetails(): string;
    start(): string;
}

abstract class Vehicle implements IVehicle {
    constructor(public make: string, public model: string) {}
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`;
    }

    abstract getDetails(): string;
}

class Car extends Vehicle {
    constructor(public make: string, public model: string, public year: number) {
        super(make, model);
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.start());
console.log(myCar.getDetails());
console.log(myCar.year);