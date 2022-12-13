let score = 0;
const TIMER = 2;
const TILE_COUNT = 9;
let MILLISECONDS = 0;
let SECONDS = TIMER;


const scoreTarget = document.querySelector("#scoreTarget");
const parent = document.querySelector("ul");
const timerTarget = document.querySelector("#timer");
const gameOverScreen = document.querySelector("#gameOverScreenTarget");
console.log(gameOverScreen);

function updateTimer() {
    if (MILLISECONDS <= 0) {
        SECONDS--;
        MILLISECONDS = 990;
    }
    MILLISECONDS -= 10;

    if (MILLISECONDS < 0 && SECONDS < 0) {
        MILLISECONDS = 0;
        clearInterval(countDown);
    }

    let timerResult = '';
    if (SECONDS < 10) {
        timerResult += '0';
    }
    timerResult += SECONDS;
    timerResult += ":";
    if (MILLISECONDS < 100) {
        timerResult += '0';
    }
    if (MILLISECONDS < 10) {
        timerResult += '0';
    }
    if (SECONDS < 0) {
        clearInterval(countDown);
        gameOver();

    }
    timerResult += '' + MILLISECONDS;
    timerTarget.innerHTML = timerResult;

}



const countDown = setInterval(updateTimer, 10);

function updateScore(point) {
    score += point;
    scoreTarget.innerHTML = score;
}
function gameOver() {
    gameOverScreen.classList.add(`active`);
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
    // RGB
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return [red, green, blue];
}

function getDifferentColor(colors) {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = newColors[random];
    if (color > 126) {
        color -= 100;
    } else {
        color += 100;
    }
    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

function reDraw() {
    parent.innerHTML = "";
    const colors = getRandomColor();

    const randomIndex = getRandomNumber(0, TILE_COUNT - 1);

    for (let i = 0; i < TILE_COUNT; i++) {
        const li = document.createElement("li");
        const isNormal = i !== randomIndex;
        if (isNormal) {
            li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        } else {
            li.style.backgroundColor = getDifferentColor(colors);
        }
        li.addEventListener("click", function () {
            if (!isNormal) {
                updateScore(1);
                reDraw();
            } else {
                updateScore(-2);
            }
        });
        parent.appendChild(li);
    }
}

reDraw();

