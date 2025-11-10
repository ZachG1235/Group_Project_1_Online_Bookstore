import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import Review from "./Review";

function BookReviews(props) {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([])
    useEffect(() => {
    fetch(`/api/reviews/${props.bookId}`).then(
        response => response.json()).then(data => {
        setReviews(data.reviews)
    }
    )
    }, [])

    return (
        <div className="bookReviews">
            {props.user && (
            <div className="reviewButtonDiv">
                <button className="reviewButton rounded-pill" onClick={() => navigate(`/review/${props.bookId}`)}>&#9733; Write a review</button>
            </div>
            )}
            {reviews && reviews.map(review => (
                    <Review 
                    key={review.reviewId} 
                    review={review} 
                    user={props.user}
                    setReviews={setReviews} 
                    />
                ))}
        </div>
    )
}

export default BookReviews