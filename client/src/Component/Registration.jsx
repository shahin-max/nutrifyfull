import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./css/Register.css"
function Registration() {
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });


let name ,value ;
const handelInputs=(e)=>{
    name=e.target.name
    value=e.target.value


    setUser({...user,[name]:value})
    
}




const postData=async(e)=>{
    e.preventDefault();



const { name,email,phone,password,cpassword }= user
const res = await fetch("/auth/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"

    },
    body:JSON.stringify({
        name:name,email:email,phone:phone,password:password,cpassword:cpassword
    })
})


const data =await res.json();
if(res.status=== 422 || !data)
{
    window.alert("invalid registration");
    console.log("invalid registration")
}
else
{
    window.alert("valid registration");
    console.log("valid registration")
    history.push("/Login")
}

}



    return (

        <div>           
         <div className= "topnav" >
        <Link to ="/Login">Login</Link>
         </div>

             <div className="container">
                
    
        <h1>Registration</h1>
            <form method="POST">

    


               <label>Name</label>
                <input type ="text" name ="name"     value={user.name}   onChange={handelInputs}    id ="name"/>
                <br/>
                <label>Email</label>
                <input type ="email" name ="email"   value={user.email}   onChange={handelInputs}    id ="email"/>
                <br/>
                <label>Mobile no</label>
                <input type ="number" name ="phone"  value={user.phone}   onChange={handelInputs}    id ="phone"/>
                <br/>
                <label>Password</label>
                <input type ="password" name ="password"     value={user.password}   onChange={handelInputs}    id ="password"/>
                <br/>
                <label>Confirm Password</label>
                <input type ="password" name ="cpassword"    value={user.cpassword}   onChange={handelInputs}    id ="cpassword"/>
                
                <br/>
                <button type ="submit" name ="signup" value ="signup"   onClick={postData} id ="signup">register</button>

            </form>
            </div>
        </div>
    )
}

export default Registration
