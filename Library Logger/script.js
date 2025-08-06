
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const bookList = document.getElementById("book-list");


let books = JSON.parse(localStorage.getItem("books")) || [];

// Show books on screen
function renderBooks() {
  bookList.innerHTML = ""; 

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      "${book.title}" by ${book.author}
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    bookList.appendChild(li);
  });
}

// Add book on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    books.push({ title, author }); 
    localStorage.setItem("books", JSON.stringify(books)); 
    renderBooks(); 
    titleInput.value = "";
    authorInput.value = "";
  }
});

// Delete book from list
function deleteBook(index) {
  books.splice(index, 1); 
  localStorage.setItem("books", JSON.stringify(books)); 
  renderBooks(); 
}

// Initial render when page loads
renderBooks();
