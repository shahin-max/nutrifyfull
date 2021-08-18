import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import "./css/login.css" 

function Login() {
    const history=useHistory();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    

    const loginUser=async(e)=>{
        e.preventDefault();
        const res= await fetch("/auth/login",{
         method:"POST",
    headers:{
        "Content-Type":"application/json"

    },
    body:JSON.stringify({
        email,
        password
    })

})
const data =res.json()
if(res.status=== 400 || !data)
{
    window.alert("invalid Login");
    console.log("invalid Login")
}
else
{
    window.alert("valid Login");
    console.log("valid Login")
    history.push("/home")
}


}   







    return (
        <div>
 
        <div className= "topnav" >
            <Link to ="/Register">Register</Link>
        </div>
        <div className ="container">
        <h1>Login</h1>
            <form method="POST">
                <label>Email</label>
                <input type ="email" name ="email"
                value={email} onChange={(e)=>setEmail(e.target.value)}  autoComplete="false"   id ="email"/>
                <br/>


                <label>Password</label>
                <input type ="password" name ="password"     
                value={password} onChange={(e)=>setPassword(e.target.value)}   autoComplete="false" id ="password"/>
                <br/>
                
                <button type ="submit" name ="signin" onClick={loginUser}>Login</button>

            </form>

            </div>            
        </div>
    )
}

export default Login
