import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Logout = () => {
    const history =useHistory()
    useEffect(()=>{
        fetch('/auth/logout',{
             method: "GET",
        headers: {
            Accept: "appllication/json",
            "Content-Type": "application/json"
        },
        credentials: "include"

        }).then((res)=>{
            history.push('/')})
    })
          return (
        <div>
        Successfully logged out    
        </div>
    )
}

export default Logout
