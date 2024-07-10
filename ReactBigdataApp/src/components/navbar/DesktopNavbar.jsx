import React from "react";

const DesktopNavbar = () => {

    return (
        <header className="desktop-header">
            <nav className="desktop-nav">
                <h1>MasterEcommerce</h1>
                <a href="#" className='page-link'>
                    <p className='page-link-title'>home</p>
                </a>
                <a href="#" className='page-link'>
                    <p className='page-link-title'>product</p>
                </a>
                <a href="#" className='page-link'>
                    <p className='page-link-title'>About</p>
                </a>
                <a href="#" className='page-link'>
                    <p className='page-link-title'>contact</p>
                </a>
                <form >
                    <input type="search" placeholder="Search here!"/>
                </form>
            </nav>
        </header>
    );
};

export default DesktopNavbar;
