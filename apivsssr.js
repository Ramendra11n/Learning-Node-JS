/*when we use node js then we are legft eityh using two choices  that are  delier the adta through the 
api or through the the ssr
api stand forn the application progmamming interface and 
ssr : stands for the server side rendering.
api 
uses the lock json and the sr uses the template to send the data.


In node JS when we say that we are setting up an api we basically meanthat we are setting up a http interface for the data interchange
 data is send using the json that bascially stand for thr javascript object notation
we use the method that is called res.json();

 in ssr the data is stored using the template  and we use the method that is called \
 res.render();
*/

const express =require('express');
const app=express();
app.get('/',(req,res)=>{
    res.json([{name:'ramendra'},{name  :'achala'}]);;

})

app.listen (5000,()=>{
    console.log('server is listening on port 5000...');
});