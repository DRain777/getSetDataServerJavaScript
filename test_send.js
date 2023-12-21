const sendData = async (url,data) => {


    const response = await fetch(url, {
        method: 'post',
        // body: JSON.stringify(date)     // перегоняем любые данные в формат json
        body:data, // универсальная 

    });

     if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${response}`
    );
     }
    return await response.json();
};



const sendCard =() => {
  const cartForm = document.querySelector(".cart-form");
  const data = {
    name: "Плюша",
    count:3,
  };
  cartForm.addEventListener('submit' , e => {
    e.preventDefault();
    const cartList = JSON.stringify(data);
    console.log(data);
    console.log(cartList);
  });
}