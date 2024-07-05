
// Угадать число.
let a = Math.pow(10, 3);

let randomNumber = Math.ceil(Math.random() * a);

// alert(`Угадать число: ${randomNumber}`);

let guess = prompt('Угадайте число до 1 000, у вас 10 попыток;)');
let index = -1;

for (i = 1; i < 10; i++) {
    if (guess === null) {
        alert(`Игра окончена..........`); break
    }
    else if (guess.replace(/\d/g, '').length || guess === '') {
        alert(`Вы ничего не ввели, или ввели не цифры.... Попробуйте ещё раз))) Итак, начнём сначала;)`); break
    }
    else if (guess > a) {
        alert('Ваше число должно быть не больше 1 000.');
        guess = prompt(`Введите число, ${10 - i} попытки`); continue
    } else if (guess < randomNumber) {
        alert('Ваше число меньше.');
        guess = prompt(`Введите число, ${10 - i} попытки`); continue
    } else if (guess > randomNumber) {
        alert('Ваше число больше.');
        guess = prompt(` Введите число, ${10 - i} попытки`); continue
    } else (guess === randomNumber)
        index = 1; break
}
    
if (index !== 1) {
    alert(`Вы проиграли....Загаданное число ${randomNumber}. Чтобы попробовать еще раз: обновите страницу. Если надоело: закройте вкладу.`);
} else {
    alert(`Вы угадали! Ваше число ${guess} равно загаданному числу ${randomNumber}. Чтобы попробовать еще раз: обновите страницу. Если надоело: закройте вкладу.`);
}

