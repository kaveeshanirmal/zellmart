import React, { useState } from "react";
import "./CSS/reviewForm.css";
const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [uploadedImages, setUploadedImages] = useState([]);
    const [error, setError] = useState("");

    const handleStarClick = (index) => {
        setRating(index);
    };

    const handleTextChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 6) {
            setError("You can upload a maximum of 6 images.");
            return;
        }
        const imageFiles = files.map((file) => URL.createObjectURL(file));
        setUploadedImages(imageFiles);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log("Rating:", rating);
        console.log("Review:", reviewText);
        console.log("Uploaded Images:", uploadedImages);
    };

    return (
        <div className="review-form-container">
        <div className="review-form">
            <p className="date">Delivered On : 09/08/2024</p>
            <br/>
            <h3>Rate and review purchased product:</h3>
            <br/>
            <div className="product-details">
            <p className="product-name">I Phone X</p>
            <p className="color">Color: Black</p>
            </div>
            <br/>
            <div className="rating-selection">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${rating >= star ? "selected" : ""}`}
                        onClick={() => handleStarClick(star)}
                    >
                     <i class="fa-solid fa-star"></i>   
                    </span>
                ))}
                <span className="rating-label">
                    {rating === 3 ? "Neutral" : rating === 1 ? "Very Poor" : rating === 2 ? "Poor" :rating === 5 ? "Delightful":"Good"}
                </span>
            </div>
            <br/>
            <p className="small-heading">Review detail</p>
            <textarea
                className="review-text"
                placeholder="What do you think of this product?"
                value={reviewText}
                onChange={handleTextChange}
            ></textarea>

            <button onClick={handleSubmit} className="submit-button">
                Submit
            </button>
        </div>
        </div>
    );
};

export default ReviewForm;
