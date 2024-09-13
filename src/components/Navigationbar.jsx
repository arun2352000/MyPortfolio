import React from 'react';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
    return (
        <div>
            <header className="flex justify-between px-2 bg-primary">
                <a href="#">logo</a>
                <div>
                    <ul className='flex'>
                        <li><Link to="/" className="nav-link" href="#">
                        home
                        </Link></li>
                        <li><Link to="/About" className="nav-link" href="#">
                        about
                        </Link></li>
                        <li>skils</li>
                        <li>portfolios</li>
                        <li>blog</li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navigationbar;