function getDayOfWeek(year, month, day) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const date = new Date(year, month - 1, day);

    return days[date.getDay()];
}
console.log(getDayOfWeek(2023, 10, 1)); 