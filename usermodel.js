const mongoose= require('mongoose');
const sch= new mongoose.Schema({
    
 
    patientName:String,
    email:String,
    fileName:String,
    patientId:String,
    report:{data:Buffer,
    contentType:String},
 
    });
module.exports=mongoose.model('schema',sch);