function isLeapYear(year) {
    if (year % 400 == 0) {
        return 'This year is leap year';
    }
    else if (year % 4 == 0) {
        if (year % 100 == 0) {
            return 'This year is not leap year';
        }
        return 'This year is leap year';
    }

    else {
        return 'This year is not leap year';
    }
}

const years = 1900;
const result = isLeapYear(years);
console.log(result);