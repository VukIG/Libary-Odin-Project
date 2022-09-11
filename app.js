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
    this.status='';
}

function clearFields(authorName,bookName,pageNumber) {
    authorName.value='';
    bookName.value='';
    pageNumber.value='';
}

function forShakepeers() {
    let reads=document.querySelectorAll('.read');
    let removeBooks=document.querySelectorAll('.remove');
    reads.forEach(read => {
        read.addEventListener('click',function () {
            read.classList.toggle('procitano');
            if(read.innerText=='read'){
                read.innerText='not read';
            }
            else{
                read.innerText='read';
            }
        });    
    });
    removeBooks.forEach(removeBook => {
        removeBook.addEventListener('click',function () {
            let bratemili=removeBook.parentElement.parentElement;
            bratemili.remove();
        });    
    });
}

function readAndRemove(container) {
    let read=container.querySelector('.read');
    let removeBook=container.querySelector('.remove');
    read.addEventListener('click',function () {
        read.classList.toggle('procitano');
        if(read.innerText=='read'){
            read.innerText='not read';
        }
        else{
            read.innerText='read';
        }
    });
    removeBook.addEventListener('click',function () {
        container.style.display='none';
    });
}

function addBookToLibrary() {
    myLibrary.forEach(object => {
        let nameOfAuthor=object.nameOfAuthor;
        let nameOfBook=object.nameOfBook;
        let numberOfPages=object.numberOfPages;
        let container=document.createElement('div');
            container.innerHTML=
            `<div class="containercontent">
                <button class="remove">X</button>
                <h1 class="imepisca">${nameOfAuthor}</h1>
                <h1 class="imeknjige">${nameOfBook}</h1>
                <div class="flex">
                    <h1 class="brojstranica">${numberOfPages}</h1>
                    <p>pages</p>
                </div>
                <button class="read">Read</button>
            </div>`
        container.classList.add('container');
        grid.appendChild(container);
        readAndRemove(container);
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
        
        clearFields(authorName,bookName,pageNumber);
        addBookToLibrary();
        form.classList.toggle('pop-up');
        
    }
    
    
});

forShakepeers();

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
