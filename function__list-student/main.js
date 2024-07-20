// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let toDate = new Date();
toDate.setHours(0, 0, 0, 0);
let toDateYear = toDate.getFullYear();
let toDateMonth = toDate.getMonth();
let toDateday = toDate.getDate();

// let studentAge;
// function getStudentAge(studentYear = 1990, studentMonth = 12, studentDay = 25) {
    
//     studentAge = toDateYear - studentYear;
    
//     if (toDateMonth < studentMonth) {
//         studentAge = studentAge - 1;
//     } else if (toDateMonth == studentMonth && toDateday < studentDay) {
//         studentAge = studentAge - 1;
//     } else {
//         studentAge = toDateYear - studentYear;
//     }
//     return studentAge;
// }

// console.log(getStudentAge());;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write(`<h2>Список студентов.</h2>`);

let index = 0;

function printStudent(studentName = 'Иван', studentHeight = 150, studentFaculty = 'Исторический', studentYear = prompt('Введите год рождения:', '1920'), studentMonth = prompt('Введите месяц рождения:', '01'), studentDay = prompt('Введите число рождения:', '01')) {

    let studentAge = toDateYear - studentYear;
    
    if (toDateMonth < studentMonth) {
        studentAge = studentAge - 1;
    } else if (toDateMonth == studentMonth && toDateday < studentDay) {
        studentAge = studentAge - 1;
    } else {
        studentAge = toDateYear - studentYear;
    }

    index++;
    document.write(`
        <p>
            <span>${index})</span> Имя студента: <strong>${studentName}</strong>.<br>
            Дата рождения: <strong>${studentDay}.${studentMonth}.${studentYear}</strong>.<br>
            Возраст: <strong>${studentAge}</strong>.<br>
            Рост: <strong>${studentHeight}</strong>.<br>
            Факультет: <strong>${studentFaculty}</strong>.
        </p>`)
    return
}

printStudent('Коля', 185, 'Исторический', '2005', '12', '03');
printStudent('Дима', 170, 'Математический', '1991', '12', '23');
printStudent('Саша', 190, 'Юридический', '2000', '05', '24');
printStudent('Таня', 175, 'Биологический', '2004', '12', '05');
printStudent();
// printStudent();
// printStudent();
// printStudent();
// printStudent();