import { useState } from 'react';
import logo from "../../assets/logo.png";
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <header className="container">
            <div className="page-header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                    <div className="menu-icon" onClick={handleMenuToggle} aria-expanded={menuOpen} aria-controls="main-nav">
                        <i className="fas fa-bars"></i>
                    </div>
            </div>
                <nav id="main-nav" className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
