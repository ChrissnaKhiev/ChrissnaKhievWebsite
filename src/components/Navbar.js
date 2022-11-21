import React from 'react';
import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className='navContainer'>
            <a href='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home'}>Home</a>

            <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About'}>About</a>

            <a href='#projects' onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects'}>Projects</a>

            <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume'}>Resume</a>
        </div>
    );
}

export default Navbar;