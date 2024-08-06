import React from 'react';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/Home" className="nav-link" href="#">
                    home
              </Link></li>
                    <li>about</li>
                    <li>skils</li>
                    <li>work</li>
                    <li>blog</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigationbar;