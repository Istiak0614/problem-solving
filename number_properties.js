function countNumberProperties(numbers) {
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            even++;
        } else {
            odd++;
        }
        if (number > 0) {
            positive++;
        } else if (number < 0){
            negative++;
        }
    }
    return {
        even: even,
        odd: odd,
        positive: positive,
        negative: negative
    };
}
console.log(countNumberProperties([-5,0,3,-4,1]))