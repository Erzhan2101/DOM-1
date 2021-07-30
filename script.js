// alert("Привет")
//
// const answer = confirm("А тебе есть 18?")
// if(answer){
//     alert("Кури на здороье")
// }else {
//     alert("Сначала молоко!")
// }
//
// const age = prompt("Сколько тебе лет?")
// alert(`Тебе ${age} лет!`)
//
// console.log(window.document)
// console.dir(window.document)
//
// // обрашение по классу
// const desc = document.getElementsByClassName("description")
//
// console.log(desc)
// console.dir(desc[0])
// console.dir(desc[1])
//
//
// // обрашение по тегу
// const descByName = document.getElementsByTagName("p")
// console.log(descByName)
//
//
// // обрашение по id
// const input = document.getElementById("name")
//
// //
// const example1 = document.querySelectorAll(".description")
// console.log(example1)
//
// const example2 = document.querySelectorAll("p")
// console.log(example1)
//
// const example3 = document.querySelectorAll("#name")
// console.log(example1)

//конкретно элемент
// const example4 = document.querySelector(".description")
// console.log(example4)
//
// const example5 = document.querySelector("#name")
// console.log(example5)
//
// const example6 = document.querySelector("h1")
// console.log(example6)


//изминение элемента
// const title = document.querySelector(".title")
// // // title.textContent = "Курить - это зло"
// // // title.innerText = "<S>Курить - это зло</S>"
// title.innerHTML = "<S>Курить - это зло</S>"
// console.dir(title.textContent)
//
// const input = document.querySelector("#name")
// input.value = "писать здесь"
//
// const btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     console.log("Boom!")
// })


//calculator

// вызов
// const num1 = document.querySelector(".num1")
// const num2 = document.querySelector(".num2")
// const out = document.querySelector(".out")
// const sumBtn = document.querySelector(".sum")
// const minusBtn = document.querySelector(".minus")
// const multiBtn = document.querySelector(".multiplication")
// const divideBtn =  document.querySelector(".divide")
// const clearBtn = document.querySelector(".clear")

//вариант короткий запис

// const buttons = document.querySelectorAll(".btn")
// buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         let sumbol = btn.textContent
//         let answer = 0
//         if (sumbol === "+") {
//             answer = Number(num1.value) + Number(num2.value)
//         } else if (sumbol === "-") {
//             answer = Number(num1.value) - Number(num2.value)
//         } else if (sumbol === "*") {
//             answer = Number(num1.value) * Number(num2.value)
//         } else if (sumbol === "/") {
//             answer = Number(num1.value) / Number(num2.value)
//         }
//         out.textContent = `Result: ${answer}`
//         num1.value = ''
//         num2.value = ''
//     })
// })
//вариант для наглядгости

// sumBtn.addEventListener("click", ()=>{
//     let sum = Number(num1.value) + Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })
//
// minusBtn.addEventListener( "click", () =>{
//     let sum = Number(num1.value) - Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })
//
// multiBtn.addEventListener( "click", () =>{
//     let sum = Number(num1.value) * Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })
//
// divideBtn.addEventListener( "click", () =>{
//     let sum = Number(num1.value) / Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })

// clearBtn.addEventListener('click',()=>{
//     num1.value = ''
//     num2.value = ''
// })


// const items = Array.from(document.querySelectorAll("li"))
// let newArray = items.map((item) => item.textContent)
//
// console.log(newArray)


///////------------------ HOME WORK ----------------///////

//Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// let task1 = document.querySelector('a').textContent
// console.log(task1)

// const task1 = () => {
//     return document.querySelector("a").textContent
// }
// console.log(task1())
//Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// let task2 = Array.from(document.querySelectorAll("a"))
// task2 = task2.map(item => item.textContent)
// const task2 = () => {
//     return  Array.from(document.querySelectorAll("a"))
//         .map((item) => item.textContent)
//
// }


// console.log(task2())
//Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов
// элементов с классом nav__link__item

// let task3 = Array.from(document.querySelectorAll(".nav__link__item"))
// task3 = task3.map(item => item.textContent)
// console.log(task3)

// const task3 = () => {
//     return Array.form(document.querySelectorAll(".nav__link__item"))
//         .map(item => item.textContent)
// }
// console.log(task3())

//Task 4
// Напишите функцию, которая вернет массив со значениями
// атрибута class внутри тэгов элементов с классом nav__link__item

// const task4 = () => {
//     return Array.from(document.querySelectorAll(".nav__link__item"))
//         .map(item => item.getAttribute('class'))
// }
// console.log(task4())

//Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link
// внутри тэгов элементов с классом nav__link .

// const task5 = () =>{
//     return Array.from(document.querySelectorAll(".nav__link"))
//         .map(item => item.getAttribute("data-link"))
// }
// console.log(task5())

//Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно,
// по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса.
// И у этого же элемента должен быть класс с текстовым номером индекса.

// const task6 = () =>{
//     return Array.from(document.querySelectorAll(".nav__link"))
//         .filter(item => !item.getAttribute('class').includes(item.textContent))
//         .map(item => item.getAttribute("data-link"))
// }
// console.log(task6())

// //task7
// const task7 = () => {
//     return Array.from(document.querySelectorAll(".nav__link"))
//         .forEach(item =>
//             item.textContent=`${item.getAttribute("data-link")} ${item.getAttribute("class").split(' ')[1]}`)
// }
//
// console.log(task7())

//Task 8
//Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице.
//Для удаления используйте forEach`.
// const task8 = () => {
//     return Array.from(document.querySelectorAll(".nav__link"))
//         .forEach((item) => {
//             if (item.getAttribute("class").split(" ")[1] !== (item.textContent)) {
//                 return item
//             }return item.remove()
//         })
// }
// console.log(task8())

//Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello
//
// const task9 = () => {
//     let oldDiv = document.querySelector("#append-div") // берем старый div с Id
//     let newDiv = document.createElement('div')// создаем пустой <div>
//     newDiv.setAttribute('id', `#just-text`)// добавляем к пустому <div>.ву "#id" just-text
//     newDiv.textContent = 'Hello'// textContent меняем на HELLO
//     oldDiv.appendChild(newDiv) // Возвращаем старый <div>
//     return oldDiv
// }
// console.log(task9())

//Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у
// ul элемента должен быть айди #list Внутри ul элемента находится 10 тегов li с текстом от
// Child 1,...., Child 10

// const task10 = () => {
//     let oldDiv = document.querySelector("#append-div")// берем страрый <div> с "id" append-div
//     let list = document.createElement('ul')
//     list.setAttribute('id', '#list')
//     oldDiv.appendChild(list)
//     for (let i = 0;i < 10; i++){
//         list.appendChild(document.createElement('li'))
//     }
//     let listItem = document.querySelectorAll('li')
//     Array.from(listItem)
//         .map((item, idx) => item.textContent = `Child ${idx + 1}`)
//     return oldDiv
// }
// console.log(task10())

