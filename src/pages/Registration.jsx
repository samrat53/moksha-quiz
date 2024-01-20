import React, { useState } from "react";
import "./styles/registrationStyles.css";
import Tilt from "react-parallax-tilt";

const Registration = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="registration-container ">
      <div className="slider-thumb two ">
        <Tilt>
          <div
            className={`wrapper ${
              isSignUp ? "animated-signin" : "animated-signup"
            }`}
          >
            <div className="form-container sign-up">
              <form action="#">
                <h2>Register</h2>
                <div className="form-group">
                  <input type="text" required />

                  <label htmlFor="">Team Name</label>
                </div>
                <div className="form-group">
                  <input type="email" required />

                  <label htmlFor="email">Common email</label>
                </div>
                <div className="form-group">
                  <input type="text" required />

                  <label htmlFor="">Common number</label>
                </div>
                <div className="form-group">
                  <input type="text" required />

                  <label htmlFor="username">Member 1</label>
                </div>
                <div className="form-group">
                  <input type="text" required />

                  <label htmlFor="username">Member 2</label>
                </div>

                <div className="form-group">
                  <input type="text" required />

                  <label htmlFor="username">Member 3</label>
                </div>
                <div className="form-group">
                  <input type="password" required />

                  <label htmlFor="password">password</label>
                </div>
                <div className="form-group">
                  <input type="password" required />

                  <label htmlFor="">confirm password</label>
                </div>
                <button type="submit" className="btn">
                  sign up
                </button>
                <div className="link">
                  <p>
                    You already have an account ?
                    <button className="signin-link" onClick={toggleForm}>
                      sign in
                    </button>
                  </p>
                </div>
              </form>
            </div>
            <div className="form-container sign-in">
              <form action="#">
                <h2>login</h2>
                <div className="form-group">
                  <input type="text" required />

                  <label htmlFor="">Team Name</label>
                </div>
                <div className="form-group">
                  <input type="email" required />

                  <label htmlFor="">Common email</label>
                </div>
                <div className="form-group">
                  <input type="password" required />

                  <label htmlFor="">password</label>
                </div>
                <div className="forgot-pass">
                  <a href="#">forgot password?</a>
                </div>
                <button type="submit" className="btn">
                  login
                </button>
                <div className="link">
                  <p>
                    Don't have an account ?
                    <button className="signup-link" onClick={toggleForm}>
                      sign up
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Registration;
