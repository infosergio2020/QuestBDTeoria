const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const preguntaSchema = new Schema({
  author: ObjectId,
  categoria:{
    type:String,
      required: [true, 'Debe asignar una categoria'],
      default:"elija una categoria"
  },
  pregunta: {
      type:String,
      required: [true, 'La pregunta es obligatoria'],
      default:"complete este campo con una pregunta"
    },
  opciones:{
      type: [{
        frase:{
          type:String,
          required:[true,'Debe asignar una opcion']
        },
        correcta:{
          type:Boolean,
          default: false
        }
      }]
    }
});

/*CRUD Basico BEGIN***************************************/
preguntaSchema.statics.getAll = function (callback) {
  return this.find({}, callback);
}

preguntaSchema.statics.add = function (pregunta, callback) {
  return this.create(pregunta, callback);
}

preguntaSchema.statics.getById = function (id, callback) {
  return this.findOne({ _id: id }, callback);
}

preguntaSchema.statics.update = function (id, objPregunta, callback) {
  return this.findOneAndUpdate({ _id: id }, objPregunta, { returnNewDocument: true, runValidators: true, context: 'query' }, callback); // alternative use findByIdAndUpdate
}

preguntaSchema.statics.deleteById = function (id, callback) {
  return this.deleteOne({ _id: id }, callback);
}
/*************************CRUD Basico END******************/

module.exports = mongoose.model('Pregunta', preguntaSchema);