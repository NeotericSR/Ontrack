import React from 'react';

const BookList = ({books, loading, search}) => {

    if(loading){
        return <div id="loading">Loading...</div>;
      }
      else
      {
        return <ul>{books.map
        (book => 
        <li key={book.id} className="App__book">
          <span>{book.book_author}</span>
          <span>{book.book_publication_city}</span>
          <span>{book.book_publication_country}</span>
          <span>{book.book_publication_year}</span> 
          <span>{book.book_pages}</span> 
          <span>{book.book_title}</span>
        </li>)}</ul>;
      }
}

export default BookList;