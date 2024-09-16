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
                        </Link></li>  {/* to be converted as work exp */}
                        <li><Link to="/Skils" className="nav-link" href="#">skils</Link></li>
                        <li><Link to="/portfolio" className="nav-link" href="#">portfolios</Link></li>
                        <li><Link to="/contactform" className="nav-link" href="#">contact me</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navigationbar;