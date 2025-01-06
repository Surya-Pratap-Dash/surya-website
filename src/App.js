import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 // Import necessary routing components
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { showMenu, toggleActiveLink, scrollReveal } from './Script'; // Import custom functions

function App() {
    useEffect(() => {
        // Call the functions when the component mounts
        showMenu('nav-toggle', 'nav-menu');
        toggleActiveLink();
        scrollReveal();
    }, []); // Empty dependency array ensures these run only once after the component mounts

    return (
        <Router> {/* Wrap the app with Router */}
            <header>
                <nav>
            
                </nav>
            </header>

            {/* Define Routes for the different components */}
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
