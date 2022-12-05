const names = ['Эрмүүн', 'Тэмүүлэн', 'Өсөхбаяр', 'Сүхбат',
    'Ганболд', 'Амур', 'Дөлгөөн', 'Намуунбайгаль',
    'Балжинням', 'Ананд', 'Наранцэцэг', 'Аймерген',
    'Тэнгисболд', 'Сэд-Эрдэнэ', 'Биндэрья', 'Индра',
    'Далайхүү', 'Жавхлант',];

let longIndex = 0;
for (let i = 1; i < names.length; i++) {
    if (names[longIndex].length < names[i].length) {
        longIndex = i;
    }
}
console.log(names[longIndex]);


let sum = 0;
for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'Т'
    ) sum++;

}
console.log(sum);

const result = [60, 70, 80, 90, 95, 92, 70, 76];
const dun = ['D', 'C', 'B', 'A'];
for (let i = 0; i < result.length; i++) {
    if (result[i] < 70
    ) { console.log(result[i], dun[0]) }
    else if (result[i] < 80
    ) { console.log(result[i], dun[1]) }
    else if (result[i] < 90
    ) { console.log(result[i], dun[2]) }
    else if (result[i] < 100
    ) { console.log(result[i], dun[3]) }
}


