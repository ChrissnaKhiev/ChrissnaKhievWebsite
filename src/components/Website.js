import React, { useState } from 'react';
import '../styles/Website.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from './Navbar';

export default function Website() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='siteContainer'>
            <div className='headerContainer'>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <div className='bodyContainer'>
                {renderPage()}
            </div>
            <div className='footerContainer'>
                <img src='github.svg' alt='GitHub' width="50px" height="50px" />
                <img src='linkedin.svg' alt='LinkedIn' width="50px" height="50px" />
                <img src='envelope.svg' alt='Email' width="50px" height="50px" />
                <img src='menu-burger.svg' alt='Menu' width="50px" height="50px" />
            </div>
        </div>
    )
}