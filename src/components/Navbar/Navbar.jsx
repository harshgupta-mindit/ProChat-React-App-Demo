import React from 'react'
import "../../styles/Navbar.css"
const NavbarMenu = () => {
    return (
        <>
            <nav className='nav'>
                <h1 className='nav-h1'>Pro Shop <sub className='nav-sub'>by Mind IT</sub></h1>
            
                <ul className="nav-ul">
                    <li className="nav-li">Products</li>
                    <li className="nav-li">Log in</li>
                    <li className="nav-li">Sign Up</li>
                </ul>
            
            </nav>
        </>
    )
}

export default NavbarMenu