// const rawEgg = 'tuuhii undug';
// function cookEgg(rawEgg) {
//     const isForgetToFlip = true;
//     const promise = new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (!isForgetToFlip) {
//                 resolve('Cooked egg');
//             }
//             else {
//                 reject('Half burnt egg');
//             }
//         }, 2000)

//     });
//     return promise
// }

// let result = rawEgg;
// cookEgg(rawEgg)
//     .then((res) => {
//         result = res;
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// function getAnEgg() {
//     const eggCount = 12;
//     const promise = new Promise((resolve, reject) => {
//         if (eggCount > 0) {
//             setTimeout(() => { resolve('true') }, 1000);

//         }
//         else {
//             reject('Run out of egg');
//         }
//     });
//     return promise;
// }

// function pickAnPot() {
//     const isPotInUse = false;
//     const promise = new Promise((resolve, reject) => {
//         if (!isPotInUse) {
//             setTimeout(() => { resolve(true) }, 1000);
//         }
//         else {
//             reject('Pot is in use');
//         }
//     });
//     return promise;
// }

// function fillWater() {
//     const isWaterRunning = true;
//     const promise = new Promise((resolve, reject) => {
//         if (isWaterRunning) {
//             setTimeout(() => { resolve(true) }, 1000);
//         } else {
//             reject('No water');
//         }
//     });
//     return promise;
// }

// function startStove() {
//     const isStoveWorking = true;
//     return new Promise((resolve, reject) => {
//         if (isStoveWorking) {
//             resolve(true)
//         } else {
//             reject('Stove not working');
//         }
//     });
// }

// function boilEgg() {
//     const timer = 10;
//     return new Promise((resolve, reject) => {
//         if (timer >= 10) {
//             resolve('CookedEgg')
//         } else {
//             reject('Raw egg timer was too short')
//         }
//     });
// }


// const CookedEgg = getAnEgg()
//     .then(() => {
//         console.log('picked an egg');
//         pickAnPot();
//     })
//     .then(() => {
//         console.log('picked a pot');
//         fillWater();
//     })
//     .then(() => {
//         console.log('filled pot');
//         startStove();
//     })
//     .then(() => {
//         console.log('started stove');
//         boilEgg();
//     })
//     .then((res) => {
//         console.log('boiled egg');
//     })
//     .catch((err) => {
//         console.log(err)
//     })


const puzzle = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [0, 1, 2, 3],
    [4, 5, 6, 7],
]
let found = 0;
let flippedItems;
let chosenCard=0;

function getTile(value) {
    const tile = document.createElement('li');
    const tileFront = document.createElement('div');
    tileFront.innerHTML = value;
    tileFront.classList.add('front');
    tile.appendChild(tileFront);
    const tileBack = document.createElement('div');
    tileBack.innerHTML = '';
    tileBack.classList.add('back');
    tile.appendChild(tileBack);
    tile.addEventListener('click',);
    return tile;
}






const gameTarget = document.querySelector(`#gameTarget`);

for (let row = 0; row < puzzle.length; row++) {
    const rowItems = puzzle[row];
    for (let col = 0; col < rowItems.length; col++) {
        gameTarget.appendChild(getTile(rowItems[col])
        );
    }  
}



