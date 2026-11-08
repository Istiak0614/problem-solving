
function daysBetweenDates(date1, date2) {
    let d1 = new Date(date1 + "T00:00:00Z");
    let d2 = new Date(date2 + "T00:00:00Z");

    let difference = Math.abs(d2.getTime() - d1.getTime());

    let days = difference / (1000 * 60 * 60 * 24);

    return days;
}
console.log(daysBetweenDates("2023-01-01", "2023-01-31"));