
const tileCount = 4;

let score = 0;
let highScore = 0;
function updateScore(points) {
    score += points;
    scoreTarget.innerHTML = score;
    return score
}
function highScorecal(score) {
    if (highScore <= score) {
        highScore = score;
    }
    highTarget.innerHTML = highScore;
}


const scoreTarget = document.querySelector("#scoreTarget")
scoreTarget.innerHTML = score;
const highTarget = document.querySelector("#highTarget")
highTarget.innerHTML = highScore;


const parent = document.querySelector("ul");
function getRandomNumber(min, max) {
    return Math.round(Math.abs(max - min) * Math.random() + min);
}
function getRandomColor() {
    //RGB
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return [red, green, blue];
}
let x = 100;
function getDifferentColor(colors) {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = newColors[random];
    if (color > 126) {
        color -= x;
    } else {
        color += x;
    }
    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`
}






function tileClick() {

}


function redDraw() {
    parent.innerHTML = "";
    const colors = getRandomColor();

    const randomIndex = getRandomNumber(0, tileCount - 1);

    for (let i = 0; i < tileCount; i++) {
        const li = document.createElement("li");
        const isNormal = i !== randomIndex;
        if (i !== randomIndex) {
            li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]},
        ${colors[2]})`
            parent.appendChild(li);
        } else {
            li.style.backgroundColor = getDifferentColor(colors);
        }
        li.addEventListener("click", function () {
            if (!isNormal) {
                updateScore(1);
                x = x - 5;
                redDraw();


            }
            else {
                score = 0;
                updateScore(0);
                alert("Game Over");
                redDraw();
                highScorecal(score);
            }
        })



        parent.appendChild(li);
    }
}


redDraw();