import React, { useContext } from 'react'
import "../../styles/Navbar.css"
import { Link } from 'react-router-dom'


import { LoginContext } from '../../App'
import { deleteFromLocal } from '../../functions/localStorage'

import { useNavigate } from 'react-router-dom'

const NavbarMenu = () => {

    const { userInfo, setUserInfo } = useContext(LoginContext);
    const navigate = useNavigate();

    const logoutUser = async () => {
        deleteFromLocal('auth-token');
        deleteFromLocal('userInfo');
        setUserInfo(null);
        navigate('/login');
    }

    return (
        <>
            <nav className='nav'>
                <Link style={{ textDecoration: 'none', color: "#fff" }} to='/'><h1 className='nav-h1'>E-Bay <sub className='nav-sub'></sub></h1></Link>

                <div className="nav-ul">
                    <Link style={{ textDecoration: 'none' }} to="/products"><li className="nav-li">Products</li></Link>

                    {
                        userInfo !== null ? (userInfo.name !== null && <>
                            <li className='nav-logged'>Logged as {userInfo.name}</li>
                            <Link onClick={logoutUser} style={{ textDecoration: 'none' }} ><li className="nav-li" >Logout</li></Link>
                        </>
                        )

                            :
                            <>
                                <Link style={{ textDecoration: 'none' }} to="/login"><li className="nav-li">Log in</li></Link>
                                <Link style={{ textDecoration: 'none' }} to='signup'><li className="nav-li">Sign Up</li></Link>
                            </>
                    }
                    {/* <li className='nav-logged'>Logged as {userInfo.name}</li> */}


                </div>
            </nav>
        </>
    )
}

export default NavbarMenu