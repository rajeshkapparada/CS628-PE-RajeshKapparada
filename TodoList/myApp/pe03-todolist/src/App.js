import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';

//Function to add Task
function App() {
  const [todos, setTodos] = useState([
  ]);

  const addTodo = text => {
    const Todos = [...todos, { text }];
    setTodos(Todos);
  };
//Function to remove todo list accordint to index
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  //Display the App component
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My ToDo List</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
