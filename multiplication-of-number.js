function multiplicationOfNumbers(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}

const result = multiplicationOfNumbers(7);
console.log(result);