
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    for (let k = 0; k < arr1.length + arr2.length; k++) {
        if (i >= arr1.length) {
            result.push(arr2[j]);
            j++;
        }
        else if (j >= arr2.length) {
            result.push(arr1[i]);
            i++;
        }
        else if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));