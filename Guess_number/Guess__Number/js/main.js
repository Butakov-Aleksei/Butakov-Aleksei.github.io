const resultList = document.getElementById("listResult");
const numbersList = document.getElementById("listNumbers");
const input = document.getElementById("numInput");

const btnStartGame = document.getElementById("btnStartGame");
const btnGuess = document.getElementById("btnGuess");
const btnHint = document.getElementById("btnHint");
const btnReset = document.getElementById("btnReset");

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

const random = () => Math.floor(Math.random() * 100 + 1);
let randomCurrent = 0;
let count = 0;
let hintOrder = 3;
let hintTotal = 0;
let currentNumber = `0123456789`;
const currentNumberArr = [];
let filteredNumArr = numbers.filter((item) => {
  return String(currentNumber)
    .split("")
    .some((num) => String(item).includes(num));
});

function createHintText() {
  let hintText = "";
  let isNum = String(currentNumber)
    .split("")
    .some((num) => String(randomCurrent).includes(`${num}`));
  let isNumFirst = String(currentNumber)
    .split("")
    .some((num) => String(randomCurrent)[0].includes(`${num}`));
  let isNumLast = String(currentNumber)
    .split("")
    .some((num) =>
      String(randomCurrent)[String(randomCurrent).length - 1].includes(`${num}`)
    );

  switch (true) {
    case hintOrder === 3:
      hintTotal++;
      if (isNum) {
        hintText = `${hintTotal}-🌟 Или ${currentNumber
          .split("")
          .join(", или ")} есть в этом числе`;
        filteredNumArr = filteredNumArr.filter((item) => {
          return String(currentNumber)
            .split("")
            .some((num) => String(item).includes(num));
        });
        console.log(filteredNumArr);
        hintOrder--;
        numbersList
          .closest(".guess-number__wrap-list")
          .classList.remove("guess-number__wrap-list--show");
        setTimeout(() => {
          numbersList.innerHTML = "";
          createItemNumbersList(filteredNumArr);
          highlightItemCurrentNumber();
        }, 600);
      } else {
        hintText = `${hintTotal}-🌟 Ни одна из цифр вашего числа ${currentNumber} не существует в заданном числе`;

        filteredNumArr = filteredNumArr.filter((item) => {
          return String(currentNumber)
            .split("")
            .every((num) => !String(item).includes(num));
        });
        console.log(filteredNumArr);
        hintOrder--;
        numbersList
          .closest(".guess-number__wrap-list")
          .classList.remove("guess-number__wrap-list--show");
        setTimeout(() => {
          numbersList.innerHTML = "";
          createItemNumbersList(filteredNumArr);
          highlightItemCurrentNumber();
        }, 600);
      }
      break;
    case hintOrder === 2 && isNumFirst:
      hintTotal++;
      hintText = `${hintTotal}-🌟 Или ${currentNumber
        .split("")
        .join(", или ")} — первая цифра в этом числе.`;
      hintOrder--;
      break;
    case hintOrder === 2 && isNumLast:
      hintTotal++;
      hintText = `${hintTotal}-🌟 Или ${currentNumber
        .split("")
        .join(", или ")} — последняя цифра в этом числе.`;
      hintOrder--;
      break;
    case hintOrder === 2 && !isNum:
      hintTotal++;
      hintText = `${hintTotal}-🌟 Таких цифр как ${currentNumber
        .split("")
        .join(", ")} нет в этом числе`;
      hintOrder--;
      filteredNumArr = filteredNumArr.filter((item) => {
        return String(currentNumber)
          .split("")
          .every((num) => !String(item).includes(num));
      });
      console.log(filteredNumArr);
      numbersList
        .closest(".guess-number__wrap-list")
        .classList.remove("guess-number__wrap-list--show");
      setTimeout(() => {
        numbersList.innerHTML = "";
        createItemNumbersList(filteredNumArr);
        highlightItemCurrentNumber();
      }, 600);
      break;
    case hintOrder === 1 && isNumLast:
      hintTotal++;
      hintText = `${hintTotal}-🌟 Или ${currentNumber
        .split("")
        .join(", или ")} — последняя цифра в этом числе.`;
      hintOrder--;
      break;
    case hintOrder === 1 && isNumFirst:
      hintTotal++;
      hintText = `${hintTotal}-🌟 Или ${currentNumber
        .split("")
        .join(", или ")} — первая цифра в этом числе.`;
      hintOrder--;
      break;
    case hintOrder === 1 && !isNum:
      hintTotal++;
      hintText = `${hintTotal}-🌟 Таких цифр как ${currentNumber
        .split("")
        .join(", ")} нет в этом числе`;
      filteredNumArr = filteredNumArr.filter((item) => {
        return String(currentNumber)
          .split("")
          .every((num) => !String(item).includes(num));
      });
      console.log(filteredNumArr);
      numbersList
        .closest(".guess-number__wrap-list")
        .classList.remove("guess-number__wrap-list--show");
      setTimeout(() => {
        numbersList.innerHTML = "";
        createItemNumbersList(filteredNumArr);
        highlightItemCurrentNumber();
      }, 600);
      hintOrder--;
      break;
    case hintOrder === 0:
      hintTotal++;
      hintOrder--;
      if (currentNumber[0] === String(randomCurrent)[0]) {
        hintText = `${hintTotal}-🌟 Вы близки к разгадке 🧐 ${currentNumber[0]} — это первая цифра в этом числе`;
      } else if (currentNumber.at(-1) === String(randomCurrent).at(-1)) {
        hintText = `${hintTotal}-🌟 Вы близки к разгадке 🧐 ${currentNumber.at(
          -1
        )} — это последняя цифра в этом числе`;
      } else {
        hintText = `${hintTotal}🌟-я Подсказка: ${
          currentNumber[0]
        } — не первая цифра в этом числе, а цифра ${currentNumber.at(
          -1
        )} — не последняя. 😉`;
      }
      break;
    default:
      hintOrder++;
      hintTotal++;

      hintText = `${hintTotal}🌟-я Подсказка: нет, это не ${currentNumber} 😐`;
  }
  return hintText;
}

