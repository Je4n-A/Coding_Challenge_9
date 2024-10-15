// Create a Book Class 

class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    };
getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`
};

get isAvailable(){
    return this._isAvailable;
};

set isAvailable(status) {
    this._isAvailable = status;
};

};

// Create a Section Class 

class Section {
    constructor(name, books = []) {
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
        return this.books.map(book => `${book.title} - ${book.isAvailable ? 'Available' : 'Not Available'}`).join('\n');
    };
    
//  Handle Books Borrowing and Returning
    calculateTotalBooksAvailable(){
        return this.books.filter(book => book.isAvailable).length;
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

// Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
 constructor(name) {
    super(name);
    this.priority = true;
 };
borrowBook(book){
    if(book.isAvailable){
        book.isAvailable = false;
        this.borrowedBooks.push(book);
        console.log(`${this.name} (VIP) has borrowed "${book.title}"`);
    } else {
        console.log(`Sorry, "${book.title}" is currently not available.`);
    };
 };
};

// Create and Manage Sections and Patrons 

// Create Sections
const fictionSection = new Section('Fiction');
const nonFictionSection = new Section('Non-Fiction');

// Create Books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '123456789');
const book2 = new Book('1984', 'George Orwell', '987654321');
const book3 = new Book('Sapiens', 'Yuval Noah Harari', '1122334455');
const book4 = new Book('Educated', 'Tara Westover', '5566778899');

// Add Books to Sections
fictionSection.addBook(book1);
fictionSection.addBook(book2);
nonFictionSection.addBook(book3);
nonFictionSection.addBook(book4);

// Create Patrons
const patron1 = new Patron('Tenma');
const patron2 = new Patron('Johan');
const vipPatron = new VIPPatron('Charlie');

// Borrow Books
patron1.borrowBook(book1);
patron2.borrowBook(book3);
vipPatron.borrowBook(book2);

// Return Books
patron1.returnBook(book1);
vipPatron.returnBook(book2);

// List Books and availability
console.log('Fiction Section Books:');
console.log(fictionSection.listBooks());
console.log('Non-Fiction Section Books:');
console.log(nonFictionSection.listBooks());

// Calculate Total Available Books in Each Section
console.log(`Total available books in Fiction: ${fictionSection.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Non-Fiction: ${nonFictionSection.calculateTotalBooksAvailable()}`);

