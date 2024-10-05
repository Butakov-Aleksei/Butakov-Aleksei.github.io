
// let idElem = 0;

let dataStorage = localStorage.getItem(`item`)
let taskArr = []
if (dataStorage !== "" && dataStorage !== null) {
    taskArr = JSON.parse(dataStorage)
}

console.log(taskArr);

//функция создания элемента на странице
function getElementBody(elementName) {
    let element = document.createElement(elementName)
    return element
}

//функция создания новых инпутов
function getNewInput(placeholder, type = 'text') {
    let input = getElementBody("input")
    input.classList.add('input')
    input.placeholder = placeholder
    input.type = type
    return input
}

//функция создания новой кнопки
function getNewBtn(text) {
    let btn = getElementBody("button")
    btn.classList.add('btn', 'btn-reset')
    btn.textContent = text
    return btn
}

//функция создания нового заголовка
function getNewTitle(text) {
    let title = getElementBody("h2")
    title.classList.add('title')
    title.textContent = text
    return title
}


//section
let section = getElementBody('section')
section.classList.add('section')

//container
let container = getElementBody('div')
container.classList.add('container')

//list
let list = getElementBody('ul')
list.classList.add('list', 'list-reset', 'section__list')

//добавляем в body секцию с контейнером
section.append(container)
document.body.append(section)



// renderTasks();


//функция создания новой задачи, она же <li></li>
function getNewTaskItem(task) {
    // idElem++
    let taskItem = getElementBody('li')
    taskItem.classList.add('list__item')
    // taskItem.id = idElem;

    let blockBtns = getElementBody('div')
    blockBtns.classList.add('item__block-btns')

    let title = getNewTitle(task)
    title.classList.add('item__title')

    //кнопка 'выполнено'
    let btnOk = getNewBtn('Выполнено')
    btnOk.classList.add('item__btn', 'item__btn_ok')
    btnOk.onclick = function () {
        taskItem.classList.add('list__item_style')
        title.classList.add('item__title_color_white')
        btnDel.classList.add('item__btn_del_style')
        btnOk.remove()
        btnChange.remove()
    }

    //кнопка 'изменить'
    let btnChange = getNewBtn('Изменить')
    btnChange.classList.add('item__btn', 'item__btn_change')
    btnChange.onclick = function () {
        let newTask = prompt('Введите новую задачу', title.textContent)
        if (newTask == null || newTask == '') {
            newTask = title.textContent
        }
        title.textContent = newTask

    }

    //кнопка 'удалить'
    let btnDel = getNewBtn('Удалить')
    btnDel.classList.add('item__btn', 'item__btn_del')
    btnDel.onclick = function () {
        taskItem.remove()
        // taskArr.push(newTask)

    }

    blockBtns.append(btnOk, btnChange, btnDel)
    taskItem.append(title, blockBtns)
    list.append(taskItem)
    return taskItem
}


//блок с инпутом и кнопкой
let addBox = getElementBody('div')
addBox.classList.add('add-box', 'section__add-box')

let newTaskInp = getNewInput('Новая задача')
newTaskInp.classList.add('add-box__input')

let addBtn = getNewBtn('Создать задачу')
addBtn.classList.add('add-box__btn')


addBtn.onclick = function () {
    // idElem++

    let newTask = newTaskInp.value
    if (newTaskInp.value === '') newTask = 'Новая задача'


    // манипуляции с локальным хранилищем


    taskArr.push(newTask)
    localStorage.setItem(`item`, JSON.stringify(taskArr))

    let newTaskItem = getNewTaskItem(newTask)
    list.append(newTaskItem)

    newTaskInp.value = ''
}

//бегаем по массиву и вызываем функцию
for (let i of taskArr) {
    getNewTaskItem(i)
}

addBox.append(newTaskInp, addBtn)
container.append(addBox, list)

//блок со списком задач