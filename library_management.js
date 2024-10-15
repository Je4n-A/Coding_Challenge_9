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