//получаем нужные элементы с html-страницы
//поля ввода
let editText = document.getElementById('text');
let editStart = document.getElementById('start');
let editEnd = document.getElementById('end');



//записываем начальный и конечный индексы
let startNum = "";
let endNum = "";
console.log(startNum, endNum);

//добавляем placeholder
editText.placeholder = 'Введите текст';
editStart.placeholder = 'Введите стартовый индекс';
editEnd.placeholder = 'Введите конечный индекс';

//элементы для наполнения textContent
let simpleText = document.getElementById('simpleText');//просто текст
simpleText.style.whiteSpace = 'pre-wrap'
// simpleText.textContent = editText.value

let lengthText = document.getElementById('lengthText');//длина всего текста

let lengthTextWithoutSpaces = document.getElementById('lengthTextWithoutSpaces');//длина текста без пробелов

let countSpaces = document.getElementById('countSpaces');//кол-во пробелов

let substringText = document.getElementById('substringText');//часть текста
substringText.style.whiteSpace = 'pre-wrap'

let upperText = document.getElementById('upperText');//текст в верхнем регистре
upperText.style.whiteSpace = 'pre-wrap'

let lowerText = document.getElementById('lowerText');//текст в нижнем регистре
lowerText.style.whiteSpace = 'pre-wrap'

let trimText = document.getElementById('trimText');//текст без пробелов

let firstLetterUpper = document.getElementById('firstLetterUpper');//Текст, в котором первая буква всегда заглавная
firstLetterUpper.style.whiteSpace = 'pre-wrap'

let normalizedText = document.getElementById('normalizedText');//Текст, в котором первая буква всегда заглавная, остальные — маленькие, без пробелов по краям, между словами один пробел
normalizedText.style.whiteSpace = 'pre-wrap'

if (localStorage.getItem('startValue')) {
  editStart.value = JSON.parse(localStorage.getItem('startValue'));
  startNum = +editStart.value;
  endNum = +editEnd.value;
}
if (localStorage.getItem('endValue')) {
  editEnd.value = JSON.parse(localStorage.getItem('endValue'));
  startNum = +editStart.value;
  endNum = +editEnd.value;
}

if (localStorage.getItem('textValue') !== "") {
  editText.value = JSON.parse(localStorage.getItem('textValue'));

  //получаем значение поля с одним пробелом
  let oneSpaceValue = editText.value.trim().replaceAll(/\s{2,}/g, ' ');

  // ========================================================================
  //создаем <span></span> с желтым фоном
  let highLightText = `<span class='_highlight'>${editText.value}</span>`
  //создаем обрезанный <span></span> с желтым фоном
  let cutHighLightText = `<span class='_highlight'>${editText.value.slice(startNum, endNum)}</span>`
  // ========================================================================

  //просто текст
  if (startNum !== "" || endNum !== "") {
    let updateTextValue = editText.value.slice(0, startNum) + `<span class='_highlight'>${editText.value.slice(startNum, endNum)}</span>` + editText.value.slice(endNum);
    console.log(editText.value);
    simpleText.innerHTML = updateTextValue;
  } else {
    simpleText.innerHTML = highLightText;
  }

  //часть текста
  substringText.innerHTML = cutHighLightText;

  //длина всего текста
  lengthText.textContent = editText.value.length;
  //длина текста без пробелов
  lengthTextWithoutSpaces.textContent = editText.value.replaceAll(/\s/g, '').length;
  //кол-во пробелов
  countSpaces.textContent = lengthText.textContent - lengthTextWithoutSpaces.textContent;

  upperText.textContent = editText.value.toUpperCase();
  lowerText.textContent = editText.value.toLowerCase();
  trimText.textContent = editText.value.trim();
  firstLetterUpper.textContent = editText.value.trimStart().slice(0, 1).toUpperCase() + editText.value.trimStart().slice(1);
  normalizedText.textContent = oneSpaceValue.slice(0, 1).toUpperCase() + oneSpaceValue.slice(1).toLowerCase();
} else {
  editText.value = ""
}


