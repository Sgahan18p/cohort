/**
 You need to create an express HTTP server in Node.js which will handle the logic of a file server.
- Use built in Node.js `fs` module
The expected API endpoints are defined below,
1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
Example: GET http://localhost:3000/files
2. GET /file/:filename - Returns content of given file by name
    Description: Use the filename from the request path parameter to read the file from `./files/` directory
    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
Testing the server - run `npm run test-fileServer` command in terminal
*/

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const directoryPath = 'C:/Users/sgaha/OneDrive/Desktop/cohort/week2/nodejs/files';

function handleRequest(req,res){
    fs.readdir(directoryPath, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        res.json({ files: result });
    });
    
}

function read(name, res) {
    const Path = path.join(directoryPath, name);
    try {
        if (!fs.existsSync(Path)) {
            return res.status(404).json({ error: 'File not found' });
        }

        return fs.readFileSync(Path, 'utf-8');
    } catch (error) {
        console.error('Error reading file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

function handleRequest1(req, res) {
    var name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: 'File name is required' });
    }

    var data = read(name, res);

    if (data) {
        res.json({ fileContent: data });
    }
}
app.get('/file', handleRequest);
app.get('/filename', handleRequest1);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
