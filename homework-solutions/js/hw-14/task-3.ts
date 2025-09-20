// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов у которых есть как минимум 
// поле salary: number, и возвращается среднее арифметическое зарплат всех переданных объектов

function getAvgSalary<T extends {salary: number}>(...obj: T[]): number {
  return obj.reduce((sum, el) => sum + el.salary, 0) / obj.length;
}
console.log(getAvgSalary({ name: "Alex", salary: 1000 },
                         { name: "Maria", salary: 2000, age: 30 },
                         { name: "John", salary: 1500, role: "Dev" }));