import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <div style={{width:"100%", height:'88vh', display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div>
                <h1 style={{color:"#D80032", fontSize:'50px'}}>404 Not Found</h1>
                <p>You have been Lost!!!</p>
                <Link style={{textDecoration:'none'}} to="/"><p style={{color:"#D80032"}}>GO TO HOME</p></Link>
            </div>
        </div>
    </>
  )
}

export default Error