const { createConnection } = require('mysql');
const conexion = require('../database/db');
//CARGO
exports.savecargo = (req, res)=>{
    const id = req.body.id;
    const car = req.body.car;
    const suel = req.body.suel;
 

    conexion.query('insert into cargo set?',{IdCargo:id, Cargo:car,Sueldo:suel},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/cargo');
        }
    });
}
//actualizar
exports.updatecargo= (req, res)=>{
    const id = req.body.id;
    const car = req.body.car;
    const suel = req.body.suel;
    conexion.query('update cargo  set? where IdCargo= ?',[{Cargo:car,Sueldo:suel},id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/cargo');
        }
    });
}
///EMPLEADO
//guardar
exports.saveempleado = function (req, res)
{
    const idemp = req.body.idemp;
    const ape = req.body.ape;
    const nom = req.body.nom;
    const dir = req.body.dir;
    const tel = req.body.tel;
    const idcar = req.body.idcar;


    conexion.query('insert into empleado set ?', {IdEmpleado:idemp,Apellidos:ape,Nombres:nom,Direccion:dir,Telefono:tel,IdCargo:idcar}, (error, results)=>
    {
        if (error) throw error;
        else
        {
            res.redirect('/empleado');
        }
    })
}
//actualizar
exports.updateempleado = (req, res)=>
{
    const idemp = req.body.idemp;
    const ape = req.body.ape;
    const nom = req.body.nom;
    const dir = req.body.dir;
    const tel = req.body.tel;
    const idcar = req.body.idcar;
    
    conexion.query('update empleado set ? where IdEmpleado = ? ',
    [{Apellidos:ape,Nombres:nom,Direccion:dir,Telefono:tel ,IdCargo:idcar},[idemp]],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/empleado');
        }
    });
}
