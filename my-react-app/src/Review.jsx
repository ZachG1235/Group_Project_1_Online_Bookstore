import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Rating from "./Rating";

function Review(props) {
    const [author, setAuthor] = useState(null)
    useEffect(() => {
    fetch(`/api/author/${props.review["author"]}`).then(
        response => response.json()).then(data => {
        setAuthor(data.displayName)
    }
    )
    }, [props.review.author])

    const handleSubmit = async (event) => {
        event.preventDefault();

        // send the data to the server
        const response = await fetch('/api/deleteReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reviewId: props.review.reviewid }),
            credentials: 'include'
        });

        const result = await response.json();

        // check for success
        if (result.success)
            {
                // fetch updated blogs & display them
                const reviewResponse = await fetch(`/api/reviews/${props.review.bookid}`);
                const reviewData = await reviewResponse.json();
                props.setReviews(reviewData.reviews);
            }
    };

    return (
        <div className="review">
            {props.review && (
                <>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4 style={{marginLeft:"1%", marginTop:"10px"}}>{props.review["reviewtitle"]}</h4>
                    <h5 style={{marginRight:"1%", marginTop:"10px"}}>{author && author}</h5>
                </div>
                <div className="reviewRating">
                    <Rating rating={props.review["rating"]}/>
                </div>
                <div className="reviewForm">
                    <p style={{marginLeft:"1%", marginTop:"10px"}}>{props.review["reviewtext"]}</p>
                    {props.user && props.review["author"] === props.user["username"] ? (
                    <form style={{marginRight:"1%"}} onSubmit={handleSubmit}>
                        <input type="submit" class="btn btn-dark btn-outline-light" value="Delete"/>
                    </form>
                    ) : ""}
                </div>
                </>
                )}
        </div>
    )
}

export default Review