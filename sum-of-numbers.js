function sumOfNumber(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
sumOfNumber(7);
