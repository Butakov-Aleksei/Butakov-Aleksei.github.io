// // (function () {
// //   //здесь пишем код
// //   document.addEventListener('DOMContentLoaded', function () {
// //     //здесь находим элементы
// //   })
// // })()

// //Длина строки .length
// let str = "Hello";
// console.log(str.length);
// console.log("Очень длинная строка".length);

// //Индекс строки
// console.log(str[0]); //H
// console.log(str[1]); //e
// console.log(str[2]); //l
// console.log(str[3]); //l
// console.log(str[4]); //o
// console.log(str[5]); //undefined
// console.log(str[str.length-1]); //последнее значение строки
// console.log(str[0] + str[1] + str[2] + str[3] + str[4]); // получение строки из переменной с помощью индексов и конкатенации

// //Метод slice(start, end) возвращает подстроку
// console.log(str.slice(0, 2));//He
// console.log(str);//переменная осталась прежней //Hello
// console.log('Очень длинная строка'.length);//длина строки 20
// console.log('Очень длинная строка'.slice(6, 20));//длинная строка

// //Методы toUpperCase() и toLowerCase() — преобразование в верхний и нижний регистры соответственно
// let str_1 = "Какой То Текст с рАзным рЕГИстроМ";
// let toLowerCaseStr_1 = str_1.toLowerCase();//делает строку в нижний регистр
// let toUpperCaseStr_1 = str_1.toUpperCase();//делает строку в верхний регистр
// console.log(toLowerCaseStr_1);//какой то текст с разным регистром
// console.log(toUpperCaseStr_1);//КАКОЙ ТО ТЕКСТ С РАЗНЫМ РЕГИСТРОМ

// //Метод trim() — убирает пробелы слева и справа строки
// let str_2 = "      строка с пробелами        ";
// let trimStr_2 = str_2.trim()//убирает пробелы по краям строки
// console.log(str_2);//строка с пробелами (без использования trim — с пробелами)
// console.log(trimStr_2);//строка с пробелами (с использованием trim без пробелов)

// //Цепочка методов и конкатенация
// let normalString = trimStr_2[0].toUpperCase() + trimStr_2.slice(1).toLowerCase();//убираем пробелы, берем первую букву и делаем её большой + убираем пробелы, берём строку без первой буквы и делаем её маленькими буквами
// console.log(normalString);//Строка с пробелами(получаем строку без пробелов, и первая буква всегда заглавная)
