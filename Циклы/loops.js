// for (; ;) console.log('Бесконечный цикл');
// for (; Math.random() >= 0.5;) console.log('И ещё разок');//завершение с вероятностью 50%
// for (let i = 10; ; ++i) console.log(i); //тоже бесконечный цикл
// // ___________________________выносим инициализатор за пределы цикла, а завершающую инструкцию — в тело
// let i = 10;
// for (; i > 0;) {
//     console.log('i = ' + i--);
// }

// Последовательность чисел Фибонначчи
let fibo = [1, 1];

for (let i = 1; i < 20; ++i) {
    fibo.push(fibo[i] + fibo[i - 1]);
}
console.log(fibo);

// ______________арифметическая прогрессия
let arifm = [2, 7];

for (let i = 1; i < 7; ++i) {
    arifm.push(arifm[i] + (arifm[arifm.length - 1] - arifm[arifm.length - 2]));
}

console.log(arifm);

// ______________геометрическая прогрессия
let geometr = [2, 7];

for (let i = 1; i < 7; ++i) {
    geometr.push(geometr[i] * (geometr[geometr.length - 1] / geometr[geometr.length - 2]));
}

console.log(geometr);