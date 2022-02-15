function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку
    let shippingSum;
        if (productsSum >= freeShippingMinSum || productsSum === 0) {
            console.log(shippingSum = 0);
        } else {
            console.log(shippingSum = shippingPrice);
        } 
    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountPrice;

    if (productsSum >= discountMinSum) {
        console.log(discountSum = discountPart/100*productsSum);
    } else {
        console.log(discountSum = 0);
    }

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum = productsSum - discountSum;

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
        console.log(totalSum = productsSum - discountSum + shippingSum);
 
    let freeShipping = shippingSum == 0;
        shippingSum === 0; // true;
        shippingSum != 0; // false; 

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
