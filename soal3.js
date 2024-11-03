function sumArray(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([]));               
