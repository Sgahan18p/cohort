/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todos = [];
    }

    // Adds a new todo to the list
    add(todo) {
        if (!todo) {
            console.error('Todo cannot be empty!');
            return;
        }
        this.todos.push(todo);
    }

    // Removes a todo at the specified index
    remove(index) {
        if (index < 0 || index >= this.todos.length) {
            console.error('Invalid index!');
            return;
        }
        this.todos.splice(index, 1);
    }

    // Updates a todo at the specified index
    update(index, newTodo) {
        if (index < 0 || index >= this.todos.length) {
            console.error('Invalid index!');
            return;
        }
        if (!newTodo) {
            console.error('New todo cannot be empty!');
            return;
        }
        this.todos[index] = newTodo;
    }

    // Returns all todos
    getAll() {
        return this.todos;
    }

    // Gets a specific todo by index
    get(index) {
        if (index < 0 || index >= this.todos.length) {
            console.error('Invalid index!');
            return null;
        }
        return this.todos[index];
    }

    // Clears all todos
    clear() {
        this.todos = [];
    }
}

// Example usage:
const myTodos = new Todo();

myTodos.add('Learn JavaScript');
myTodos.add('Build a project');
console.log('All Todos:', myTodos.getAll()); // ['Learn JavaScript', 'Build a project']

myTodos.update(1, 'Build a ToDo App');
console.log('Updated Todos:', myTodos.getAll()); // ['Learn JavaScript', 'Build a ToDo App']

console.log('Get Todo at index 1:', myTodos.get(1)); // 'Build a ToDo App'

myTodos.remove(0);
console.log('After Removing Index 0:', myTodos.getAll()); // ['Build a ToDo App']

myTodos.clear();
console.log('After Clearing Todos:', myTodos.getAll()); // []
