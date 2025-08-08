/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof(word) !== 'string') return false;
  
  const originalWord = word.toLowerCase().split(' ').join('');
  const reversedWord = word.toLowerCase().split(' ').join('').split('').reverse().join('');

  return originalWord === reversedWord;
}
console.log(isPalindrom('Ana voli Milovana'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const result = [];
  if (sentence === '' || typeof(sentence) !== 'string') return result;
  
  let maxLength = 0;
  for (let word of sentence.split(' ')) {
    if (word.length > maxLength) {
      result.length = 0;
      result.push(word);
      maxLength = word.length;
    } else if (word.length === maxLength) {
      result.push(word);
    }
  }
  return result;
}
console.log(findLongestWords('The quick brown fox'));

export { isPalindrom, findLongestWords };
