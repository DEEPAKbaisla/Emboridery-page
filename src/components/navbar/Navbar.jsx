import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll';
import './nav.css'
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';



const Navbar = () => {


    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = '0';
        }
        setMenuOpen(true);
    };

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = '-350px';
        }
        setMenuOpen(false);
    };

    return (
        <>
            <div id="nav">
                <div className="links">
                    <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
                    <Link to="works" smooth={true} duration={500} className="nav-link">Work</Link>
                    <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
                </div>

                <div className="navbar">
                    {!menuOpen && (
                        <img src={menu_open} className='nav-open' alt="Open menu" onClick={openMenu} tabIndex={0} role="button" aria-label="Open menu" />
                    )}
                    <ul ref={menuRef} className='nav-menu'>
                        <img src={menu_close} className='nav-close' alt="Close menu" onClick={closeMenu} tabIndex={0} role="button" aria-label="Close menu" />
                        <li>
                            <Link to="home" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="works" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>Work</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="nav-link" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar;
