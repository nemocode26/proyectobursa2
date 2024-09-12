const express=require('express')
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const cors=require('cors')

require('./bd.js')
//rutas

const server=express()
server.name="API"

server.use(bodyParser.urlencoded({ extended:true, limit: '50mb'}));
server.use(bodyParser.json({limit: '50mb'}));
server.use(cookieParser());
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Cache-Control', 'no-store');
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);

    if (req.method === 'OPTIONS') {
        console.log('Respondiendo a solicitud OPTIONS');
        res.sendStatus(200);
    } else {
        next();
    }
});

server.use(express.json())
server.use(cors())
//routers

server.use((err,req,res)=>{
    const status=err.status || 500
    const mensaje=err.message || err
    console.log(err)
    res.status(status).send(mensaje)
})

module.exports=server






























