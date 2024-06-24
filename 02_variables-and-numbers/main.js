// Площадь прямоугольника по координатам двух точек
let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;

let a = Math.abs(x2 - x1);
let b = Math.abs(y2 - y1);

let S = a * b;

console.log('Задача 1. Найти площадь прямоугольника по координатам двух точек.');
console.log('Координаты первой точки: (',x1,';', y1,');');
console.log('Координаты второй точки: (',x2,';', y2,');');
console.log('Чтобы посчитать площадь прямоугольника, надо перемножить длины двух его сторон. Нам не известно, какова длина каждой стороны прямоугольника, но нам известны коородинаты двух точек, по которым мы и можем найти длину каждой стороны прямоугольника. Разница координат точек и даст нам длину стороны.');
console.log('Разница по оси ординат Х и будет длиной одной стороны a, то есть x2 - x1 = ', a);
console.log('Разница по оси ординат Y будет длиной другой стороны b, то есть y2 - y1 = ', b);
console.log('Длины знаем, умножаем, и таким образом находим искомую площадь S = a * b.');
console.log('Площадь прямоугольника: ', S,'.');

// Сравнение дробной части чисел
let first = 13.123456789;
let second = 2.123;
let digits = 5;

let NormaFirst = Math.trunc(first % 1 * Math.pow(10, digits));
let NormaSecond = Math.trunc(second % 1 * Math.pow(10, digits));

console.log('Задача 2. Сравнить дробную часть двух чисел с округлением до нужного расположения запятой....');
console.log('Первое число: ', first, ';');
console.log('Второе число: ', second, ';');
console.log('Двигаем запятую на определенное количество символов, например, на ', digits, ';');
console.log('Чтобы получить дробную часть числа, нам надо выполнить действие остаток от деления числа на единицу, и таким образом мы просто отбросили целую часть числа. У первого числа это: ', first % 1, ';', 'у второго: ', second % 1, '.');
console.log('Сравниваем к примеру только первые ', digits, 'цифр, то есть двигаем запятую на это количество вправо, а затем отбрасываем дробную часть если таковая ещё имеется, и сравниваем.')
console.log('У первого числа получается: ', first % 1 * Math.pow(10, digits));
console.log('У второго числа получается: ', second % 1 * Math.pow(10, digits));
console.log('Далее отбрасываем дробь, не округляем, а просто оставляем целую часть числа:');

console.log('Это с первого числа: NormaFirst = ', NormaFirst);
console.log('Это со второго числа: NormaSecond = ', NormaSecond);

console.log('Сравнием первое число относительно второго, если true, то правда, если false, то ложь');

console.log('больше?', NormaFirst > NormaSecond);
console.log('меньше?', NormaFirst < NormaSecond);
console.log('больше или равно?', NormaFirst >= NormaSecond);
console.log('меньше или равно?', NormaFirst <= NormaSecond);
console.log('равно?', NormaFirst === NormaSecond);
console.log('не равно?', NormaFirst !== NormaSecond);

// Генератор двух случайных чисел и их сравнение

let n = 100;
let m = -200;

let range = Math.abs(n - m);

let min = Math.min(n, m);

let numberInRange1 = Math.round(Math.random() * range);
let numberInRange2 = Math.round(Math.random() * range);

let numberX1 = min + numberInRange1;
let numberX2 = min + numberInRange2;

console.log('Задача 3. Генератор двух случайных чисел в определенном диапозоне и сравнение этих чисел.');
console.log('Я выбрал диапозон от ', n, 'до', m);
console.log('Первое случайное число: numberX1 = ', numberX1);
console.log('Второе случайное число: numberX2 = ', numberX2);

console.log('Сравнение этих чисел, первое относительно второго:');
console.log('больше?', numberInRange1 > numberInRange2);
console.log('меньше?', numberInRange1 < numberInRange2);
console.log('больше или равно?', numberInRange1 >= numberInRange2);
console.log('меньше или равно?', numberInRange1 <= numberInRange2);
console.log('равно?', numberInRange1 === numberInRange2);
console.log('не равно?', numberInRange1 !== numberInRange2);
