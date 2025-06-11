import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();
    const { getTotalCartAmount, token, setToken, setCartItems } = useContext(StoreContext);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        window.location.reload();
    };

    return (
        <div className="navbar">
            <Link to="/" className="logo-combo">
                <img src={assets.logo} alt="Kick-Off" className="logo" />
                <span>Kick-Off</span>
            </Link>
            {location.pathname === "/" && (
                <ul className="navbar-menu">
                    <Link
                        to="/"
                        onClick={() => setMenu("home")}
                        className={menu === "home" ? "active" : ""}
                    >
                        Home
                    </Link>
                    <a
                        href="#explore-products"
                        onClick={() => setMenu("shop")}
                        className={menu === "shop" ? "active" : ""}
                    >
                        Shop
                    </a>
                    <a
                        href="#footer"
                        onClick={() => setMenu("contact")}
                        className={menu === "contact" ? "active" : ""}
                    >
                        Contact
                    </a>
                </ul>
            )}
            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Cart" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign Up</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="Profile" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}>
                                <img src={assets.bag_icon} alt="Orders" />
                                My Orders
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="Logout" />
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
