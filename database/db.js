const mysql = require('mysql');
const conexion =mysql.createConnection({
    host:'localhost',
    port: '3309',
    database:'empleado',
    user:'root',
    password:''
})
conexion.connect((error)=>{
    if(error){
        console.log('Error:'+error);
    }
    else{
        console.log('conexion exitosa');
    }
});

module.exports = conexion;
