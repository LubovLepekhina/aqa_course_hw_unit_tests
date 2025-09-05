// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(body) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
      method: 'post',
      body,
    });
    if (response.status !== 201) throw new Error('Status code !== 201');
    const responseBody = await response.json();
    if (responseBody.id !== 201) throw new Error('Wrong id');
    return responseBody;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('The function has completed');
  }
}
createTodo({
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }).then(body => console.log(body));