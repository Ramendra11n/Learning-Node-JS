//os module 
const os=require('os')//not ./ as laready built in 
//info about current user
const user=os.userInfo();
console.log(user);
 //return the system uptimes in second
 console.log(`the system uptime is ${os.uptime}`);
 //some more properties
 const current={
    name :os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
 }
console.log(current);