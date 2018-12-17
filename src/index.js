import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import id from "shortid";

import "bootstrap/dist/css/bootstrap.css";

function reducer(oldState, newState) {
  return { ...oldState, ...newState };
}

const boards = [
  { id: 1, title: "todo" },
  { id: 2, title: "in progress" },
  { id: 3, title: "done" }
];

function App() {
  const [{ tasks }, setTasks] = useReducer(reducer, {
    tasks: [{ id: id.generate(), boardId: 1, name: "haha" }]
  });
  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        {boards.map(board => (
          <div className="card mb-4 shadow-sm" key={board.id}>
            <div className="card-header">{board.title}</div>
            <div className="card-body">
              {tasks.map(
                task =>
                  task.boardId === board.id && (
                    <div className="card mb-4 shadow-sm" key={task.id}>
                      <div className="card-body" key={task.id}>
                        {task.name}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
