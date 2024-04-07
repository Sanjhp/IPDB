import React, { useState } from "react";
import "./authForm.css"; // Make sure to import your CSS file

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <div
        className={`logincontainer ${isSignUpMode ? "sign-up-mode" : ""}`}
        style={{ width: "100%" }}
      >
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              {/* <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
            </div> */}
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              {/* <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
            </div> */}
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New to our community ?</h3>
              <p>
                Discover a world of possibilities! Join us and explore a vibrant
                community where ideas flourish and connections thrive.
              </p>
              <button className="btn transparent" onClick={toggleMode}>
                Sign up
              </button>
            </div>
            {/* <img src="https://i.imgur.com/dxW1aeu.png" className="image" alt="" /> */}
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of Our Valued Members</h3>
              <p>
                Thank you for being part of our community. Your presence
                enriches our shared experiences. Let's continue this journey
                together!
              </p>
              <button className="btn transparent" onClick={toggleMode}>
                Sign in
              </button>
            </div>
            {/* <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            className="image"
            alt=""
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
