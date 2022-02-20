function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины
    let item = {id: id, title: title, count: count, price: price}; 

    let itemCountText = String();
    let text1 = "количество";
    let text2 = "x";
    let text3 = "цена"
    let text4 = "₽ ="; 

        itemCountText = text1 + " " + text2 + " " + text3 + " " + text4 + " ";

    let productProperty1 = count; 
    let productProperty2 = price;
    let sum = productProperty1 * productProperty2;

    let text5 = "₽";
        
        itemCountText = itemCountText + sum + " " + text5;

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
