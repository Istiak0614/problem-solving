
function longestIncreasingStreak(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let currentStreak = 1;
    let maxStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    }
    return maxStreak;
}
console.log(longestIncreasingStreak([1, 2, 3, 2, 4, 5, 6])); 
