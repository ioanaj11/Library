const addBook=document.querySelector('.addBook');

function addBookForm(){
    const bookForm=document.createElement('div');
    bookForm.classList.add('card');

    const form=document.createElement('form');
    bookForm.appendChild(form);

    const bookTitle=document.createElement('label');
    bookTitle.textContent="Book title";
    form.appendChild(bookTitle);

    const titleInput=document.createElement('input');
    form.appendChild(titleInput);

    const author=document.createElement('label');
    author.textContent="Author";
    form.appendChild(author);

    const authorInput=document.createElement('input');
    form.appendChild(authorInput);

    const nrOfPages=document.createElement('label');
    nrOfPages.textContent="No. of pages:";
    form.appendChild(nrOfPages);

    const pagesInput=document.createElement('input');
    form.appendChild(pagesInput);

    const readItDiv=document.createElement('div');
    form.appendChild(readItDiv);

    const readIt=document.createElement('label');
    readIt.textContent="Read it:";
    readItDiv.appendChild(readIt);

    const readitInput=document.createElement('input');
    readitInput.setAttribute('type', 'checkbox');
    readItDiv.appendChild(readitInput);

    const addBookButton=document.createElement('button');
    addBookButton.textContent='Add book';
    readItDiv.appendChild(addBookButton);


    const main=document.querySelector('.main');
    main.appendChild(bookForm);
    

}

addBook.addEventListener('click', ()=> addBookForm());

let myLibrary=[];

for (let i=0; i<=myLibrary.length; i++){

}

function Book(title,author,pages,readit){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readit=readit;
}

function addBookToLibrary(){
    
}

