const express = require('express')
const app = express()
const port = process.env.PORT||8010

    const indexRouter =require('./Router/index')




                //DATABASE CONNECTED
                                        const mongoose=require('mongoose')
                                        const dotenv=require('dotenv');
const cookieParser = require('cookie-parser')
                                        dotenv.config()




                                        mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true ,useNewUrlParser: true, useFindAndModify:false  })
                                        .then(()=>{console.log("DB Connected")});

                                        mongoose.connection.on("error",err=>{
                                            console.log(err.message)
                                        });
                                    




                //Setting Up the index Router


                                            app.use(cookieParser())
                                        app.use("/",indexRouter)





    if(process.env.NODE_ENV="production"){
        app.use(express.static("client/build"))
    }



       app.listen(port, () => console.log(`Example app listening on ${port} port!`))
