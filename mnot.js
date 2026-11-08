function maxTasks(tasks) {
    tasks.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastFinish = -Infinity;

    for (let i = 0; i < tasks.length; i++) {
        const [start, finish] = tasks[i];

        if (start >= lastFinish) {
            count++;
            lastFinish = finish;
        }
    }
    return count;
}
console.log(maxTasks([[1, 3], [2, 5], [4, 6]]));