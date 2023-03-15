const conexion = require('./database/db');
const express = require('express');
const router = express.Router();
module.exports = router;
const crud = require('./controllers/crud.js');
router.get('/', (req,res)=>
{
    res.render('index');
})
//modulo CARGO
module.exports = router;
router.get('/cargo',(req,res)=>{
    conexion.query('select * from cargo',(error, results)=>{
        if(error){
            throw error+'aea';
        }else{
            res.render('cargo',{results:results}); 
        }
    });
});

//ruta para registrar 
router.get('/cargonew',(req,res)=>{
    res.render('cargonew');
});

router.post('/savecargo',crud.savecargo);


//ruta para actualizar 
router.post('/updatecargo',crud.updatecargo);
router.get('/cargoedit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('select * from cargo where IdCargo=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('cargoedit',{user:results[0]}); 
        }
    });
});

//eliminar
router.get('/cargodelete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('delete from cargo where IdCargo=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/Cargo'); 
        }
    });
});
///empleado
router.get('/empleado',(req,res)=>{
    conexion.query('select * from empleado',(error, results)=>{
        if(error){
            throw error+'aea';
        }else{
            res.render('empleado',{results:results}); 
        }
    });
});
//REGISTRA
router.get('/empleadonew',(req,res)=>{
    res.render('empleadonew')
})

router.post('/saveempleado',crud.saveempleado)
//EDITAR
router.get('/empleadoedit/:idemp',(req,res)=>{
    const idemp = req.params.idemp;
    conexion.query('select * from empleado where IdEmpleado=?',[idemp],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('empleadoedit',{user:results[0]}); 
        }
    });
});
router.post('/updateempleado',crud.updateempleado)
///eliminar
router.get('/empleadodelete/:idemp',(req,res)=>{
    const idemp = req.params.idemp;
    conexion.query('delete from empleado where IdEmpleado=?',[idemp],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/empleado'); 
        }
    });
});

module.exports = router;






