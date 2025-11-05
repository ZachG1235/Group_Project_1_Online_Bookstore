import { useEffect, useState } from 'react'
import Book from './Book'

function BookList(props) {
    // check if books is not empty
    if (props.books != null) {
        return (
            <div class="container mt-4">
              <div class="row">
                {props.books.map(book => (
                    <Book 
                    key={book.bookId} 
                    book={book} 
                    user={props.user}
                    setBooks={props.setBooks} 
                    />
                ))}
              </div>
            </div>
        )
    }
}

export default BookList