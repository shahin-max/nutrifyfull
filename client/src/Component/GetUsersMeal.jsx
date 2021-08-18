import React,{useEffect,useState} from 'react'
import {useHistory} from "react-router-dom"
import "./css/GetUsersMeal.css"

import axios from 'axios'




const GetUsersMeal = () => {

const history = useHistory();
const [meal, setMeal] = useState([]);

    const GetUsersMeals = async () => {
        try {
            const res = await fetch('/meal/getusersmeal', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setMeal(data);

            
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
          
        } catch (err) {
            console.log(err);
            history.push('/home');
        }
    }
    

    useEffect(() => {
        GetUsersMeals();
    }, []);


const Updmeal=(_id)=>{
   
    const newmealname=prompt("Enter The Meal name")
    const newmealtype=prompt("Enter The Meal type")
    const newcalorie=prompt("Enter The Calories")
    axios.put("/meal/updatemeal",{_id,newmealname,newmealtype,newcalorie})  
  
}


const deldmeal=(_id)=>{
    axios
      .delete(`/meal/delete/${_id}`)
   
}








return (
<div>
<h1>Your all meal are </h1>
<table>
<tr>
      <th>Meal Name</th>
      <th>Meal Type</th>
      <th>Calorie</th>
      <th>Date</th>
      <th>update</th>
      <th>Delete</th>
      
    </tr>
</table>




{meal.map((meals)=>{return(<div>



<table >
    

    <tr>

      <td>{meals.mealname}</td>
      <td>{meals.mealtype}</td>
      <td>{meals.calorie}</td>
      <td>{meals.Date}</td>   
     <td> <button  onClick={()=>Updmeal(meals._id)}>update</button> </td>
      <td><button onClick={()=>deldmeal(meals._id)}>delete</button>   </td>
    </tr>
  </table> 
  </div>

   )})}
</div>

)}
export default GetUsersMeal
