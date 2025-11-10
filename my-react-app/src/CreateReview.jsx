import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

function CreateReview(props) {
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const { bookId } = useParams();

    // create code that runs when form is submitted
    const handleSubmit = async (event) => {
        event.preventDefault();

        // collect the data from the form as jsonData
        const data = new FormData(event.target);
        const jsonData = {
            title: data.get('title'),
            review: data.get('review'),
            rating: data.get('rating'),
            bookId: bookId,
            author: props.user["username"]
        };

        // send the data to the server
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
            credentials: 'include'
        });

        const result = await response.json();

        // check if signin was successful
        if (result.success) {
            // redirect to book page
            navigate(`/book/${bookId}`);
        } 
    };

    return (
        <div className="blogForm card text-center card-body cust-max-screen-width-600">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <div className="mb-3">
                    <div className="text-start">
                      <label className="form-label formLabel"><b>Review Title</b></label>
                    </div>
                    <input className="form-control" type="text" name="title" placeholder="Please enter your review title" required/>
                </div>
                <div className="mb-3">
                    <div className="text-start">
                      <label className="form-label formLabel"><b>Review</b></label>
                    </div>
                    <input className="form-control" type="text" name="review" placeholder="Please enter your review" required/>
                </div>
                <div className="mb-3">
                    <div className="text-start">
                      <label className="form-label formLabel"><b>Rating</b></label>
                    </div>
                    <input className="form-control" type="number" min="1"
    max="5" name="rating" placeholder="Please enter your rating" required/>
                </div>
                <input className="btn btn-dark w-100 my-2" type="submit" value="Review"/>
                </div>
            </form>
        </div>
    )
}

export default CreateReview