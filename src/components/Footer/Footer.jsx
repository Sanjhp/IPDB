// Footer.js
import React from "react";
import styles from "./Footer.module.css"; // Import your CSS module

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Your other content here */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className={styles.svg}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className={styles.waves}>
          <use
            href="#gentle-wave"
            x="50"
            y="0"
            fill="#6c63ff"
            fillOpacity=".2"
          />
          <use
            href="#gentle-wave"
            x="50"
            y="3"
            fill="#6c63ff"
            fillOpacity=".5"
          />
          <use
            href="#gentle-wave"
            x="50"
            y="6"
            fill="#6c63ff"
            fillOpacity=".9"
          />
        </g>
      </svg>
    </div>
  );
};

export default Footer;
