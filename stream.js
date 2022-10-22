//stream are used to write and read the data from one file to another.
// using the stream library, we have this option
//it also extended the eventEmitter class
//there are four types of streams

//readable 
//writeable 
//duplex
//transform 

//example 
const {writeFileSync}=require('fs');
for(let i =0;i<1000;i++){
    const f=writeFileSync('./content/result.txt',`hi i am ramendra mishra and this is the result `,{flag:'a'});
}

//now the event can be used as 
const{createReadStream}=require('fs');
const stream=createReadStream('./content/result.txt');
stream.on('data',(result)=>{
    console.log(result);
})//always read data in the chunk of 64kb 

