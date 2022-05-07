import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
             <div>
            <div className='notFound-img'>
            <img src="" alt="" />
            </div>
            <div className='notFoundContainer'>
            <h1>OOPS !</h1>
            <h3>404 - Page Not Found</h3>
            <p>The page you're looking for might have been move or deleted</p>
            </div>
        </div>
        </div>
    );
};

export default NotFound;