const userRouter=require("express").Router()

const getUser = require("./controllers/getUser")
const postUser = require("./controllers/postUser")

userRouter.get("/user",async (req,res) =>{
    //cuando hagas estas cosas prestale muvha atencion al metodo que usas, porque get y post usan la misma ruta, se pueden hacer rutas mas complejas, aveces tenes que tener cuidado en como las ordenas, porque vos pedis una ruta, y se fija por partes se fija la primera parte 
    
    try {
        let allUser=await getUser() 
//        console.log("ruta user", allUser)
        allUser? res.status(200).json(allUser):res.status(404).json({state:"denegado"})


    } catch (error) {
        console.log("error en ruta postUser",error.message)   
    }
})


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