//обработчик на поле ввода------------------------------------------------------
editText.addEventListener('input', function () {

  //получаем значение поля как есть
  let textValue = this.value;
  //получаем значение поля с одним пробелом
  const oneSpaceValue = this.value.trim().replaceAll(/\s{2,}/g, ' ');

  localStorage.setItem('textValue', JSON.stringify(editText.value))

  //проверка на отсутствие значения поля
  if (!textValue) {
    simpleText.textContent = 'пусто';
    lengthText.textContent = 'пусто';
    lengthTextWithoutSpaces.textContent = 'пусто';
    countSpaces.textContent = 'пусто';
    substringText.textContent = 'пусто';
    upperText.textContent = 'пусто';
    lowerText.textContent = 'пусто';
    trimText.textContent = 'пусто';
    firstLetterUpper.textContent = 'пусто';
    normalizedText.textContent = 'пусто';
    return;
  }

  // ========================================================================
  //создаем <span></span> с желтым фоном
  let highLightText = `<span class='_highlight'>${textValue}</span>`
  //создаем обрезанный <span></span> с желтым фоном
  let cutHighLightText = `<span class='_highlight'>${textValue.slice(startNum, endNum)}</span>`
  // ========================================================================

  //просто текст
  if (startNum !== "" || endNum !== "") {
    textValue = textValue.slice(0, startNum) + `<span class='_highlight'>${textValue.slice(startNum, endNum)}</span>` + textValue.slice(endNum);
    console.log(textValue);
    simpleText.innerHTML = textValue;
  } else {
    simpleText.innerHTML = highLightText;
  }

  //часть текста
  substringText.innerHTML = cutHighLightText;

  //длина всего текста
  lengthText.textContent = this.value.length;
  //длина текста без пробелов
  lengthTextWithoutSpaces.textContent = this.value.replaceAll(/\s/g, '').length;
  //кол-во пробелов
  countSpaces.textContent = lengthText.textContent - lengthTextWithoutSpaces.textContent;

  upperText.textContent = this.value.toUpperCase();
  lowerText.textContent = this.value.toLowerCase();
  trimText.textContent = this.value.trim();
  firstLetterUpper.textContent = this.value.trimStart().slice(0, 1).toUpperCase() + this.value.trimStart().slice(1);
  normalizedText.textContent = oneSpaceValue.slice(0, 1).toUpperCase() + oneSpaceValue.slice(1).toLowerCase();

});

//событие на изменение начального индекса-------------------------------------
editStart.addEventListener('input', function () {
  //получаем значение поля как есть
  let textValue = editText.value;
  startNum = +editStart.value;
  endNum = +editEnd.value;
  console.log(startNum, endNum);


  localStorage.setItem('startValue', JSON.stringify(this.value))

  // ========================================================================
  //создаем <span></span> с желтым фоном
  let highLightText = `<span class='_highlight'>${textValue}</span>`
  //создаем обрезанный <span></span> с желтым фоном
  let cutHighLightText = `<span class='_highlight'>${textValue.slice(startNum, endNum)}</span>`
  // ========================================================================

  //просто текст
  //просто текст
  if (startNum !== "" || endNum !== "") {
    textValue = textValue.slice(0, startNum) + `<span class='_highlight'>${textValue.slice(startNum, endNum)}</span>` + textValue.slice(endNum);
    console.log(textValue);
    simpleText.innerHTML = textValue;
  } else {
    simpleText.innerHTML = highLightText;
  }

  //часть текста
  substringText.innerHTML = cutHighLightText;


})

//событие на изменение конечного индекса---------------------------------------
editEnd.addEventListener('input', function () {
  let textValue = editText.value;
  startNum = +editStart.value;
  endNum = +editEnd.value;
  console.log(startNum, endNum);


  localStorage.setItem('endValue', JSON.stringify(this.value))

  // ========================================================================
  //создаем <span></span> с желтым фоном
  let highLightText = `<span class='_highlight'>${textValue}</span>`
  //создаем обрезанный <span></span> с желтым фоном
  let cutHighLightText = `<span class='_highlight'>${textValue.slice(startNum, endNum)}</span>`
  // ========================================================================

  //просто текст
  //просто текст
  if (startNum !== "" || endNum !== "") {
    textValue = textValue.slice(0, startNum) + `<span class='_highlight'>${textValue.slice(startNum, endNum)}</span>` + textValue.slice(endNum);
    console.log(textValue);
    simpleText.innerHTML = textValue;
  } else {
    simpleText.innerHTML = highLightText;
  }

  //часть текста
  substringText.innerHTML = cutHighLightText;
})

