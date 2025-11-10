import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Review from "./Review";

function BookReviews(props) {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
    fetch(`/api/reviews/${props.bookId}`).then(
        response => response.json()).then(data => {
        setReviews(data.reviews)
    }
    )
    }, [])
    console.log("reviews", reviews)
    return (
        <div className="bookReviews">
            <div className="reviewButtonDiv">
                <button className="reviewButton rounded-pill">&#9733; Write a review</button>
            </div>
            {reviews && reviews.map(review => (
                    <Review 
                    key={review.reviewId} 
                    review={review} 
                    // // user={props.user}
                    // // setBooks={props.setBooks} 
                    />
                ))}
        </div>
    )
}

export default BookReviews