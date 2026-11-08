function countConnectedFriends(friendships, startPerson) {
    const graph = new Map();

    for (let i = 0; i < friendships.length; i++) {
        const [person1, person2] = friendships[i];

        if (!graph.has(person1)) {
            graph.set(person1, []);
        }

        if (!graph.has(person2)) {
            graph.set(person2, []);
        }

        graph.get(person1).push(person2);
        graph.get(person2).push(person1);
    }

    const visited = new Set();
    const queue = [startPerson];

    visited.add(startPerson);

    for (let i = 0; i < queue.length; i++) {
        const person = queue[i];

        for (const friend of graph.get(person) || []) {
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }
    return visited.size;
}
console.log(countConnectedFriends(
    [
        ["Alice", "Bob"],
        ["Bob", "Charlie"],
        ["Charlie", "David"]
    ],
    "Alice"
));