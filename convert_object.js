
function toQueryString(params) {
    let result = "";
    let entries = Object.entries(params);

    for (let i = 0; i < entries.length; i++) {
        let key = encodeURIComponent(entries[i][0]);
        let value = encodeURIComponent(entries[i][1]);

        if (i === 0) {
            result = key + "=" + value;
        } else {
            result += "&" + key + "=" + value;
        }
    }
    return result;
}
console.log(toQueryString({ name: "John Doe", age: 30, city: "New York" }));
