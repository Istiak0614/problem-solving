function reconcileInventory(initialInventory, transactions) {
    const inventory = { ...initialInventory };

    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];

        const productId = transaction.productId;
        const quantity = transaction.quantity;

        if (!Object.hasOwn(inventory, productId)) {
            Object.defineProperty(inventory, productId, {
                value: 0,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }

        if (transaction.type === "in") {
            inventory[productId] += quantity;
        }
        else if (transaction.type === "out") {
            inventory[productId] = Math.max(
                0,
                inventory[productId] - quantity
            );
        }
    }
    return inventory;
}
console.log(reconcileInventory(
    { "A": 10, "B": 5 },
    [
        { "productId": "A", "quantity": 2, "type": "in" },
        { "productId": "B", "quantity": 3, "type": "out" }
    ]
));