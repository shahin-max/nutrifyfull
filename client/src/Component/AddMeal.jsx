import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

const AddMeal = () => {

const history = useHistory();
const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/meal/mealinfo', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);


    



const [meal,setMeal]=useState({
    mealname:"",mealtype:"",calorie:""
        });


let name ,value ;
const handelInputs=(e)=>{
    name=e.target.name
    value=e.target.value


    setMeal({...meal,[name]:value})
    
}




const postData=async(e)=>{
    e.preventDefault();

console.log(userData._id)
const user_Id=userData._id
const { mealname,mealtype,calorie }= meal
const res = await fetch("/meal/addmeals",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"

    },
    body:JSON.stringify({
        user_Id:user_Id,mealname:mealname,mealtype:mealtype,calorie :calorie ,   })
})


const data =await res.json();

console.log(res.cookies)
if(res.status=== 422 || !data)

{
    window.alert("Meal NOT sdded");
    console.log("invalid registration")
}
else
{
    window.alert("Meal added");    
    console.log("valid registration")
    history.push("/home")
}

}


return (
        <div>
        <form method = "post">
        <label>
            Mealname
        </label>
        <input type = "text"  name ="mealname" value={meal.mealname} onChange={handelInputs} id ="mealname"/>
        
        <label> Mealtype
        </label>
        <input type = "text"  name ="mealtype" value={meal.mealtype} onChange={handelInputs} id ="mealtype"/>
        
        <label>
            Calorie
        </label>
        <input type = "number"  name ="calorie" value={meal.calorie} onChange={handelInputs} id ="calorie"/>
        
        
        <button type ="submit" onClick={postData}>Add your Meal</button>
        
        </form>
            
        </div>
    )
}

export default AddMeal
