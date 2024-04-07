import React from "react";
import styles from "./UserReviews.module.css";

function UserReviews() {
  // Sample review data
  const reviewsData = [
    {
      userName: "User1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem odit modi sed officia eos consequatur, voluptatibus, fuga laudantium eaque deserunt sapiente dolor commodi dolorem.",
    },
    {
      userName: "User2",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem odit modi sed officia eos consequatur, voluptatibus, fuga laudantium eaque deserunt sapiente dolor commodi dolorem.",
    },
    {
      userName: "User3",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem odit modi sed officia eos consequatur, voluptatibus, fuga laudantium eaque deserunt sapiente dolor commodi dolorem.",
    },
    {
      userName: "User3",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem odit modi sed officia eos consequatur, voluptatibus, fuga laudantium eaque deserunt sapiente dolor commodi dolorem.",
    },
    {
      userName: "User3",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem odit modi sed officia eos consequatur, voluptatibus, fuga laudantium eaque deserunt sapiente dolor commodi dolorem.",
    },
    {
      userName: "User3",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem odit modi sed officia eos consequatur, voluptatibus, fuga laudantium eaque deserunt sapiente dolor commodi dolorem.",
    },
  ];

  return (
    <div className={styles.userReviewsContainer}>
      <h2
        style={{
          color: "rgb(248, 248, 255)",
          marginBottom: "10px",
          marginLeft: "2%",
        }}
      >
        Reviews
      </h2>
      {reviewsData.map((review, index) => (
        <div key={index} className={styles.userReviewEntry}>
          <p className={styles.Rusername}>{review.userName}</p>
          <p className={styles.Ruserreview}>{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default UserReviews;
