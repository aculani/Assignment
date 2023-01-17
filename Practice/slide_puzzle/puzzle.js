


const winPuzzle = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
];
const puzzle = [
    [4, 5, 6],
    [7, 0, 8],
    [3, 2, 1],
];
let zeroX = 1,
    zeroY = 1;
let i = 0;
const createTile = (val, x, y) => {
    const tileNode = document.createElement("div");
    tileNode.classList.add("tile");
    tileNode.setAttribute('x', x);
    tileNode.setAttribute('x', y);
    tileNode.innerHTML = val;
    return tileNode;
};
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

for (let rowItems of puzzle) {

    for (let colItems of rowItems) {
        const tile = createTile(colItems, i, j)
        wrapper.appendChild(tile)

    }
}