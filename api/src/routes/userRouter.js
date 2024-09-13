const userRouter=require("express").Router()

const postUser = require("./controllers/postUser")

userRouter.post("/user",async (req,res) =>{
    const {username,password} =req.body
    try {
        let newUser =await postUser(username,password)
        newUser? res.status(200).json({state:"aprobado"}):res.status(404).json({state:"denegado"})



    } catch (error) {
        console.log("error en ruta postUser",error.message)
    }
})


module.exports=userRouter