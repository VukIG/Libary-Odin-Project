const grid=document.querySelector('.magic');
//buttons
const allButtons=document.querySelectorAll('button');
const add=document.querySelector('.add');
const form=document.querySelector('form');
const x=document.querySelector('.specialx');
const submit=document.querySelector('.formsubmit');

//input
const authorName=document.querySelector('#author');
const bookName=document.querySelector('#nameOfBook');
const pageNumber=document.querySelector('#numberOfPages');

let a=0;
let b=0;
let c=0;

function greska(message,element) {
    let newElement = document.createElement('p');
    newElement.classList.add('jovan');
    newElement.innerText=message;
    let parent=element.parentElement
    parent.appendChild(newElement);
}

function deleteAll() {
    const jovani=document.querySelectorAll('.jovan');
    jovani.forEach(jovan => {
        jovan.style.display='none';
    });
}

//ne radi ovde nesto
function deleteOne(element) {
    const jovan=document.querySelector('.jovan');
    element.style.display='none';
}

let myLibrary = [];

function Book(nameOfAuthor,nameOfBook,numberOfPages) {
    this.nameOfAuthor=nameOfAuthor;
    this.nameOfBook=nameOfBook;
    this.numberOfPages=numberOfPages;
    this.status='read';
}


function addBookToLibrary() {
    myLibrary.forEach(object => {
        let nameOfAuthor=object.nameOfAuthor;
        let nameOfBook=object.nameOfBook;
        let numberOfPages=object.numberOfPages;
        let container=document.createElement('div');
            container.innerHTML=
            `<div class="containercontent">
                <h1 class="imepisca">${nameOfAuthor}</h1>
                <h1 class="imeknjige">${nameOfBook}</h1>
                <div class="flex">
                    <h1 class="brojstranica">${numberOfPages}</h1>
                    <p>pages</p>
                </div>
                <button>Read</button>
            </div>`
        container.classList.add('container');
        grid.appendChild(container);
        
    });
    myLibrary.pop();    
}

submit.addEventListener('click',function () {
    if ((authorName.value == '' || authorName.value == null) && a==0) {
        greska('Enter the name of the author of the book',authorName);
        a++;
    }
    if ((bookName.value == '' || bookName.value == null) && b==0) {
        greska('Enter the name of the author of the book',bookName);
        b++;
    }
    
    if ( (pageNumber.value == '' || pageNumber.value == null || isNaN(pageNumber.value) || pageNumber.value < 0) && c==0 ){ 
        greska('Enter the number of pages',pageNumber);
        c++;
    }
    
    else{
        a=0;
        b=0
        c=0;
        deleteAll();
        let author=authorName.value;
        let bookname=bookName.value;
        let pagenumber=pageNumber.value;

        let book = new Book(author,bookname,pagenumber);
        myLibrary.push(book);
        console.log(book);
        console.log(myLibrary);
        addBookToLibrary();
        form.classList.toggle('pop-up');
        authorName.value='';
        bookName.value='';
        pageNumber.value='';
    }
    
    
});

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