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

Book.prototype.info = function (){
    console.log(`The ${this.title} by ${this.author}, ${this.pagesNumber}, ${this.readTheBook}`);
}

const myBook = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");

myBook.info();
