const fs=require('fs')
const path=require('path')
const dirname=path.join(__dirname,'crud')
const filepath=`${dirname}/apple.txt`
//writing a file 
// fs.writeFileSync(filepath,'this is a newly created file','utf-8')
//updating the file 
// fs.appendFile(filepath,'i am appending the data into the file ',(err)=>{
// if(!err)console.log('file has been updated')
// })
//renaming
// fs.rename(filepath,`${dirname}/new-name.txt`,(err)=>{
//      if(!err)console.log('new name has been given');
// })
fs.unlink(`${dirname}/new-name.txt`,(err)=>{
    if(!err){
        console.log('file has been deleted')
    }
})