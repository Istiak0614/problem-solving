function countWordFrequencies(sentence) {
    const words = sentence.toLowerCase().match(/[a-z0-9]+/g) || [];
    const frequencies = {};

    for (const word of words) {
       if (frequencies[word]) {
        frequencies[word]++;
    } 
    else {
    frequencies[word] = 1;}
    }
    return frequencies;
}
console.log(countWordFrequencies("Hello world, hello!"))