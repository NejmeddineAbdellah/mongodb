const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let todos = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: true },
];

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: 'Todo Not exist' });
  }

  res.json(todo);
});

app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed || false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const { title, completed } = req.body;
  todos[todoIndex] = { ...todos[todoIndex], title, completed };

  res.json(todos[todoIndex]);
});

app.delete('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== todoId);

  res.json({ message: 'Todo deleted' });
});

app.get('/api/info', (req, res) => {
  const serverInfo = {
    serverName: 'Express Server',
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString(),
  };

  res.json(serverInfo);
});

app.get('*', (req, res) => {
  res.send('Hello,from default route!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
