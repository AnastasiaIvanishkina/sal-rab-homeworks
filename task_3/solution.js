function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины 

    let itemCountText = item.count + " " + "×" + " " + item.price + " " + "₽ =" + " ";
    
    let sum = item.count * item.price;
    
    itemCountText = itemCountText + sum + " " + "₽";

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
