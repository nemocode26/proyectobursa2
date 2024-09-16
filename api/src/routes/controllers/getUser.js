const {User}=require("../../bd") 

const getUser=async()=>{
    //console.log("Controller getUser")
    try {
        let allUser=await User.findAll()
      //  console.log("controller getUser", allUser)
        return allUser
    } catch (error) {
        console.log("error en el controlador getUser",error.message)
    }
}

module.exports=getUser











