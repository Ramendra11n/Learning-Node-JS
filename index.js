const mongoose=require('mongoose');
const express=require('express');
const fs =require('fs');
const fileupload=require('express-fileupload');
//laya apna schema apne pass

const model=require('./schemas/usermodel');
const cors=require('cors');
const app=express();
app.use(fileupload());
app.use(cors());
app.use(express.json());


// app.use(express.json());
//yeh kiya database se connect
const MONGO_URL='mongodb://localhost:27017/testing';

mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connection successful")
}).catch((err)=>{
    console.log(err.message+"this is the error message")
})



//destination to store the file
// const upload=multer({dest:'uploads'})
app.get('/',(req,res)=>{
    
    res.status(200).send('Home page');
})

app.post('/api/fileupload',async(req,res)=>{
  console.log('in the server');
  console.log( 'the request object is ', req.files);

    // if(!req.file){
    //     res.status(500).send('<h1>error h bhai</h1>');
    // }
    // else{
     
     const image =req.files.report;
     console.log(image.name);;
     //save karenge jo user ka unique quality hoga uske basis pe
     
   
     const directory=__dirname + '/uploads/' + image.name;
     image.mv(directory);
     console.log()
     const fdata=fs.readFileSync(directory);
     console.log(fdata);
     
//pictures
//document html, json, pdf
//video
//
    var obj= {
      
        patientName:req.body.name,
        patientId:req.body.email,
        fileName:image.name,
        patientId:req.body.name+req.body.email,
        report:{
            data:fdata,
            type:"file",

        }
                
    }
    const saved=await model.create(obj);
        console.log(saved);
        
        res.status(200).send('Done')
        
    }
    

 );



 //server
 app.listen(2000,()=>{
    console.log('server started at the 2000');
 })
 //works to do -NodeJS
//temporary folder clear kardo
//nayi wali laado
//retrieve ka
//python se fileupload ki request
//download ka option




