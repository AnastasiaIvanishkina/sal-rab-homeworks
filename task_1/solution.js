function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message = productName;
        message = productName + " ";

    let text1 = "за";
        message = productName + " " + text1; // productName за;
        message = productName + " " + text1 + " "; // productName за ;
        message = productName + " " + text1 + " " + productPrice; // productName за productPrice;
        message = productName + " " + text1 + " " + productPrice + " "; // productName за productPrice ;

    let text2 = "теперь в корзине!";
        message = productName + " " + text1 + " " + productPrice + " " + text2; // productName за productPrice теперь в корзине!;
    
    console.log(message);


    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue = oldValue;
        newValue = oldValue + 1;

    console.log (newValue);

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине
    let newSum = oldSum + difference;

    let text = "₽";

    let newSumText = newSum + text;
        newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

