const express =require("express");
const router =express.Router();
const {registration,login}=require("../Controller/auth")


    
    router.post('/register',registration)
    router.post('/login',login)





    router.post('/logout',(req,res)=>{
        res.clearCookie('jwtoken',{path})
    })







module.exports=router;

