import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="main-nav">
          
            <div className="menu">
                <ul>
                    <li>
                    
                    <Link to="/">Home</Link> 
                   
                    </li>
                    <li>
                   
                    <Link to="/Livescore">Livescore</Link>
                    
                    </li>

                    <li>
                   
                    <Link to="/Schedule">Schedule</Link>
                   
                    </li>
                
                    <li>
                 
                    <Link to="/Achievement">Achievements</Link>
                   
                    </li>
                    
                    
                
                    <li>
                    
                    <Link to="/Contact">Contact</Link>
                   
                    </li>
                    <li>
                 
                    <Link to="/Login">Login</Link>
                   
                    </li>

                    
                </ul>

            </div>
        </nav>
        </>
    )
}

export default Navbar







