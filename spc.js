function generateProfileCard(user) {
    const name = user.name ?? "Anonymous";
    const city = user.address?.city ?? "Unknown";
    const followers = user.social?.followers ?? 0;

    return `${name} | ${city} | followers: ${followers}`;
}
console.log(generateProfileCard({ name: "Alice", address: { city: "Wonderland" }, social: { followers: 150 } }));