const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.use(express.json());

function readTodos() {
    const data = fs.readFileSync('./db.json', 'utf8');
    return JSON.parse(data).todos;
}

function writeTodos(todos) {
    fs.writeFileSync('./db.json', JSON.stringify({ todos }, null, 2));
}

app.get('/todos', (req, res) => {
    const todos = readTodos();
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todos = readTodos();
    const newTodo = { id: todos.length + 1, task: req.body.task, status: false };
    todos.push(newTodo);
    writeTodos(todos);
    res.json(newTodo);
});

app.put('/todos/updateEven', (req, res) => {
    const todos = readTodos();
    todos.forEach(todo => {
        if (todo.id % 2 === 0 && todo.status === false) {
            todo.status = true;
        }
    });
    writeTodos(todos);
    res.json(todos);
});

app.delete('/todos/deleteTrue', (req, res) => {
    let todos = readTodos();
    todos = todos.filter(todo => todo.status === false);
    writeTodos(todos);
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
