const sudoku = [
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [7, 0, 8, 0, 0, 0, 0, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0],
    [5, 0, 9, 0, 0, 0, 4, 0, 0]
];
const tableTarget = document.querySelector(`#tableTarget`);
const tbody = document.createElement('tbody');
let chosenTd;


for (let row = 0; row < sudoku.length; row++) {
    const cols = sudoku[row];
    const tr = document.createElement('tr');
    for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td');
        td.setAttribute(x, row);
        td.setAttribute(y, col);

        if (cols[col] !== 0) {
            td.className = 'default';
            td.innerHTML = cols[col];
        }
        else {
            td.addEventListener('click', function (e) { chosenTd = e.target })
            if (chosenTd) {
                chosenTd.classList.remove('active');
            }
            chosenTd = e.target;
            e.target.classList.add('active');
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
tableTarget.appendChild(tbody);



// const validKeys = '123456789';

// document.addEventListener('keypress', function (e) {
//     const key = e.key;
//     if (validKeys.includes(key)) {
//         if (key === 0) {
//             chosenTd.innerHTML = ' ';
//         } else {
//             chosenTd.innerHTML = key;
//         }
//     }
// });

