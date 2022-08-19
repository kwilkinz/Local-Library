/* Desription: give a default paramenter to total books array. 
get the length by books.length
*/
function getTotalBooksCount(books = 0) {
  return books.length;
}



/* Description: same as above use the length & default paramaters.
*/
function getTotalAccountsCount(accounts = 0) {
  return accounts.length;
}



/* filter through the books, then borrows section 
    when the books arent returned increment totalBooks */
function getBooksBorrowedCount(books) {
  let totalBooksBorrowed = 0;
  books.filter((book) =>
    book.borrows.some((borrow) => !borrow.returned && totalBooksBorrowed++)
  );
  return totalBooksBorrowed;
}


/* Description: Going through books, if when going through the genre names. If the name is already in 
    count then increment. if it doesnt have its name there then, take the name and create only 1 point to it. 
    // Step 1: sort through the names, if the same move on count ++
    // Step 2: if not the same add name to new array couint ++ new name
*/
function getMostCommonGenres(books) {
  let newMap = {};
  books.forEach((item) => {
    (newMap[item.genre]) ? (newMap[item.genre]++) : (newMap[item.genre] = 1) 
  });
  /* Now we need a way to: ask the count for the name in the {} and also the count. 
    Along with .sorting from the count. & only taking 5 from the {} slice */
  return Object.entries(newMap)
    .map(([name, count]) => {
      return { name, count };
    })
    .sort((numA, numB) => numB.count - numA.count)
    .slice(0, 5);
}


/* Description: Popularity is represented by the number of times a book has been borrowed 
      The id. is specifc to the book. (count how many borrows)
      Two Object Keys [name: , count:]
      sort for most popular using the borrowing length. 
      slice to only have 5 objects
*/
function getMostPopularBooks(books) {
  // Step 1: Organize book data
  let borrows = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  // sort by borrow count, less than
  borrows.sort((numA, numB) => (numA.count < numB.count ? 1 : -1));
  // return borrows, with top 5
  return borrows.slice(0, 5);
}
  



/* Description bluprint: 2 paramets which are you wanting to look through? Are 
  you specifically looking for something in that box? If yes: here are the folders.. 
  Are we looking for something specific? if yes write it down... if the Authors id
  matches books author id.. then now what are we looking for once we have both books. 
  Books has plenty of users, but we are specificaslly looking at the front page of all 
  the people that borrowed this specific book... How can we get all the borrows from
  this book?... After we need something to hold the overall author & book..
*/
function getMostPopularAuthors(books, authors) {
  let finalResult = [];
  // loop through specifically authors... then
  authors.forEach((author) => {
    let getAuthor = {
      // list them out. Want to print them. -- { name: 'Tate Fletcher', count: 0 } 
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    }; 
    // Specifically looking for something in book
    books.forEach((book) => {
      if (book.authorId === author.id) {
        getAuthor.count += book.borrows.length;
      }
    });
    finalResult.push(getAuthor);
  });
  return finalResult.sort((numA, numB) => numB.count - numA.count).slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
