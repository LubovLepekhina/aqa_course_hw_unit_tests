/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'aeiou'
let vowelsAndConsonantsResult = '';
let vowelsCounter = 0;

for (let i = 0; i < vowels.length; i++) {
    if (word.toLowerCase().includes(vowels[i])) {
        vowelsCounter += 1;
    }
}
vowelsAndConsonantsResult = `${word} contains ${vowelsCounter} vowels and ${word.length - vowelsCounter} consonants`
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
