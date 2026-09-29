function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    const moneyAfterCake = totalMoney - cakeCost;

    if (moneyAfterCake < donutCost) {
        return moneyAfterCake;
    }

    const donuts = Math.floor(moneyAfterCake / donutCost);
    const donutCostTotal = donuts * donutCost;

    return moneyAfterCake - donutCostTotal;
}
console.log(calculateRemainingMoney(50,60,7))