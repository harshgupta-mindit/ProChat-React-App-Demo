import React from 'react'
import "../../styles/Navbar.css"
import { Link } from 'react-router-dom'
const NavbarMenu = () => {
    return (
        <>
            <nav className='nav'>
                <Link style={{textDecoration:'none', color:"#fff"}} to='/'><h1 className='nav-h1'>Pro Shop <sub className='nav-sub'>by Mind IT</sub></h1></Link>
            
                <div className="nav-ul">
                    <Link style={{textDecoration:'none'}} to="/products"><li className="nav-li">Products</li></Link>
                    <Link style={{textDecoration:'none'}} to="/login"><li className="nav-li">Log in</li></Link>
                    <Link style={{textDecoration:'none'}} to='signup'><li className="nav-li">Sign Up</li></Link>
                </div>
            
            </nav>
        </>
    )
}

export default NavbarMenu