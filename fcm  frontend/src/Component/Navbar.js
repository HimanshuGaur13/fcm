import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/globalNav.css';

const Navbar = () => {
  return (
    <div>
        <nav className = 'navbar'>
        <div className = 'navbar-container'>
        <div className = 'navbar-brand'>
        </div>
            <ul  className = 'navbar-nav-left'>
                <li>
                    <Link to={'/Blog'}>Blog</Link>
                </li>
                <li>
                    <Link to={'/Read'}>Read</Link>
                </li>
            </ul>
            
            </div>
        </nav>
    </div>
  )
}

export default Navbar