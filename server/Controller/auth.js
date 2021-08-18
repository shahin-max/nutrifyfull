const User =require("../Model/UserModel.js")
const bcrypt =require("bcrypt")
const jwt=require('jsonwebtoken')
require("dotenv").config()





                                                   // registration function
        exports.registration=async(req,res)=>{
        
            const { name,email,phone,password,cpassword }=req.body;
        
            if(!name || !email || !phone || !password ||!cpassword){
                res.status(422).json({error:"plz fill the form correctly"})
            };

            try{
                
            const userExist=await User.findOne({email:email})
            if (userExist) {
                        res.status(422).json({error:" email allready exists"})
                    }
            else if(password != cpassword){res.status(422).json({error:" password should  be matching to the confirm password"})
        }
            else{        
            const user =new User({name,email,phone,password,cpassword})

            const  userRegistered = await user.save()
                if(userRegistered){
                    res.status(201).json({message:"Successfully created"})
                }
            }
        }
        catch(err){
        console.log(err)}
         }
        







exports.login = async (req, res) => {
            try {
                let token;
                const { email, password } = req.body;
        
                if (!email || !password) {
                    return res.status(400).json({error:"Plz Filled the data"})
                }
        
                const userLogin = await User.findOne({ email: email });
        

        
                if (userLogin) {
                    const isMatch = await bcrypt.compare(password, userLogin.password);
        
                   
        
                if (!isMatch) {
                    res.status(400).json({ error: "Invalid Credientials " });
                } else {

                    token = await userLogin.generateAuthToken();
                    console.log(token);
        
                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly:true
                    });
                    
                    res.json({ message: "user Signin Successfully" });
                }
                } else {
                     res.status(400).json({ error: "Invalid Credientials " });
                }
        
            } catch (err) {
                console.log(err);
            }
        };

                                                // login function
//
//exports.login=async(req,res)=>{
//    try{
//    let token;
//        const {email,password}=req.body
//    if (!email||!password){
//        return res.status(401).json({message:"please  fill the form correctly"})
//    }
//    const userLogin = await User.findOne({email:email})
//
//    
//    if (userLogin){
//        const isMatch=await bcrypt.compare(password,userLogin.password)
//         token =await userLogin.generateAuthToken()
//        console.log(token)
//            res.cookie("jwttoken",token,{
//                expires:new Date(Date.now()+258920000),
//                httpOnly:true
//            }
//        if(!isMatch){
//            res.status(400).json({error:"invalid Crednetials"})
//        }
//        
//        else{
//            res.json({message:"user signin successfull"})
//        
//    }
//    else{
//        res.status(400).json({error:"invalid Crednetials"})
//    }
//    
//    
//    }
//    catch(err){console.log(err)}    
//}
//

exports.Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRETKEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { throw new Error('User not Found') }
        
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
        
    } catch (err) {
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
}


