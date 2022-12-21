function prepareCoffee() {
    const coffeePromise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Prepared coffee') }, 1000);
    });
    return coffeePromise;
}
function fryEgg() {
    const eggPromise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Fried egg') }, 1000);
    });
    return eggPromise;
}
async function startMorning() {
    const coffee = await prepareCoffee();
    console.log(coffee);
    const egg = await fryEgg();
    console.log(egg);
}
startMorning();


