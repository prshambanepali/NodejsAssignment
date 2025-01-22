class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  display() {
    return `Author name:"${this.author}" Title :${this.title} Published in: ${this.year}`;
  }
}

const book1 = new Book('Javascript', 'Prasham', 2025);
console.log(book1.display()); // The book "1984" was written by George Orwell in 1949.
