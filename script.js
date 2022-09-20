let myLibrary = [];

loadDumpData();
addBooksToTable();
createModal();

function Book(title, author, pagesNumber, readTheBook){
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.readTheBook = readTheBook;
}

function loadDumpData(){
  let exampleBook1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
  let exampleBook2 = new Book("Don Quixote", "Miguel de Cervantes", "1077", "not read yet");
  let exampleBook3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "208", "not read yet");

  addBookToLibrary(exampleBook1);
  addBookToLibrary(exampleBook2);
  addBookToLibrary(exampleBook3);
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
    const tbody = document.querySelector(".tbody");
    myLibrary.forEach( (book, index) => {
        let tr = createNewRow(index,book);
        tbody.append(tr);
    });
}

function createNewRow(index,book){
  let tr = document.createElement("tr");
  let th = createHeader(index);
  let rowData = createRowData(book);
  let td = document.createElement("td");
  let buttons = createButtons(index);
  td.append(buttons.changeStatusBtn,buttons.deleteBtn);
  tr.append(th,rowData.title,rowData.author,rowData.pagesNumber,rowData.readTheBook, td);
  return tr;
}

function createHeader(index){
  let th = document.createElement("th");
  th.setAttribute("scope","row");
  th.textContent = index +1;
  return th;
}

function createRowData(book){
  let title = document.createElement("td");
  title.textContent = book.title;
  let author = document.createElement("td");
  author.textContent = book.author;
  let pagesNumber = document.createElement("td");
  pagesNumber.textContent = book.pagesNumber;
  let readTheBook = document.createElement("td");
  readTheBook.textContent = book.readTheBook;
  return {title,author,pagesNumber,readTheBook}
}

function createButtons(index){
  let changeStatusBtn = createChangeStatusButton(index);
  let deleteBtn = createDeleteButton(index)
  return {changeStatusBtn,deleteBtn};
}

function createChangeStatusButton(index){
  let changeStatusBtn = document.createElement("button");
  changeStatusBtn.classList.add("btn", "btn-warning");
  changeStatusBtn.textContent = "Change Status";
  changeStatusBtn.onclick = function(){
    if(myLibrary[index].readTheBook === "not read yet"){
      myLibrary[index].readTheBook = "readed";
      refreshTable()
    }else if (myLibrary[index].readTheBook === "readed"){
      myLibrary[index].readTheBook = "not read yet";
      refreshTable()
    }
  }
  return changeStatusBtn;
}

function createDeleteButton(index){
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.textContent = "Remove Book";
  deleteBtn.onclick = function(){
    myLibrary.splice(index,1);
    refreshTable();
  }
  return deleteBtn;
}


function createModal(){

  var modal = document.getElementById("myModal");

  var btn = document.getElementById("addBtn");

  var closeBtn = document.getElementById("closeBtn");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  closeBtn.onclick = function() {
    if(!(this.form.title.value==="" || this.form.author.value==="" || this.form.pagesNumber.value==="" || this.form.readTheBook.value==="")){
      modal.style.display = "none";
      addBookToArray(this.form);
      emptyForm(this.form);
    }else{
      alert("Please fill all the fields");
    }
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function emptyTable(){
  const tbody = document.querySelector(".tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

function emptyForm(form){
  form.title.value = "";
  form.author.value = "";
  form.pagesNumber.value = "";
  form.readTheBook.value = "";
}

function refreshTable(){
  emptyTable();
  addBooksToTable();
}


function addBookToArray(form) {
  let newBook = new Book(form.title.value, form.author.value, form.pagesNumber.value, form.readTheBook.value);
  addBookToLibrary(newBook);
  refreshTable();
}

Book.prototype.info = function (){
    console.log(`The ${this.title} by ${this.author}, ${this.pagesNumber}, ${this.readTheBook}`);
}

