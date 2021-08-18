const express = require("express");
const router = express.Router();
const Meal=require('../Model/Meal')
const {Authenticate} =require('../Controller/auth')




router.get("/mealinfo",Authenticate,(req, res) => {
res.send(req.rootUser)
}

)



router.post('/addmeals',Authenticate,async(req,res)=>{

const {user_Id,mealname,mealtype,calorie} =req.body
const meal =new Meal({user_Id,mealname,mealtype,calorie})
const MealAdded=await meal.save()
if(MealAdded){
    res.status(201).json('Meal Added Successfully')
}

}
)



router.get("/getusersmeal",Authenticate,async(req,res)=>{
const User =req.rootUser
try{
const meal=await Meal.find({user_Id:User._id}).sort({Date:-1})
res.send(meal)
if(!meal){
    res.status(500).json("NO Meals Found")
}
}
catch(err){
    console.log(err)
}
})


router.put("/updatemeal",Authenticate,async(req,res)=>{
    const {_id,newmealname,newmealtype,newcalorie}=req.body
    try{
            Meal.findById(_id,((error,Updatemeal)=>{
                Updatemeal.mealname=newmealname
                Updatemeal.mealtype=newmealtype
                Updatemeal.calorie=newcalorie
            Updatemeal.save()    
            }))

    }
    catch(err){console.log(err)}
    res.send("Meal updated");

})



router.delete('/delete/:id',async(req,res)=>{
    const id =req.params.id
    await Meal.findByIdAndRemove(id).exec()
    res.send("meal deleted")
})




module.exports=router