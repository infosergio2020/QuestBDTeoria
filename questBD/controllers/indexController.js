require('dotenv').config()
var Pregunta = require('../models/preguntas');

module.exports = {
    list_preguntas:(req,res,next)=>{
        console.log("realizando busqueda por categoria: ",req.body.categoria);
        Pregunta.find({categoria: req.body.categoria},(err,elements)=>{
            if(err){
                res.send(err.errors);
            }
            else{
                res.send(elements);
            }
        });
    }
}