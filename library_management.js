// Create a Book Class 

class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = true;
    };
getdetails() {
    return `Title: ${this.title},
            Author: ${this.author},
            ISBN: ${this.ISBN}`
};
get isAvailable(){
    return this.isAvailable
};
set isAvailable(status) {
    this.isAvailable = status;
};

};

// Create a Section Class 

class Section {
    constructor(name, books,) {
        this.name = name;
        this.books = books
    };

    addBook(book) {
        this.books.push(book);
    };
    
    getAvailableBooks(){
        return this.books.filter(book => book.isAvailable).length;
    };
    
    listBooks(){
        return this.books.map(book => book.getdetails().join('/n'));
    };

};

// Create a Patron Class 

class Patron {
    constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
    };

    borrowBook(book){
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} has borrowed "${book.title}"`);
        } else {
            console.log(`Sorry, "${book.title}" is currently not available.`);
        };
    };

    returnBook(book){
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} has returned "${book.title}"`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        };
    };
};