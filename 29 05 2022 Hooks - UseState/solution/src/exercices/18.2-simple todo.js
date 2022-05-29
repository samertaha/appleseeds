import React, { useState, useEffect } from 'react';

function TextMoreLess() {
  const [todos, setTodos] = useState([
    { name: 'CSS', completed: true },
    { name: 'JavaScript', completed: true },
    { name: 'Learn React', completed: false },
    { name: 'Learn mongoDB', completed: false },
    { name: 'Learn Node JS', completed: false },
  ]);

  useEffect(() => {
    console.log(todos);
  }, []);
  function toggle(e, i) {
    let x = e.target;
    x.textContent = x.textContent === 'X' ? String.fromCharCode(10004) : 'X';
    let newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  }
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <h4 key={index}>
            {todo.completed ? todo.name : <del>${todo.name}</del>}{' '}
            <a href='#' onClick={(e) => toggle(e, index)}>
              {todo.completed ? 'X' : String.fromCharCode(10004)}
            </a>
          </h4>
        );
      })}
    </div>
  );
}

export default TextMoreLess;
