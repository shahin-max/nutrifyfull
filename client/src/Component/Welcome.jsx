import React from 'react'
import { Link } from 'react-router-dom'
import './css/welcome.css'
function Welcome() {
    return (
        <div>
        <div className = "topnav" >
        <Link to ="/Register">Register</Link>
            <Link to ="/Login">Login</Link>
        </div>
        <div className= "quote">
        <span><pre>It is health that is real wealth,and not pieces of gold and silver.By[MAHATMA GANDHI]</pre></span>
        </div>
    </div>
    )
}









export default Welcome
