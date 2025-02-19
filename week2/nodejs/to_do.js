/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)
  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123
    - For any other route not defined in the server return 404
  Testing the server - run `npm run test-todoServer` command in terminal
 */

  const bodyParser = require("body-parser");
  const express = require("express");
  const fs = require("fs");
  const app = express();
  const port = 3000;
  const path= require('path');
  const cors= require('cors');
  app.use(bodyParser.json());
  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));
  
  
  let todo = [];
  let id = 1;
  const filepath = "todo.json";
  
  // Load todo data from file
  function loadTodo() {
    if (fs.existsSync(filepath)) {
        const data = fs.readFileSync(filepath, 'utf-8');
        todo = JSON.parse(data);
        if (todo.length > 0) {
            const ids = todo.map(t => t.id).filter(id => typeof id === 'number');
            id = ids.length > 0 ? Math.max(...ids) + 1 : 1;
        } else {
            id = 1;
        }
    } else {
        id = 1;
    }
}


  
  
  function saveTodos() {
    fs.writeFileSync(filepath, JSON.stringify(todo, null, 2), "utf-8");  
  }
  
  function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  
  function removeAtIndex(arr, id) {
    const index = findIndex(arr, id);
    if (index !== -1) {
      arr.splice(index, 1);
      return true;
    }
    return false;
  }
  
  function allTodo(req, res) {
    res.json(todo);
  }
  
  function getTodoById(req, res) {
    const index = findIndex(todo, parseInt(req.params.id));
    if (index !== -1) {
      res.status(200).json(todo[index]);
    } else {
      res.status(404).send("id not exists !!!");
    }
  }
  
  function createTodo(req, res) {
    const newTodo = {
      id: id++,
      title: req.body.title,
      description: req.body.description,
    };
    todo.push(newTodo);
    saveTodos();  
    res.status(200).json(newTodo);  
  }
  
  function deleteTodo(req, res) {
    const removed = removeAtIndex(todo, parseInt(req.params.id));
    if (removed) {
      saveTodos();  
      res.status(200).send("Deleted successfully");
    } else {
      res.status(404).send("ID not found");
    }
  }
  function updatedTodo(req, res) {
    const index = findIndex(todo, parseInt(req.params.id));
    if (index !== -1) {
      todo[index].title = req.body.title || todo[index].title;
      todo[index].description = req.body.description || todo[index].description;
      saveTodos();  
      res.status(200).json(todo[index]);
    } else {
      res.status(404).send("ID not found");
    }
  }

  loadTodo();
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'todo.html'));
  });
  
  app.get("/todo", allTodo);
  app.get("/todo/:id", getTodoById);
  app.post("/todo", createTodo);
  app.delete("/todo/:id", deleteTodo);
  app.put("/todo/:id", updatedTodo);

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  