# projectLocalLibrary

Accounts.js - Functions that are in use: 
 A. findAccountById(accounts, id)
  1. .Reduce() 
  2. .find() 
  3. .concat
  
 B. sortAccountsByLastName(accounts): 
  1. .sort() 
  
 C. getTotalNumberOfBorrows(account, books): 
  1. .forEach()
  
 D. getBooksPossessedByAccount(account, books, authors): 
  1. .forEach() 
  2. .find() 
  3. .push() 
  
  
Books.js -- Function that are in use: 
  A. findAuthorById(authors, id): 
    1. .find() 
    
  B. findBookById(books, id): 
    1. .find() 
   
  C. partitionBooksByBorrowedStatus(books): 
    1. .filter()
    2. .every()
    3. .some() 
    4. Spread Operator 
    
  D. getBorrowersForBook(book, accounts): 
    1. .map() 
    2. Helper Function (findAuthorById)
    3. .slice()
    
  
  Home.js -- Function that are in use: 
    A. getTotalBooksCount(books = 0): 
      1. Default Parameters 
      
    B. getTotalAccountsCount(accounts = 0):
      1. Default Parameters 
      
    C. getBooksBorrowedCount(books): 
      1. .filter() 
      2. .some() 
    
    D. getMostCommonGenres(books): 
      1. .forEach() 
      2. Ternary Operator 
      3. Object.entries() 
      4. .sort()
      5. .slice()
      
    E. getMostPopularBooks(books): 
      1. .map() 
      2. .sort()
      3. .slice() 
      
    F. getMostPopularAuthors(books, authors):
      1. Template Literals 
      2. .forEach()
      3. sort() 
      4. slice()
