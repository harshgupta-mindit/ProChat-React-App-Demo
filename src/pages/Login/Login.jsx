import React from 'react';

import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-main">
        <div className="login-body">
          <h1 className='login-h1'>Log-in</h1>

          <form className='login-form' action="">
            <label className='login-email-label' htmlFor=""></label>
            <input className='login-email-input' type="text" placeholder='email' />
            <label className='login-password-label' htmlFor=""></label>
            <input className='login-password-input' type="text" placeholder='password' />

            <input className='login-submit-btn' type="submit" value="Login" />
          </form>


          <p style={{textAlign:'center', marginTop:"30px"}}>Don't have an account ? <Link to='/register' style={{color:'#D80032'}} >Register</Link></p>

        </div>
      </div>
    </>
  )
}

export default Login