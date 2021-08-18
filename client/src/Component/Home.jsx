import React from 'react'
import {Link} from 'react-router-dom'
import GetUsersMeal from './GetUsersMeal'
import "./css/home.css"

const Home = () => {
    return (
        <div>
        <div className="topnav">
            <Link to="addmeals">Add Meal</Link>
            <Link to="Logout">Logout</Link>
                </div>
                <div className="container1">
            <GetUsersMeal/>
            </div>
        </div>
    )
}

export default Home
