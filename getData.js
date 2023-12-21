// const getResourse = async (url) => { // Асинхронная функция всегда возвращает promes
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
//   }
//   return await response.json();
// };
// // const data = getResourse("https://reqres.in/");
// // console.log(data);

// getResourse("https://reqres.in/").then((data) => console.log(data));

const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${response.status}`
    );
  }

  return await response.json();
};

getResource("https://reqres.in/api/users/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// getResource("database/dataBase.json")// в моей базе обьект
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));




