import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import BookList from './BookList.jsx'

function Home(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
    fetch("/api/books").then(
        response => response.json()).then(data => {
        setBooks(data.books)
    }
    )
    }, [])
    return (
        <div>
            {/* {props.user ? <BlogPostForm user={props.user} setBlogs={setBlogs}/> : null} */}
            <BookList user={props.user} books={books} setBooks={setBooks}/>
        </div>
    )
}

export default Home