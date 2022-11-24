import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/Website.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from './Navbar';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import envelope from '../images/envelope.svg';

export default function Website() {
    return (
        <Router>
            <div className='siteContainer'>
                <div className='headerContainer'>
                    <Navbar />
                </div>
                <div className='bodyContainer'>
                    <Routes>
                        <Route path="/chrissna-khiev-website" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
                <div className='footerContainer'>
                    <a href='https://github.com/ChrissnaKhiev'>
                        <img src={github} alt='GitHub' width="50px" height="50px" />
                    </a>
                    <a href='https://www.linkedin.com/in/chrissnakhiev/'>
                        <img src={linkedin} alt='LinkedIn' width="50px" height="50px" />
                    </a>
                    <a href='mailto:chrissnakhiev@gmail.com'>
                        <img src={envelope} alt='Email' width="50px" height="50px" />
                    </a>
                </div>
            </div>
        </Router>
    )
}