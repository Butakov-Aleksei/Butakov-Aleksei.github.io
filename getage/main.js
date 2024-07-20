
// let index = 0;
// let currentDate = new Date();


// document.write(`<h1>Список студентов</h1>`);

// let studentName = 'Петя';
// let studentBirthday = new Date(1995, 12, 3);
// let studentAge = (currentDate - studentBirthday);
// console.log(studentAge);
// let studentHeight = 185;
// let studentFaculty = 'Исторический';

// document.write(`
//     <p>
//         ${index}) Имя студента: <strong>${studentName}</strong>; Возраст: <strong>${studentAge}</strong>; Рост: <strong>${studentHeight}</strong>; Факультет: <strong>${studentFaculty}</strong>.
//     </p>
//     `)

function getCurrentAge(birthdayYear = 1970, birthdayMonth = 1, birthdayDay = 1) {
    
    let currentDate = new Date();  //дата сейчас
    
    currentDate.setHours(0, 0, 0, 0);  //дата сейчас только год, месяц, и число
    
    let currentYear = currentDate.getFullYear(); //год сегодня
    let currentMonth = currentDate.getMonth() + 1; //месяц сегодня
    let currentDay = currentDate.getDate(); //число сегодня
    
    // console.log(currentDate);  //Выводим в консоль: текущую дату
    // console.log(currentYear);  //Выводим в консоль: текущий год
    // console.log(currentMonth); //Выводим в консоль: текущий месяц
    // console.log(currentDay);   //Выводим в консоль: текущее число
    
    // -----------------------------------------------------------
    
    // let birthdayDate = new Date("1959-07-03"); //дата рождения
    
    // birthdayDate.setHours(0, 0, 0, 0);  //дата рождения только год, месяц, и число
    
    // birthdayYear = 1974; //год рождения
    birthdayYear = prompt('Введите год рождения'); //год рождения
    // // birthdayDate.getFullYear(); //год рождения
    // birthdayMonth = 1; //месяц рождения
    birthdayMonth = prompt('Введите месяц рождения'); //месяц рождения
    // // birthdayDate.getMonth() + 1; //месяц рождения
    // birthdayDay = 1; //число рождения
    birthdayDay = prompt('Введите число рождения'); //число рождения
    // // birthdayDate.getDate(); //число рождения
    
    // console.log(birthdayDate);  //Выводим в консоль: дату рождения
    // console.log(birthdayYear);  //Выводим в консоль: год рождения
    // console.log(birthdayMonth); //Выводим в консоль: месяц рождения
    // console.log(birthdayDay);   //Выводим в консоль: число рождения
    
    // -----------------------------------------------------------------
    
    let currentAge = currentYear - birthdayYear;
    
    if (currentMonth < birthdayMonth) {
        currentAge = currentAge - 1;
        // console.log("раз");
    } else if (currentMonth == birthdayMonth && currentDay < birthdayDay) {
        currentAge = currentAge - 1;
        // console.log("два");
    } else {
        currentAge = currentYear - birthdayYear;
        // console.log("три");
    }
    
    console.log(currentAge);
    return currentAge;
}

getCurrentAge();