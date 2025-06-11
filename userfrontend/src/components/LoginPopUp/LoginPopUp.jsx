import { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopUp.css';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign In");

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>
                <div className="login-popup-inputs">
                    {currState !== "Sign In" && <input type="text" placeholder="Your Name" required />}
                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">
                    {currState}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to terms and privacy policy.</p>
                </div>
                {currState === "Sign In" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Sign In")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
