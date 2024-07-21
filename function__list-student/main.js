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

let index = 0;

let studentAge = 0;
let summStudentAge = 0;
let middleAge = 0;

let maxStudentAge = 0;
let minStudentAge = 0;

let studentNameMaxAge = '';
let studentNameMinAge = '';

let studentNameMaxAgeFac = '';
let studentNameMinAgeFac = '';

let studentFacultyArr = [];
let studentFacultyDefault = '';


let studentAgeArr = [];

document.write(`<h2>Список студентов.</h2>`);

function printStudent(studentName = 'Иван', studentHeight = 150, studentFaculty = 'Исторический', studentYear = prompt('Введите год рождения:', '1920'), studentMonth = prompt('Введите месяц рождения:', '01'), studentDay = prompt('Введите число рождения:', '01')) {
    
    index++;
    studentAge = toDateYear - studentYear;
    
    if (toDateMonth < studentMonth) {
        studentAge = studentAge - 1;
    } else if (toDateMonth == studentMonth && toDateday < studentDay) {
        studentAge = studentAge - 1;
    } else {
        studentAge = toDateYear - studentYear;
    }

    summStudentAge = summStudentAge + studentAge;
    middleAge = Math.round(summStudentAge / index);
// ---------------------------------------------------------
    studentAgeArr.push(studentAge);
    studentFacultyArr.push(studentFaculty);
    
    if (maxStudentAge == 0) {
        maxStudentAge = studentAge;
        studentNameMaxAge = studentName;
        studentNameMaxAgeFac = studentFaculty;
    } else {
        maxStudentAge = Math.max(maxStudentAge, Math.max(studentAgeArr[studentAgeArr.length - 1], studentAgeArr[studentAgeArr.length - 2]));
        if (studentAge == maxStudentAge) {
            studentNameMaxAge = studentName;
            studentNameMaxAgeFac = studentFaculty;
        }
    }
    
    if (minStudentAge == 0) {
        minStudentAge = studentAge;
        studentNameMinAge = studentName;
        studentNameMinAgeFac = studentFaculty;
    } else {
        minStudentAge = Math.min(minStudentAge, Math.min(studentAgeArr[studentAgeArr.length - 1], studentAgeArr[studentAgeArr.length - 2]));
        if (studentAge == minStudentAge) {
            studentNameMinAge = studentName;
            studentNameMinAgeFac = studentFaculty;
        }
// ---------------------------------------------------------------
}
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
printStudent('Даша', 175, 'Геологический', '2004', '10', '03');
printStudent('Саша', 190, 'Юридический', '2000', '05', '24');
printStudent('Света', 181, 'Краеведческий', '2006', '09', '24');
printStudent('Миша', 186, 'Медицинский', '1999', '09', '21');
printStudent('Дима', 170, 'Математический', '1991', '12', '23');
printStudent('Наташа', 178, 'Биологический', '2008', '05', '15');
console.log(studentAgeArr);
console.log(studentFacultyArr);
// printStudent();
// printStudent();
// printStudent();
document.write(`<hr>`)
document.write(`
    <p class='total'>
        Всего студентов: <strong>${index}.</strong><br>
        Средний возраст студентов: <strong>${middleAge}.</strong><br>
        Самый старший(ая): <strong>${studentNameMaxAge}</strong>, ему(ей) <strong>${maxStudentAge}.</strong>Учится на <strong>${studentNameMaxAgeFac}</strong>.<br>
        Самый младший(ая): <strong>${studentNameMinAge}</strong>, ему(ей) <strong>${minStudentAge}.</strong>Учится на <strong>${studentNameMinAgeFac}</strong>.<br>
        Большая часть студентов учится на: <strong>${studentFacultyDefault}.</strong>
    </p>
    `)