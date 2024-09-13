const{User} =require ("../../bd")


const postUser= async (username,password) =>{
    try {
        let newUser=User.create({
            username:username,
            password:password,


        })
return newUser

    } catch (error) {
        console.log("error en postuser",error.message)

    }
}


module.exports=postUser