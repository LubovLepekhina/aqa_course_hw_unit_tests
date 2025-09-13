// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
    const arr: string[] = password.split('');
    const hasUpperCase: boolean = arr.some(char => char === char.toUpperCase());
    const hasLowerCase: boolean = arr.some(char => char === char.toLowerCase());
    const hasNumbers: boolean = arr.some(char => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)

    return hasUpperCase && hasLowerCase && hasNumbers && password.length >= 8 && password.trim() !== '';
}

console.log(validatePassword('klklk8hjJ'));