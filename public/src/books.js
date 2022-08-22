/* Using: .find()
Goal: returns the author object that has the matching ID.
Steps: find the user.id using find() method 
*/
function findAuthorById(authors, id) {
  return authors.find((user) => user.id === id);
}

/* Using: .find()
Goal: returns the book object that has the matching ID. 
Steps: find the the books id using user input id. 
using .find because we are only looking for the first element
that matches in the array of books.
*/
function findBookById(books, id) {
  return books.find((oneBook) => oneBook.id === id);
}




/* Used: .everey() & .filter() & spread operator
Goal: returns an array with two arrays inside of it. All of the inputted books are present in 
either the first or second array.
Step 1: filter through books do this.. (next line)
Step 2: Going through .EVERY() borrows do this..
Step 3: if the returned says === true then.
*/
function partitionBooksByBorrowedStatus(books) {
  const booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  /* Repeat the process from above, but using false & booksBorrowed */
  const booksBorrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  /* Step : Spread Operator will be used at the end to combine the two arrays */
  return [[...booksBorrowed], [...booksReturned]];
}




/* Used: .map() & slice() & *helper function*
Goal: should return an array of ten or fewer account objects that represents the accounts given 
by the IDs in the provided book's `borrows` array
Steps: Get borrows using map, then usiong the helper function from 
findAuthorbyId we can then evaluate those two together. While adding slice to 
only hold 10 people max.
*/
function getBorrowersForBook(book, accounts) {
    let borrowX = book.borrows.map((borrow) => { 
    let accountX = findAuthorById(accounts, borrow.id); // This is a helper function
    accountX.returned = borrow.returned; 
    return accountX; 
}).slice(0, 10); 
return borrowX; 
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
