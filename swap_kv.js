function swapKeysAndValues(obj) {
    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        result[String(value)] = key;
    }
    return result;
}
console.log(swapKeysAndValues({ a: 1, b: 2, c: 3 }));