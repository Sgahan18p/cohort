

function logResponseBody(jsonBody){
    console.log(jsonBody);

}
function callback(result){
    result.json().then(logResponseBody)
}

var sendObj={
    method:"post"
};

fetch("http://localhost:3000/show?counter=10",sendObj).then(callback)