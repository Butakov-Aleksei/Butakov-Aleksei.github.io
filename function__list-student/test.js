
// let studentFacultyArr = ['Математический', 'Математический', 'Исторический', 'Исторический', 'Биологический', 'Геологический', 'Юридический', 'Медицинский']; //7

// let studentFacultyDefault;

// for (i = 0; i < studentFacultyArr.length; i++) {
//     for (j = 1; j < studentFacultyArr.length - 1; j++) {
//         if (studentFacultyArr[i] == studentFacultyArr[j]) {
//             let temp = studentFacultyArr[i];
//             studentFacultyArr[i] = studentFacultyArr[j]
//             studentFacultyArr[j] = temp
           
//             studentFacultyDefault = temp
//        }
//     }
// }

// console.log(studentFacultyDefault);


let arr = [2, 5, 1, 6, 5, 9, 7, 3, 5, 4, 5, 1, 2, 8, 1, 2] //16
let index1 = 0;
let index2 = 0;
let maxIndex = 0;

for (i = 0; i < arr.length; i++) {
    for (let j in arr) {
        if (arr[i] < arr[Number(j)]) {
            let temp = arr[i]
            arr[i] = arr[Number(j)]
            arr[Number(j)] = temp
        }
       
    }
}

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            index1 = arr[i]
            index2 = arr[j]
            maxIndex = Math.max(Math.max(index1, index2), maxIndex);
        } else {
            index2 = arr[j]
            maxIndex = Math.max(Math.max(index1, index2), maxIndex);
        }
    }
}

console.log(arr.length);
console.log(arr);
console.log(index1);
console.log(index2);
console.log(maxIndex);

