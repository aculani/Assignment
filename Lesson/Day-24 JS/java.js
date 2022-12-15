function getRandomNumber(min, max) {
    return parseInt(Math.abs(max - min) * Math.random() + min);
}
function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return `rgb(${red},${green},${blue})`;
}



