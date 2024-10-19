import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header className='flex text-2xl justify-between px-5 py-5 bg-primary'>
            <a className='font-bold px-10' href="#">AP</a>
            <nav className='hidden md:block'>
            <ul className='flex text-white'>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Project</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
            </nav>
           {toggleMenu && <nav className='block md:hidden '>
            <ul onClick={() => setToggleMenu(!toggleMenu)}  className='flex flex-col text-black mobile-nav'>
            <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Project</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
            </nav>} 
            <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><FiAlignJustify className='text-white' /></button>
            
        </header>
    );
};

export default Header;