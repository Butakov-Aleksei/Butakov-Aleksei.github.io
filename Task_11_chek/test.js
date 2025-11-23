let productArray = []
let countArray = []
let priceArray = []
let costArray = []



//функция, создающая инпуты
function getInput(placeholder, type) {
    let input = document.createElement("input")
    input.classList.add('chek__add-input')
    input.placeholder = placeholder
    input.type = type
    return input
}

//функция, создающая кнопку
function getBtn(text, className) {
  let btn = document.createElement("button")
  btn.classList.add(className, 'btn-reset', 'btn')
  btn.textContent = text
  return btn
}

//функция, создающая блоки в самих пунктах
function getBoxInItem(name, value) {
  let box = document.createElement("div")
  box.classList.add('item__box')

  let nameSpan = document.createElement("span")
  nameSpan.classList.add('item__name')
  nameSpan.textContent = name

  let valueStrong = document.createElement("strong")
  valueStrong.classList.add('item__value')
  valueStrong.textContent = value

  box.append(nameSpan, valueStrong)

  return box
}

//функция, создающая пункт списка, li
function getItem(productName, count, price, index) {
  let item = document.createElement("li")
  item.classList.add('chek__item', 'item')

  //создаем элементы пункта
  let totalPrice = count * price
  let newIndex = getBoxInItem("", `${index + 1})`)
  newIndex.classList.add('item__box_index')
  let newProductBox = getBoxInItem("Название", productName)
  newProductBox.classList.add('item__box_name')
  let newCountBox = getBoxInItem("Кол-во", count)
  let newPriceBox = getBoxInItem("Цена", price)
  let totalPriceBox = getBoxInItem("Общая цена", totalPrice)

  let boxBtn = document.createElement("div")
  boxBtn.classList.add('item__box-btn')

  let editBtn = getBtn("Изменить", "item__edit-btn")
  let deleteBtn = getBtn("Удалить", "item__delete-btn")

  //клик по кнопке "изменить"
  editBtn.onclick = function () {
    let newProduct = prompt("Введите новый продукт", productName)
    let newCount = +prompt("Введите кол-во", count)
    let newPrice = +prompt("Введите цену", price)
    let newCost = newCount * newPrice

    productArray[index] = newProduct
    countArray[index] = newCount
    priceArray[index] = newPrice
    costArray[index] = newCost

    render(productArray, countArray, priceArray)
  }

  //клик по кнопке "удалить"
  deleteBtn.onclick = function () {
    productArray.splice(index, 1)
    countArray.splice(index, 1)
    priceArray.splice(index, 1)
    costArray.splice(index, 1)
    render(productArray, countArray, priceArray)
  }

  boxBtn.append(editBtn, deleteBtn)

  item.append(newIndex, newProductBox, newCountBox, newPriceBox, totalPriceBox, boxBtn)
  return item
}

//создаем секцию
let section = document.createElement("section")
section.classList.add('chek')

//создаем контейнер
let container = document.createElement("div")
container.classList.add('container', 'chek__container')

//создаем заголовок
let title = document.createElement("h1")
title.classList.add('chek__title')
title.textContent = "Чек покупки"

//создаем блок добавления
let addBox = document.createElement("div")
addBox.classList.add('chek__add-box')

//создаем инпуты
let productInput = getInput("Название товара", "text") //наименование товара
let countInput = getInput("Количество", "number") //кол-во
let priceInput = getInput("Цена", "number") //цена

//создаем кнопку
let addBtn = getBtn("Добавить", "chek__add-btn")

//действия по кнопке "добавить"
addBtn.onclick = function () {
  list.innerHTML = ""
  let newProduct = productInput.value
  let newCount = +countInput.value
  let newPrice = +priceInput.value
  let totalCost = newCount * newPrice

  productArray.push(newProduct)
  countArray.push(newCount)
  priceArray.push(newPrice)
  costArray.push(totalCost)

  productInput.value = ""
  countInput.value = ""
  priceInput.value = ""

  render(productArray, countArray, priceArray)
}


//создаем список, лист, ul
let list = document.createElement("ul")
list.classList.add('chek__list')

//создаем блок итого
  let footerDiv = document.createElement("div")
  footerDiv.classList.add('chek__footer', 'footer')

  let footerText = document.createElement("strong")
  footerText.classList.add('footer__text')
  footerText.textContent = "Итоговая стоимость:"

  let footerTotal = document.createElement("strong")
  footerTotal.classList.add('footer__total')


  footerDiv.append(footerText, footerTotal)


//отрисовка
function render(productArr, countArr, priceArr) {
  list.innerHTML = ""

  let summTotalPrice = 0
  for (let i = 0; i < productArr.length; i++) {
    let newProductItem = getItem(productArr[i], countArr[i], priceArr[i], i)

    summTotalPrice = summTotalPrice + costArray[i]

    list.append(newProductItem)
  }
  footerTotal.textContent = `${summTotalPrice}руб`
}

render(productArray, countArray, priceArray)

//добавление
addBox.append(productInput, countInput, priceInput, addBtn)
container.append(title, addBox, list, footerDiv)
section.append(container)
document.body.append(section)
