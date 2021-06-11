require('dotenv').config()
var Pregunta = require('../models/preguntas');

module.exports = {
    list: (req,res,next)=>{
        Pregunta.find({},(err,preguntas)=>{
            res.render('./admin/index',{Preguntas:preguntas});
        });
    },
    create: (req,res,next)=>{
        let correcto_1 = false;
        let correcto_2 = false;
        let correcto_3 = false;
        let correcto_4 = false;

        if(req.body.result_1)
            correcto_1 = true;
        if(req.body.result_2)
            correcto_2 = true;
        if(req.body.result_3)
            correcto_3 = true;
        if(req.body.result_4)
            correcto_4 = true;

        var objPregunta = {
            categoria: req.body.categoria,
            pregunta: req.body.pregunta,
            opciones: [
                {
                    frase: req.body.opcion_1,
                    correcta: correcto_1
                },
                {
                    frase: req.body.opcion_2,
                    correcta: correcto_2
                },
                {
                    frase: req.body.opcion_3,
                    correcta: correcto_3
                },
                {
                    frase: req.body.opcion_4,
                    correcta: correcto_4
                }
            ]
        }
        if(process.env.DEBUG == "ON"){
            console.log(objPregunta);
            //console.log(req.body);
        }
        // Pregunta.create(objPregunta,(err,nuevaPregunta)=>{
        //     res.send(nuevaPregunta);
        // });
        Pregunta.add(objPregunta,(err,nuevaPregunta)=>{
            if(err){
                if(process.env.DEBUG == "ON"){
                    console.log('Errores que no me dejan agregar elemento \n',err.errors);
                    console.log(objPregunta.opciones.length);
                }
                res.render('admin/create_view',{errors:JSON.stringify(err.errors,null,2), pregunta:objPregunta});
            }
            else{
                res.redirect('/admin');
            }
        });
        // class=  errors ? "border border-danger":""
    },
    create_get: (req,res,next)=>{
        var nuevaPregunta = new Pregunta();
        console.log(nuevaPregunta.opciones.length);
        res.render('admin/create_view',{pregunta: nuevaPregunta});
    },
    update: (req,res,next)=>{
        let correcto_1 = false;
        let correcto_2 = false;
        let correcto_3 = false;
        let correcto_4 = false;

        if(req.body.result_1)
            correcto_1 = true;
        if(req.body.result_2)
            correcto_2 = true;
        if(req.body.result_3)
            correcto_3 = true;
        if(req.body.result_4)
            correcto_4 = true;

        var objPregunta = {
            categoria: req.body.categoria,
            pregunta: req.body.pregunta,
            opciones: [
                {
                    frase: req.body.opcion_1,
                    correcta: correcto_1
                },
                {
                    frase: req.body.opcion_2,
                    correcta: correcto_2
                },
                {
                    frase: req.body.opcion_3,
                    correcta: correcto_3
                },
                {
                    frase: req.body.opcion_4,
                    correcta: correcto_4
                }
            ]
        }
        if(process.env.DEBUG == "ON"){
            console.log('EL BODY');
            console.log(req.body);
            console.log('OBJETO A ALMACENAR');
            console.log(objPregunta);
            console.log('ID OBJETIVO');
            console.log(req.params.id);
        }
        Pregunta.update(req.params.id,objPregunta,(err,actualizado)=>{
            if(err){
                res.send(err);
            }
            else{
                res.redirect('/admin');
            }
        });
    },
    update_get:(req,res,next)=>{
        Pregunta.getById(req.params.id,(err,target)=>{
            if(err){
                console.log('ocurrio un error en la busqueda: ',err);
                res.redirect('/admin');
            }
            else{
                if(process.env.DEBUG == "ON"){
                    console.log('se realizo la busqueda con el id: ',req.params.id);
                    console.log("este es el objeto a modificar",target);
                }
                res.render('admin/update_view',{pregunta:target});
            }
        });
    },
    delete: (req,res,next)=>{
        // Pregunta.findByIdAndDelete(req.params.id,(err)=>{
        //     console.log(req.params.id);
        //     if(err){
        //         res.send(err);
        //     }
        //     else{
        //         res.send('OK');
        //     }
        // });
        Pregunta.deleteById(req.params.id,(err)=>{
            console.log(req.params.id);
            if(err){
                res.send(err);
            }
            else{
                res.redirect('/admin')
            }
        });
    }
}