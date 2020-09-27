import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todolist = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="container" key={todo.id}>
          <ul className="list-group">
            <li
              className="list-group-item mt-2"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {todo.content}
            </li>
          </ul>
        </div>
      );
    })
  ) : (
    <p className="text-center"> You have no todos</p>
  );
  return <div className="todos">{todolist}</div>;
};

export default Todos;
