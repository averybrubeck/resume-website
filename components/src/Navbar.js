import React from 'react';
import home from './pages/home'
import projects from './pages/projects'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="MainComponents.js">Home</a></li>
                <li><a href="Projects.js">Projects</a></li>
            </ul>
           
        </nav>
    );
}

export default Navbar;
