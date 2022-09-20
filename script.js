let myLibrary = [];

function Book(title, author, pagesNumber, readTheBook){
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.readTheBook = readTheBook;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    myLibrary.forEach( book => {
        console.log(book);
    })
}

function addBooksToTable(){
    const table = document.querySelector(".table");
    myLibrary.forEach( (book, index) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.setAttribute("scope","row");
        th.textContent = index +1;

        let title = document.createElement("td");
        title.textContent = book.title;
        let author = document.createElement("td");
        author.textContent = book.author;
        let pagesNumber = document.createElement("td");
        pagesNumber.textContent = book.pagesNumber;
        let readTheBook = document.createElement("td");
        readTheBook.textContent = book.readTheBook;

        let td = document.createElement("td");
        let changeStatusBtn = document.createElement("button");
        changeStatusBtn.classList.add("btn", "btn-warning");
        changeStatusBtn.textContent = "Change Status";
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.textContent = "Remove Book";
        td.append(changeStatusBtn,deleteBtn);
        tr.append(th,title,author,pagesNumber,readTheBook, td);
        table.append(tr);
    });
}

Book.prototype.info = function (){
    console.log(`The ${this.title} by ${this.author}, ${this.pagesNumber}, ${this.readTheBook}`);
}

var exampleBook1 = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
var exampleBook2 = new Book("Don Quixote", "Miguel de Cervantes", "1077 pages", "not read yet");
var exampleBook3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "208 pages", "not read yet");

addBookToLibrary(exampleBook1);
addBookToLibrary(exampleBook2);
addBookToLibrary(exampleBook3);




