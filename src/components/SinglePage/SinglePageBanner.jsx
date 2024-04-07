import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SinglePage.module.css";
import Header from "../Header/Header";
import image1 from "../../assets/download (1).jpeg";
import image2 from "../../assets/download.jpeg";
import image3 from "../../assets/download.jpeg";
import UserReviews from "./UserReviews/UserReviews";
import YourReviews from "./YourReviews/YourReviews";

function SinglePageBanner() {
  // Sample images for the slider
  const images = [image1, image2, image3];

  // Slick settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        {/* Top part covering 10% of the screen */}
        <div className={styles.topPartition}>
          {/* Left part */}
          <div className={styles.leftTopPartition}>
            <p className={styles.performanceHeading}>Performance Name</p>
          </div>

          {/* Right part */}
          <div className={styles.rightTopPartition}>
            {/* Three divs with yellow background and space between */}
            <div>
              <p style={{ marginBottom: "6px" }}>IPDb Ratings</p>
              <span style={{ fontSize: "20px" }}>7.5</span> / 10
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>Your Rating</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                id="star"
              >
                <defs>
                  <linearGradient
                    id="b"
                    x1="-1483.396"
                    x2="-1155.767"
                    y1="1056.787"
                    y2="1056.787"
                    gradientUnits="userSpaceOnUse"
                  ></linearGradient>
                  <linearGradient id="a">
                    <stop offset="0" stopColor="#fcd635"></stop>
                    <stop offset="1" stopColor="#f7a928"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="#6c63ff"
                  d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                  color="#000"
                  overflow="visible"
                  transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  style={{ marker: "none" }}
                ></path>
              </svg>
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>Reviews</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="review"
              >
                <path fill="#6c63ff" color="#000" d="M0 0h24v24H0V0z"></path>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm11 0h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom part covering 90% of the screen */}
        <div className={styles.bottomPartition}>
          {/* Left side covering 40% */}
          <div className={styles.leftSide}>
            {/* Image Slider */}
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Right side covering 60% */}
          <div className={styles.rightSide}>
            {/* Top part covering 45% of the right side */}
            <div className={styles.topRight}>
              {/* Video Player */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=SNxzxxbUMts&list=RDSNxzxxbUMts&start_radio=1"
                controls
                width="100%"
                height="100%"
              />
            </div>

            {/* Bottom part covering 55% of the right side */}
            <div className={styles.bottomRight}>
              {/* Description (30%) */}
              <div className={`${styles.description} ${styles.infoBlock}`}>
                <h3>About</h3> <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  quidem odit modi sed officia eos consequatur, voluptatibus,
                  fuga laudantium eaque deserunt sapiente dolor commodi dolorem
                  praesentium. Fugit sunt ullam natus! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Illo, odit laborum! Velit
                  dolore, odio ratione atque molestias voluptas. Nostrum esse
                  quibusdam quidem in ipsum rerum voluptas aut mollitia quod
                  repudiandae.
                </p>
              </div>

              {/* Information (70%) */}
              <div className={`${styles.information} ${styles.infoBlock}`}>
                {/* Left part (65%) */}
                <div className={styles.leftInformation}>
                  <p className={styles.infopara}>
                    <span className={styles.infohead}>Artist :</span>{" "}
                    <span className={styles.infoans}>Artist(s) Name</span>
                    <br />
                  </p>
                  <p className={styles.infopara}>
                    <span className={styles.infohead}>Type :</span>{" "}
                    <span className={styles.infoans}>Performance Category</span>
                  </p>
                  <p className={styles.infopara}>
                    <span className={styles.infohead}>Place :</span>{" "}
                    <span className={styles.infoans}>Place / online</span>
                  </p>{" "}
                </div>

                {/* Right part (35%) */}
                <div className={styles.rightInformation}>
                  <p className={styles.infopara}>
                    <span className={styles.infohead}>Date :</span>{" "}
                    <span className={styles.infoans}>Date</span>
                  </p>
                  <p className={styles.infopara}>
                    <span className={styles.infohead}>Duration :</span>{" "}
                    <span className={styles.infoans}>x mins</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ReviewsAndRatings}>
        {/* Left Section */}
        <div className={styles.RleftSection}>
          <UserReviews />
        </div>

        {/* Right Section */}
        <div className={styles.RrightSection}>
          <YourReviews />{" "}
        </div>
      </div>
    </div>
  );
}

export default SinglePageBanner;
