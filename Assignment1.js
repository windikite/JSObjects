// Assignment 1
// Task1
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    //      Task2
    this.details = function () {
         return `${this.title} - ${this.author} - ${pages} pages.`;
    };

    this.get_title = function () {
         return this.title;
    };

    this.get_author = function () {
         return this.author;
    };

    this.get_pagecount = function () {
         return this.pages;
    };

    this.set_title = function (new_title) {
         if (typeof new_title === "string" || new_title instanceof String) {
              this.title = new_title;
         }
    };

    this.set_author = function (new_author) {
         if (typeof new_author === "string" || new_author instanceof String) {
              this.author = new_author;
         }
    };
}

// Task3
const library = [];

function add_book_to_library(title, author, pages) {
    library.push(new book(title, author, pages));
}

function search_book(title) {
    return library.filter((x) => x.get_title().includes(title));
}

function print_books(books) {
    if (books.length > 0) {
         books.forEach((x) => console.log(x.details()));
    } else {
         console.log(`No books found!`);
    }
}

// Task4
function filter_page_count(max_pages) {
    return library.filter((x) => x.get_pagecount() <= max_pages);
}

// Task5
function fix_title_and_author(book) {
    book.set_title(`Title: ${book.get_title()}`);
    book.set_author(`Author: ${book.get_author()}`);
}

add_book_to_library("The Cowboy Havamal", "Jackson Crawford", 250);
// testing details method
console.log(`testing details method...`);
console.log(library[0].details());
// testing book search
console.log(`testing book search...`);
print_books(search_book("Cowboy"));
// testing page count filter
console.log(`testing page count filter...`);
print_books(filter_page_count(100));
print_books(filter_page_count(250));
// testing title and author fix
console.log(`testing title and author fix`);
library.forEach((x) => fix_title_and_author(x));
print_books(library);