function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const miles = 2;
const kilo = milesToKilometer(miles);
console.log(kilo);