class BookStore {
  constructor() {
    this.bookStore = JSON.parse(localStorage.getItem('bookItem')) || [];
    this.submitButton = document.getElementById('submit');
    this.bookListDiv = document.getElementById('bookList');

    this.submitButton.addEventListener('click', this.addBook.bind(this));
    this.displayBooks();
  }

  displayBooks = () => {
    this.bookListDiv.innerHTML = '';

    for (let i = 0; i < this.bookStore.length; i += 1) {
      const book = this.bookStore[i];

      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <p>${book.bookTitle}</p>
        <p>${book.bookAuthor}</p>
        <button class="remove-button">Remove</button>
      `;

      const removeButton = bookElement.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
        this.removeBook(i);
      });

      this.bookListDiv.appendChild(bookElement);
      this.checkForBookstoreLength();
    }
  }

  addBook = () => {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const newBook = { bookTitle, bookAuthor };
    this.bookStore.push(newBook);
    localStorage.setItem('bookItem', JSON.stringify(this.bookStore));
    this.displayBooks();
    this.clearForm();
  }

  removeBook = (index) => {
    this.bookStore.splice(index, 1);
    localStorage.setItem('bookItem', JSON.stringify(this.bookStore));
    this.displayBooks();
    this.checkForBookstoreLength();
  }

  checkForBookstoreLength = () => (this.bookStore.length > 0 ? this.bookListDiv.classList.add('showBookListBorder') : this.bookListDiv.classList.remove('showBookListBorder'))

  clearForm = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

export default BookStore;