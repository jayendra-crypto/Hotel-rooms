import React, { useState } from 'react'
import logo from '../images/logo.jpg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [isOpen,setIsOpen]=useState('false');
    const handleToggle = () =>
    {    
        setIsOpen((isOpen)=>{
                  
                  return !isOpen;
        });
        
    }
    return (
        <nav className='navbar'>
            <div class="nav-center">
                <div class="nav-header">
                    <Link to="/">
                        <img src={logo} width="30%" alt="Beach Resort" />
                    </Link>
                    <button type="button" className="nav-btn" onClick={handleToggle}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen?'nav-links show-nav':'nav-links'}>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/rooms">Rooms</Link>
                     </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
