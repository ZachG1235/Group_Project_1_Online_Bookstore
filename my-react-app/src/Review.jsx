import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Rating from "./Rating";

function Review(props) {
    // const { bookId } = useParams();
    // const [book, setBook] = useState(null)
    // useEffect(() => {
    // fetch(`/api/book/${bookId}`).then(
    //     response => response.json()).then(data => {
    //     setBook(data.book)
    // }
    // )
    // }, [bookId])
    console.log(props.review);
    return (
        <div className="review">
            {props.review && (
                <>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4 style={{marginLeft:"1%", marginTop:"10px"}}>{props.review["reviewtitle"]}</h4>
                    <h5 style={{marginRight:"1%", marginTop:"10px"}}>{props.review["author"]}</h5>
                </div>
                <div className="reviewRating">
                    <Rating rating={props.review["rating"]}/>
                </div>
                <p style={{marginLeft:"1%", marginTop:"10px"}}>{props.review["reviewtext"]}</p>
                </>
                )}
        </div>
    )
}

export default Review