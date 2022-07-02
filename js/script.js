const burgers = document.getElementById('spans');
const ulLists = document.getElementById('ul-list');

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const lists = document.querySelectorAll('li');




burgers.addEventListener('click',()=>{
    ulLists.classList.toggle('ul-none');

    first.classList.toggle('firstS')
    second.classList.toggle('secondS')
    third.classList.toggle('thirdS')
})

lists.forEach(list =>{
    list.addEventListener('click',()=>{
        ulLists.classList.toggle('ul-none')
        first.classList.toggle('firstS')
        second.classList.toggle('secondS')
        third.classList.toggle('thirdS')
    })
})










