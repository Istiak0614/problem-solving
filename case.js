function titleCaseSentence(str) {
    str = str.trim();

    if (str === ""){
        return "";
    }
    return str
        .toLowerCase()
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(titleCaseSentence("hello world"))