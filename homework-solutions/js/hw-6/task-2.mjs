/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const competitorPizzasToLowerCase = [];
for (let pizza of competitorPizzas) {
  competitorPizzasToLowerCase.push(pizza.toLowerCase());
}

for (let pizza of myPizzasT1) {
  if (!competitorPizzasToLowerCase.includes(pizza.toLowerCase())) {
    resultUnique.push(pizza);
  }
}
if (!resultUnique.length) {
  resultNull = null;
}

const resultUnique2 = [];
for (let pizza of myPizzasT2) {
  if (!competitorPizzasToLowerCase.includes(pizza.toLowerCase())) {
    resultUnique2.push(pizza);
  }
}
if (resultUnique2.length) {
  resultUnique = resultUnique2;
} else {
  resultNull = null;
}

export { resultNull, resultUnique };
