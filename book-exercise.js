//the function which opens up a form so that the user can add a new book to the library
function addBookForm(){
    const bookForm=document.createElement('div');
    bookForm.classList.add('card');

    const form=document.createElement('form');
    bookForm.appendChild(form);

    const titleInput=document.createElement('input');
    titleInput.setAttribute('placeholder', 'Book title');
    form.appendChild(titleInput);

    const authorInput=document.createElement('input');
    authorInput.setAttribute('placeholder', 'Author');
    form.appendChild(authorInput);

    const pagesInput=document.createElement('input');
    pagesInput.setAttribute('placeholder', 'No.of pages');
    pagesInput.setAttribute('type', 'number');
    form.appendChild(pagesInput);

    const readItDiv=document.createElement('div');
    form.appendChild(readItDiv);

    const readIt=document.createElement('button');
    readIt.textContent="Read";
    readItDiv.appendChild(readIt);

    const addBookButton=document.createElement('button');
    addBookButton.textContent='Add';
    readItDiv.appendChild(addBookButton);

    const main=document.querySelector('.main');
    main.appendChild(bookForm);
}

//the + New book button
const addBook=document.querySelector('.addBook');
addBook.addEventListener('click', ()=> addBookForm());

//the function which creates a new Book entry, once the Add book button is selected

function Book(title,author,pages,readit){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readit=readit;
}

let myLibrary=[new Book('Outlander', 'Diana Gabaldon', '1412', 'true'), new Book('Robinson Crusoe', 'Daniel Defoe', '342', 'false')];

for (let i=0; i<=myLibrary.length; i++){

}



function addBookToLibrary(){
    
}

//displays all the books in the library on the screen
function displayMyLibrary(){
    for (let i=0; i<myLibrary.length; i++){
        const bookTitle=document.createElement('p');
        bookTitle.textContent=`${myLibrary[i].title}`;

        const author=document.createElement('p');
        author.textContent=`${myLibrary[i].author}`;

        const pages=document.createElement('p');
        pages.textContent=`${myLibrary[i].pages} pages`;

        const bookDiv=document.createElement('div');
        bookDiv.classList.add('card');
        const main=document.querySelector('.main');
        main.appendChild(bookDiv);

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);

        const lastLineDiv=document.createElement('div');
        bookDiv.appendChild(lastLineDiv);

        const readOrNot=document.createElement('button');
        readOrNot.textContent="Read";
        lastLineDiv.appendChild(readOrNot);

        const removeBookButton=document.createElement('button');
        const trashBinImg=document.createElement('img');
        trashBinImg.setAttribute('src','images/bin.png');
        trashBinImg.setAttribute('alt','trash bin icon');

        removeBookButton.appendChild(trashBinImg);

        lastLineDiv.appendChild(removeBookButton);
    }
}

displayMyLibrary();