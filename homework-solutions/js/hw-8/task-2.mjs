/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = ['hello', 'world', 'abc', 'def'];

function sortedByVowels(wordsArr) {
  if (!wordsArr.length) return [];  
  return wordsArr.sort((a, b) => countVowels(a) - countVowels(b));
}
function countVowels(word) {
  const vowels = 'aeiou';
  return [...word.toLowerCase()].filter(letter => vowels.includes(letter)).length;
}
console.log(sortedByVowels(words));

export { sortedByVowels };
