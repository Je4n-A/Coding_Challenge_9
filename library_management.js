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
