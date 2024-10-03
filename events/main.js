document.addEventListener('DOMContentLoaded', function () {
  //достаем из DOM дерева нужные элементы
  let colorInput = document.querySelector('.block-form__input');
  let colorBlock = document.querySelector('.block-paint');
  let clearBtn = document.querySelector('.block-form__btn');

  //для текстового поля:
  colorInput.placeholder = "Введите цвет на агл.";
  colorInput.value = "gray";

  //создаем функцию, которая будет красить наш блок
  function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
    colorBlock.innerHTML = `Вы ввели цвет: <span style="font-weight:800;">${colorInput.value.trim().toLowerCase()}</span>`;
    if (colorBlock.style.backgroundColor === "black" ||
      colorBlock.style.backgroundColor === "rgb(0, 0, 0)" ||
      colorBlock.style.backgroundColor === "#000" ||
      colorBlock.style.backgroundColor === "hwb(0, 0%, 100%)" ||
      colorBlock.style.backgroundColor === "hsl(0, 0%, 0%)"
    ) {
      colorBlock.style.color = "white"
    } else {
      colorBlock.style.color = "black"
    }
  }

  //создаем обработчик "input" для текстового поля
  colorInput.addEventListener('input', () => {
    if (colorInput !== "") {
      colorInput.value = colorInput.value.trim().toLowerCase()
    }
  });
  colorInput.addEventListener('input', paintBlock);
  colorInput.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
      colorBlock.style.removeProperty('background-color');
    }
  });

  //и вызываем функцию, чтобы раскрасить наш блок
  paintBlock();

  //создаем обработчик "click" для кнопки 'Очистить'
   clearBtn.addEventListener('click', function () {
    colorBlock.style.removeProperty('background-color');
    colorInput.value = "";
    colorBlock.style.backgroundColor = colorInput.value;
    colorBlock.style.color = 'black';
    colorBlock.innerHTML = `Вы ввели цвет: <span style="font-weight:800;">${colorInput.value.trim().toLowerCase()}</span>`;
  });
});
