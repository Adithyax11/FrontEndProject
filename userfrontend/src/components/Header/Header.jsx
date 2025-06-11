import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Gear Up with the Best Football Essentials</h2>
                <p>Browse our premium selection of jerseys, shoes, footballs, guards, and more. Designed for champions and crafted for performance — everything you need to dominate the pitch in style.</p>
                <button
                    className="btn"
                    onClick={() =>
                        document
                            .getElementById('explore-menu')
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Header;
