const server=require('./src/app')
const {conexion}=require('./src/bd')

conexion.sync({force:false, alter:true})
.then(()=>{
    server.listen(3001,()=>{
        console.log("Servidor Conectado Exitosamente")
    })
})
