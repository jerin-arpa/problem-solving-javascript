// array = [5,7,8,10,45,30]

function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumber = [5, 7, 8, 10, 45, 30];
getSumOfAnArray(myNumber)