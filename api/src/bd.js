const{Sequelize, Op }=require('sequelize')
const fs=require('fs')
const path=require('path');
const { error } = require('console');
const { connect } = require('http2');

const sequelize=new Sequelize(`postgres://postgres:Losjimmyenbasani@localhost:5432/proyectoBursa`)

const basename = path.basename ( __filename);
const modelDefiners = [];
//lee todos los archivos en la carpeta models, le quita los ultimos 3 caracteres y los guarda en el models definers  

fs.readdirSync( path.join(__dirname, '/models')) 
    .filter((file) => (file.indexOf('.') !== 0 ) && ( file !== basename ) && (file.slice(-3) === '.js'))
    .forEach((file) => {modelDefiners.push(require(path.join(__dirname, '/models', file)))
    })
//la linea 17 lo uqe hace es agarrar a todos los modelos y le inyecta un sequelize, le manda un parametro 

modelDefiners.forEach( model => model(sequelize));
//lo que hacen estas lineas agarra todos los modelos y la primer letra la cambia a mayuscula 

let entries = Object.entries(sequelize.models);
let capEntries = entries.map((entry) => [entry [0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capEntries);

const{User}=sequelize.models 

//el autentike es para que se ejecute por eso no va nada adentro 
// los metodos se pueden usar como promesas 

sequelize.authenticate()
    .then(()=>console.log("Se ha conecto correctamente "))
    .catch(error=>console.log(error))

    module.exports={
        ...sequelize.models,
        sequelize,
        conexion:sequelize,
        Op,
    }
    
