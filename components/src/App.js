import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MainContent from './MainComponents';
import Footer from './Footer';
import './App.css';
import projects from './pages/projects';

function App() {
    let Component 
        switch (window.location.pathname) {

            case "/":
                Component = <mainComponents />
                break;
        
            case "/projects":
                Component = <projects />
                break;
        }
        
}
  {  
    return (
        <>
            {Component}
            <App />
            </>           
          
             
    );
}

export default App;
