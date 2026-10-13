
function calculateCartTotal(items, taxRate) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        let price = items[i].price;
        let quantity = items[i].quantity;
        let discount = items[i].discount;

        let itemTotal = price * quantity;

        let discountAmount = itemTotal * discount / 100;

        subtotal += itemTotal - discountAmount;
    }

    let total = subtotal * (1 + taxRate / 100);

    return Math.round((total + Number.EPSILON) * 100) / 100;
}
console.log(calculateCartTotal([{ price: 10, quantity: 2, discount: 10 }, { price: 20, quantity: 1, discount: 5 }], 8.25));