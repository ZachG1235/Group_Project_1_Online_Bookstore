import { useEffect, useState } from 'react'
import Book from './Book'

function BookList(props) {
    // check if books is not empty
    if (props.books != null) {
        return (
            <div className="container-fluid mt-4">
              <div className="row ">
                <aside className="col-md-1 col-lg-1 bg-light p-3 border-end">
                  
                </aside>
                 <main className="col-md-10 col-lg-10">
                  <div className="row">
                {props.books.map(book => (
                    <Book 
                    key={book.bookId} 
                    book={book} 
                    user={props.user}
                    setBooks={props.setBooks} 
                    />
                ))}
                </div>
                </main>
              </div>
            </div>
        )
    }
}

export default BookList