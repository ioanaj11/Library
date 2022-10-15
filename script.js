//the array which holds all the Book entries
let myLibrary=[new Book('Outlander', 'Diana Gabaldon', '1412', 'true'), 
                new Book('Robinson Crusoe', 'Daniel Defoe', '342', 'false')];

//the Book prototype
function Book(title,author,pages,readit){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readit=readit;
}

//function which displays the Books on the screen
function displayBook(BookObject){
        const newBookTitle=document.createElement('p');
        newBookTitle.textContent=`${BookObject.title}`;

        const newAuthor=document.createElement('p');
        newAuthor.textContent=`${BookObject.author}`;

        const newPages=document.createElement('p');
        newPages.textContent=`${BookObject.pages} pages`;

        const bookDiv=document.createElement('div');
        bookDiv.classList.add('card');
        bookDiv.setAttribute('data-id', `${myLibrary.indexOf(BookObject)}`);
                
        const main=document.querySelector('.main');
        main.appendChild(bookDiv);

        bookDiv.appendChild(newBookTitle);
        bookDiv.appendChild(newAuthor);
        bookDiv.appendChild(newPages);
        
        const readOrNot=document.createElement('button');
        readOrNot.setAttribute('class','readStatus');
        readOrNot.setAttribute('id', `${myLibrary.indexOf(BookObject)}`);
        readOrNot.addEventListener('click', e => changeStatus(e.target.className, e.target.id))

        const bookImg=document.createElement('img');
        bookImg.classList.add('bookImg');
        bookImg.setAttribute('data-id',`${myLibrary.indexOf(BookObject)}`);
                        
        if (BookObject.readit === 'true') 
            {readOrNot.classList.add('read');
            readOrNot.textContent="Read"
            bookImg.setAttribute('src','images/opened-book.png')}
            
            else {readOrNot.classList.add('notRead');
                readOrNot.textContent="Not read";
                bookImg.setAttribute('src','images/book.png');}

        
        bookDiv.appendChild(bookImg);

        const lastLineDiv=document.createElement('div');
        bookDiv.appendChild(lastLineDiv);

        lastLineDiv.appendChild(readOrNot);

        const removeBookButton=document.createElement('button');
        removeBookButton.classList.add('removeBookBtn');
        
        const trashBinImg=document.createElement('img');
        trashBinImg.setAttribute('src','images/bin.png');
        trashBinImg.setAttribute('alt','trash bin icon');
        trashBinImg.setAttribute('id', `${myLibrary.indexOf(BookObject)}`);
                
        removeBookButton.appendChild(trashBinImg);

        lastLineDiv.appendChild(removeBookButton);

        removeBookButton.addEventListener('click', e => removingBook(e.target.id));
    }

//changes the status of the book
function changeStatus(status, index){
    const readOrNot=document.getElementById(`${index}`);
    const bookImg=document.querySelector(`[data-id='${index}']>img`);

    if (status =='readStatus read') {
        myLibrary[index].readit='false';
        readOrNot.textContent="Not read";
        readOrNot.classList.remove('read');
        readOrNot.classList.add('notRead');
        bookImg.setAttribute('src','images/book.png');
    }
    else {
        myLibrary[index].readit='true';
        readOrNot.textContent="Read";
        readOrNot.classList.remove('notRead');
        readOrNot.classList.add('read');
        bookImg.setAttribute('src','images/opened-book.png');
    }
}

//display all the books in the library on screen
for(let i=0; i<myLibrary.length; i++){
    displayBook(myLibrary[i]);
}

//the + New book button
const addNewBook=document.querySelector('.addBook');
addNewBook.addEventListener('click', ()=> addBookForm());

//the function which opens up a form so that the user can add a new book to the library
function addBookForm(){
    const bookForm=document.createElement('div');
    bookForm.classList.add('formcard');

    const form=document.createElement('form');
    bookForm.appendChild(form);

    const titleInput=document.createElement('input');
    titleInput.setAttribute('placeholder', 'Book title*');
    titleInput.setAttribute('id', 'bookTitle');
    titleInput.setAttribute('required', 'true');
    form.appendChild(titleInput);

    const authorInput=document.createElement('input');
    authorInput.setAttribute('placeholder', 'Author*');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('required', 'true');
    form.appendChild(authorInput);

    const pagesInput=document.createElement('input');
    pagesInput.setAttribute('placeholder', 'No.of pages*');
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('required', 'true');
    form.appendChild(pagesInput);

    const readOrNotLabel=document.createElement('label');
    readOrNotLabel.textContent="Status:";
    readOrNotLabel.setAttribute('for', 'status');
    
    const readOrNotInput=document.createElement('select');
    readOrNotInput.setAttribute('name','status');
    readOrNotInput.setAttribute('id', 'status');

        
    const readOption=document.createElement('option');
    readOption.textContent="Read";
    readOption.setAttribute('value', 'true');
    readOrNotInput.appendChild(readOption);

    const notReadOption=document.createElement('option');
    notReadOption.textContent="Not read";
    notReadOption.setAttribute('value', 'false');
    readOrNotInput.appendChild(notReadOption);

    const readOrNotDiv=document.createElement('div');
    readOrNotDiv.classList.add('readOrNot');
    form.appendChild(readOrNotDiv);
    readOrNotDiv.appendChild(readOrNotLabel);
    readOrNotDiv.appendChild(readOrNotInput);

    const lastLineDiv=document.createElement('div');
    form.appendChild(lastLineDiv);

    const cancelEntry=document.createElement('button');
    cancelEntry.textContent="Cancel";
    cancelEntry.setAttribute('type', 'button');
    lastLineDiv.appendChild(cancelEntry);

    const addBookButton=document.createElement('button');
    addBookButton.textContent='Add';
    addBookButton.classList.add('addBookBtn');
    addBookButton.setAttribute('type', 'button');
    lastLineDiv.appendChild(addBookButton);

    const main=document.querySelector('.main');
    main.appendChild(bookForm);

    //the add book button on the form
    addBookButton.addEventListener('click', ()=> {
        addBookToLibrary();
        removeForm();})

    //the cancel entry button on the form
    cancelEntry.addEventListener('click', ()=>removeForm());
}

//the function which creates a new Book entry, once the Add book button is selected
function addBookToLibrary(){
    const bookTitle=document.getElementById('bookTitle').value;
    const author=document.getElementById('author').value;
    const pages=document.getElementById('pages').value;
    const readit=document.getElementById('status').value;
    if ((bookTitle != [])&&(author != [])&&(pages !=[])){
        myLibrary.push(new Book(bookTitle,author,pages, readit));
        displayBook(myLibrary[myLibrary.length-1]);
    }
        else alert('Incomplete values');
    }

//removes the add book form from the screen
function removeForm(){
    const formcard=document.querySelector('.formcard');
    const main=document.querySelector('.main');
    main.removeChild(formcard);
}

//removes a book when delete button is pressed
function removingBook(indexToRemove){
    let isExecuted=confirm("Are you sure you want to delete this entry?");
        if (isExecuted){
            const bookToRemove=document.querySelector(`[data-id='${indexToRemove}']`);
            const main=document.querySelector('.main');
            main.removeChild(bookToRemove);

            for (let i=parseInt(indexToRemove)+1; i<myLibrary.length; i++){
                const bookDiv=document.querySelector(`[data-id='${i}']`);
                bookDiv.setAttribute('data-id', `${i-1}`);

                const deleteImg=document.getElementById(i);
                deleteImg.removeAttribute('id');
                deleteImg.setAttribute('id', `${i-1}`);
            }
            myLibrary.splice(indexToRemove,1);
        }
}

