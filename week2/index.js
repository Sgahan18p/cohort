const express = require('express')
var bodyParser=require('body-parser')
const app = express()
const port = 3000
let numberOfRequest=0;

 function middleware1(req, res, next){
    numberOfRequest++;
    console.log(numberOfRequest);
    // res.send("error form the middleware ")
    next();
 }
// app.use(middleware1);
app.use(bodyParser.json())

function calculateSum(counter){
    var sum=0;
    for (var i=0;i<counter;i++){
        sum+=i;
    }
    return sum;
}
function calculateMul(counter){
    var mul=1;
    for (var i=1;i<counter;i++){
        mul*=i;
    }
    return mul;
}
 
function handleFirstRequest(req , res){
    var counter=req.headers.counter;
    var calculatedSum=calculateSum(counter);
    var calculatedMul=calculateMul(counter);
    
        var answerObject={
            sum:calculatedSum,
            mul:calculatedMul
        }
        res.status(200).send(answerObject)
    

}

app.get('/show', handleFirstRequest)


function started(req ,res){
    console.log(`App listening on port ${port}`);
}
app.listen(port, started)
