function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}

const result = factorial(7);
console.log(result);