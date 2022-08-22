/* Used: .reduce() & .find()
Goal: return the account object that has the matching ID.
Steps: Take the entire accounts [{}] array object and flatten to an array 
  then use the flattened array to find the users account and see if it equals 
  the id inputed. 
*/
function findAccountById(accounts, id) {
  const flatten = accounts.reduce((pValue, cValue) => pValue.concat(cValue),
  [],
  ); 
  return flatten.find((user) => user.id === id);
}


/* Used: .sort() 
Goal: returns a sorted array of the provided account objects. The objects are sorted 
alphabetically by last name.
Steps: Sorts accounts by last name. Use .sortt() evaluate.
*/
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last <= nameB.name.last ? -1 : 1
  );
}


/* Used: .forEach()  
Goal: returns a # that represents the number of times the account's ID appears in 
any book's `borrows` array.
Steps: we need to simplify the account id and then have a total of how many books 
are borrowed. While inside books, we need to go inside the borrows looking for the borrows.id
and compare that to the accountId. Then increment  the totalBooksBorrowed.
*/
function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let totalBooksBorrowed = 0;
  books.forEach((books) =>
    books.borrows.forEach((borrow) => 
      borrow.id === accountId && totalBooksBorrowed++
    )
  );
  return totalBooksBorrowed;
}




/* Used: .forEach() & /find() & .push()
Goal: returns an array of book objects, including author information, that represents all book
currently checked out by the given account.
Step 1: find all books taken out by an acct.id & if they are false
Step 2:  if so, push that book into booksTaken out
Step 3:  Then think about the item itself. the new array (forEach or Map) =>
Step 4:  find if the author.id is the same as the book author id 
step 5: if it is add the author return booksTaken
*/
function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = [];
  books.forEach((book) => {
    if (book.borrows.find((borrow) => 
      borrow.id === account.id && !borrow.returned)) {
        booksTaken.push(book);
    }
  });
  booksTaken.forEach((book) => {
    let theeAuthor = authors.find((person) => person.id === book.authorId);
    book["author"] = theeAuthor;
  });
  return booksTaken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
