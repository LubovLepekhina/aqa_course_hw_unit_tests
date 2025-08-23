/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  const {name, age} = character;
  if (!name || !age || typeof(name) !== 'string' || typeof(age) !== 'number') throw new Error('Invalid input');
  characters.push(character);
  return characters;
}
console.log(addCharacter({name: 'Ann', age: 30}));


function getCharacter(name) {
  return characters.find(person => person.name === name);
}
console.log(getCharacter('Fred'));


function getCharactersByAge(minAge) {
  if (typeof(minAge) !== 'number') throw new Error('Invalid input');
  return characters.filter(person => person.age >= minAge);
}
console.log(getCharactersByAge(36));


function updateCharacter(name, newCharacter) {
  const person = getCharacter(name);
  if (!person) throw new Error('Name is not found');
  return Object.assign(person, newCharacter);
}
console.log(updateCharacter('Fred', {name: 'Freddy', age: 40}));


function removeCharacter(name) {
  let index = characters.findIndex(obj => obj.name === name);
  if (index === -1) throw new Error('Name is not found');
  characters.splice(index, 1);
  return characters;
}
console.log(removeCharacter('Jack'));

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
