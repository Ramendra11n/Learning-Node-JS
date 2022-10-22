const express= require('express');
const app =express();
console.log(express());
const {readFileSync}=require('fs');

app.use(express.static('./navbar-app'));
const homePage=readFileSync('02-express-tutorial/navbar-app/index.html','utf-8');
app.get('/',(req,res)=>{
    res.send(homePage);
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>page not found </h1>')// method to access all the files that are not arbritarily asked .

});

app.listen(5000);