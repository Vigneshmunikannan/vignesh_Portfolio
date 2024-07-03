// NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';
// import './NotFoundPage.css'; // Import CSS for styles

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="not-found-animation2"></div>
                <h2>Oops! Page Not Found</h2>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="return-button">Return to Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
