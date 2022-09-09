const allButtons=document.querySelectorAll('button');
const add=document.querySelector('.add');
const form=document.querySelector('form');
const x=document.querySelector('.specialx');
const submit=document.querySelector('.formsubmit');
const authorName=document.querySelector('#author');
const bookName=document.querySelector('#nameOfBook');
const pageNumber=document.querySelector('#numberOfPages');

submit.addEventListener('click',function () {
    if (authorName.value == '' || authorName.value == null) {
        
    }
    if (authorName.value == '' || authorName.value == null) {
        
    }
    if (pageNumber.value == '' || pageNumber.value == null || isNaN(pageNumber.value)) {
        console.log('error')
    }
})

allButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        e.preventDefault();
    });
});

x.addEventListener('click',function () {
    form.classList.toggle('pop-up');
});

add.addEventListener('click',function () {
    form.classList.toggle('pop-up');
});