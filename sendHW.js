const url = "https://reqres.in/api/users";

const user = {
  name: "John Doe",
  job: "unknown",
};

saveUserData(user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

async function saveUserData(userData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// async function saveUserData(userData) { ... }: Определение асинхронной функции saveUserData, которая принимает данные пользователя и отправляет их на сервер.

// const response = await fetch(url, { ... }): Использует функцию fetch для отправки POST-запроса на сервер. Оператор await ожидает завершения этой асинхронной операции.

// if (response.ok) { return response; } else { throw Error(response.statusText); }: Проверяет успешность HTTP-ответа. Если ответ успешен, функция возвращает объект response. В противном случае выбрасывается ошибка с текстом статуса ответа.

// catch (error) { console.log(error.message); }: Обрабатывает ошибку, если она возникает в блоке try, и выводит сообщение об ошибке в консоль.

// Таким образом, код отправляет POST-запрос на сервер с данными пользователя и выводит сообщение об успешном сохранении данных в случае успешного ответа сервера. Если запрос неудачен, выводится сообщение об ошибке.
