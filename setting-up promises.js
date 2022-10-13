const{readFile}=require('fs');
const getTextpath=(path)=>{
 return new Promise((resolve,reject)=>{
    readFile(path,'utf-8',(err,res)=>{
        if(err){
            reject(err);
        }
        if(res) {
            resolve(res);
        }
    })
 })
}
// getTextpath('./content/subfolder/text.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err));

const start=async()=>{
    const first=await getTextpath('./content/subfolder/text.txt');
    console.log(first);
    console.log('hi');
}
start();
//the util library
const util =require('util');
const readFilePromise =util.promisify(readFile);