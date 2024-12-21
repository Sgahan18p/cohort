const fs= require('fs');

// sync

// fs.writeFileSync('./test2.txt','hello pupu'); //creating a file
// fs.appendFileSync('./test2.txt',"new line added"); //creating a file
// const result = fs.readFileSync('./test2.txt','utf-8'); //read a file
// console.log(result);
let directory = 'C:\\Users\\sgaha\\OneDrive\\Desktop\\cohort\\practice';
var file = fs.readdirSync(directory);
console.log(file);

//async

// fs.writeFile('./test2.txt',"hello pupu\n", (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file written successfully")
//     }
// }); //creating a file


// fs.appendFile('./test2.txt',"new line added again",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("append successfully ")
//     }
// })

// fs.readFile('./test2.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })

