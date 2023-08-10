function evenOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const inputNumber = 98;
const evenOddNumber = evenOdd(inputNumber);
console.log(evenOddNumber);

const inputNumber2 = 117;
const evenOddNumber2 = evenOdd(inputNumber2);
console.log(evenOddNumber2);