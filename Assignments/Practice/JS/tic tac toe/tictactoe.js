const tic = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const tableTarget = document.querySelector(`#tableTarget`);
const tbody = document.createElement('tbody');
let attempt = 0;

for (let row = 0; row < tic.length; row++) {
    const cols = tic[row];
    const tr = document.createElement('tr');
    for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td');
        td.setAttribute('x', row);
        td.setAttribute('y', col);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
tableTarget.appendChild(tbody);

tbody.addEventListener('click', function (e) {

    e.target.innerHTML = attempt % 2 === 0 ? 'X' : 'O';
    attempt++;
    const x = Number(e.target.getAttribute('x'));
    const y = Number(e.target.getAttribute('y'));
    const input = e.target.innerHTML;
    tic[x][y] = input;
    console.log(tic);

    const colDuplicates = isDuplicatedByCol(x, y, input);
    const rowDuplicates = isDuplicatedByRow(x, y, input)
    let hasError = colDuplicates === true || rowDuplicates === true;
    if (hasError === true) {
        setTimeout(() => alert('Ylagch todorloo'), 500);

    }
    console.log(hasError);
});

function isDuplicatedByRow(x, y, input) {

    let i = 0;
    let winner = false;
    if (tic[i][y] === tic[i + 1][y] && tic[i][y] === tic[i + 2][y]) {
        winner = true;
    }
    return winner;

}
function isDuplicatedByCol(x, y, input) {

    let i = 0;
    let winner = false;
    if (tic[x][i] === tic[x][i + 1] && tic[x][i] === tic[x][i + 2]) {
        winner = true;
    }
    else {
        winner = false;
    }
    return winner;
}
function isDuplicatedByDia1(x, y, input) {

    let i = 0;
    let winner = false;
    if (tic[0][0] === tic[1][1] && tic[0][0] === tic[2][2]) {
        winner = true;
    }
    else {
        winner = false;
    }
    return winner;
}
function isDuplicatedByDia2(x, y, input) {

    let i = 0;
    let winner = false;
    if (tic[2][0] === tic[1][1] && tic[2][0] === tic[0][2]) {
        winner = true;
    }
    else {
        winner = false;
    }
    return winner;
}
