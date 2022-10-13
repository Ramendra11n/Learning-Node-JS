const road=require('path');
console.log(road.sep)
//help to join the path of the file
const filepath=road.join('/content/','subfolder','text.txt');
console.log(filepath);
//gives the last file in the filepath 
//base 
const base =road.basename (filepath);
console.log(base);
//function t find the realtive path in a file
const absolute=road.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute) 