function createGuessText() {
  if (+currentNumber === randomCurrent) {
    btnGuess.disabled = true;
    btnHint.disabled = true;
    input.disabled = true;
    input.style.pointerEvents = "none";
    return `✨ Поздравляем! Вы отгадали число ${randomCurrent} с ${count}-й попытки и с использованием 🌟-${hintTotal} подсказок.`;
  }
  return `➖ ${count}-я попытка, число ${currentNumber}: 🤔 Неверно....`;
}

function createItemNumbersList(arr) {
  numbersList
    .closest(".guess-number__wrap-list")
    .classList.add("guess-number__wrap-list--show");
  for (const num of arr) {
    let li = document.createElement("li");
    li.classList.add("guess-number__item-numbers");
    li.textContent = num;
    numbersList.append(li);
  }
}

function createItemResultList(text) {
  resultList
    .closest(".guess-number__wrap-list")
    .classList.add("guess-number__wrap-list--show");
  let li = document.createElement("li");
  li.classList.add("guess-number__item-result");
  li.textContent = text();
  if (li.textContent.includes(`Поздравляем!`)) {
    li.classList.add("guess-number__item-result--success");
  }
  resultList.append(li);
  return resultList;
}

function highlightItemCurrentNumber() {
  Array.from(numbersList.children).forEach((item) => {
    currentNumberArr.forEach((num) => {
      if (+num === parseInt(item.textContent)) {
        item.classList.add("guess-number__item-numbers--highlight");
      }
    });
  });
}

input.addEventListener("input", (e) => {
  if (input.value > 100 || input.value <= 0) {
    input.value = "";
  }
  if (+input.value !== parseInt(input.value)) {
    input.value = parseInt(+input.value);
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value === "") {
      return;
    }
    currentNumber = input.value;
    currentNumberArr.push(currentNumber);
    count++;
    btnHint.disabled = false;
    highlightItemCurrentNumber();
    resultList
      .closest(".guess-number__wrap-list")
      .classList.remove("guess-number__wrap-list--show");
    createItemResultList(createGuessText);
    input.value = "";
  }
});

btnStartGame.addEventListener("click", (e) => {
  e.target.disabled = true;
  btnGuess.disabled = false;
  btnReset.disabled = false;
  input.disabled = false;
  input.style.pointerEvents = "auto";

  randomCurrent = random();
  createItemNumbersList(numbers);
  console.log(randomCurrent);
});

btnGuess.addEventListener("click", (e) => {
  if (input.value === "") {
    return;
  }
  currentNumber = input.value;
  currentNumberArr.push(currentNumber);
  count++;
  btnHint.disabled = false;
  highlightItemCurrentNumber();
  resultList
    .closest(".guess-number__wrap-list")
    .classList.remove("guess-number__wrap-list--show");
  createItemResultList(createGuessText);
  input.value = "";
});

btnHint.addEventListener("click", (e) => {
  e.target.disabled = true;
  resultList
    .closest(".guess-number__wrap-list")
    .classList.remove("guess-number__wrap-list--show");
  setTimeout(() => {
    Array.from(resultList.children).forEach((item) => {
      if (item.textContent.includes("➖")) {
        item.remove();
      }
    });
    createItemResultList(createHintText);
  }, 600);
});

btnReset.addEventListener("click", (e) => {
  e.target.disabled = true;
  btnStartGame.disabled = false;
  btnGuess.disabled = true;
  btnHint.disabled = true;
  input.style.pointerEvents = "none";
  numbersList
    .closest(".guess-number__wrap-list")
    .classList.remove("guess-number__wrap-list--show");
  setTimeout(() => (numbersList.innerHTML = ""), 600);
  resultList
    .closest(".guess-number__wrap-list")
    .classList.remove("guess-number__wrap-list--show");
  setTimeout(() => (resultList.innerHTML = ""), 600);
  randomCurrent = 0;
  count = 0;
  hintOrder = 3;
  hintTotal = 0;
  currentNumber = `0123456789`;
  currentNumberArr.length = 0;
  filteredNumArr = numbers.filter((item) => {
    return String(currentNumber)
      .split("")
      .some((num) => String(item).includes(num));
  });
});

numbersList
  .closest(".guess-number__wrap-list")
  .addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("guess-number__wrap-list--show");
  });
