const {DataTypes, Sequelize}=require('sequelize')
const { toDefaultValue } = require('sequelize/lib/utils')

module.exports=(sequelize)=>{
sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
     
    }, 
    
    username:{
        type:DataTypes.STRING,
defaultValue: "Nombre sin ingresar ",
        allowNull:false
     
    }, 
    password:{
        type:DataTypes.STRING,
defaultValue: "12345678",
        allowNull:false
     
    }
})
}
