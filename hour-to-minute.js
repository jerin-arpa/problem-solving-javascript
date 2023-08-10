function hourToMinute(hour) {
    const time = hour * 60;
    return time;
}

const hour = 5;
const result = hourToMinute(hour);
console.log(result);