import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Book from "./Book";
import BookReviews from "./BookReviews";
import Rating from "./Rating";

function BookPage(props) {
    const { bookId } = useParams();
    const [book, setBook] = useState(null)
    useEffect(() => {
    fetch(`/api/book/${bookId}`).then(
        response => response.json()).then(data => {
        setBook(data.book)
    }
    )
    }, [bookId])
    return (
        <div>
            <div className="bookPage">
                {/* {props.user ? <BlogPostForm user={props.user} setBlogs={setBlogs}/> : null}
                <BookList user={props.user} books={books} setBooks={setBooks}/> */}
                {book && (
                    <>
                <img src="/book.jpg" className="card-img-top" alt="..." />
                <div>
                    <h3>{book["title"]}</h3>
                    <p>Author: {book["author"]}</p>
                    <p>Genre: {book["genre"]}</p>
                    <p>Publication Date: {book["pubdate"]}</p>
                    <div className="bookPageRating">
                        <Rating rating={book["rating"]}/>
                    </div>
                    <p>Description: {book["description"]}</p>
                </div>
                </>
                )}
            </div>
            {book && <BookReviews bookId={bookId} />}
        </div>
    )
}

export default BookPage