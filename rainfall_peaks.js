function findRainfallPeaks(rainfall) {
    const peaks = [];

    for (let i = 1; i < rainfall.length - 1; i++) {
        if (
            rainfall[i] > rainfall[i - 1] &&
            rainfall[i] > rainfall[i + 1]
        ) {
            peaks.push(i + 1);
        }
    }
    return peaks;
}
console.log(findRainfallPeaks([0, 2, 1, 3, 0, 4, 2]));