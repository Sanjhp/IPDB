import React, { useState } from "react";
import styles from "./YourReviews.module.css";

function YourReviews() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any action with the name and comment values
    console.log("Name:", name);
    console.log("Comment:", comment);
  };

  return (
    <div className={styles.yourReviewsContainer}>
      {/* Top Part (40%) */}
      <div className={styles.topSection}>
        <h2 style={{ color: "rgb(248, 248, 255)", marginBottom: "10px" }}>
          Rate this Show
        </h2>
        <div className={styles.starContainer}>
          {/* You can replace the star icons with your own SVG or icon library */}
          {[1, 2, 3, 4, 5].map((index) => (
            // <span key={index} className={styles.starIcon}></span>
            <div className={styles.fivePointedStar} key={index}></div>
          ))}
        </div>
      </div>

      {/* Bottom Part (60%) */}
      <div className={styles.bottomSection}>
        <h2
          style={{
            color: "rgb(248, 248, 255)",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Leave a Comment
        </h2>
        {/* Input fields for name and comment */}
        <div>
          {/* <label htmlFor="name" style={{ textAlign: "left" }}>
            Name:
          </label> */}
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
          />
        </div>
        <div>
          {/* <label htmlFor="comment" style={{ textAlign: "left" }}>
            Comment:
          </label> */}
          <br />
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Your reviews"
          ></textarea>
        </div>
        {/* Submit button */}
        <button onClick={handleSubmit} className={styles.reviewButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default YourReviews;
