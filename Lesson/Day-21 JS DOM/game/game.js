
const tileCount = 9;
let isTimeOut = false;
let score = 0;
let highScore = 0;
let seconds = 0;
let minutes = 0;


function updateTimer() {
    seconds += 1;
    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
    }
    timeTarget.innerHTML = `${minutes}:${seconds}`;
}


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
const timeTarget = document.querySelector("#timeTarget")



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


const timer = setTimeout(function () {
    isTimeOut = true;
    if (highScorecal(score) <= updateScore(score)) {
        highScorecal(score) = updateScore();
        score = 0;
        updateScore(0);
    }
}, 5000);



function tileClick() {

}


function redDraw() {
    parent.innerHTML = "";
    const colors = getRandomColor();

    const randomIndex = getRandomNumber(0, TILE_COUNT - 1);

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
            if (!isTimeOut) {
                if (!isNormal) {
                    updateScore(1);
                    if (score > 5) {
                        clearTimeout(timer);
                    }
                    x = x - 2;
                    redDraw();


                }
                else {
                    if (highScorecal(score) <= updateScore(score)) {
                        highScorecal(score) = updateScore();
                    }
                    score = 0;
                    updateScore(0);
                    alert("Game Over");
                    redDraw();

                    highScorecal(score);
                }
            }
            else {
                alert("Time run out your score:", score)
            }
        })
        parent.appendChild(li);
    }
}

redDraw();

setInterval(updateTimer, 1000)


