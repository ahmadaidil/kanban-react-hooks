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

  function updateTask(taskId, type) {
    const newTasks = tasks.map(task => {
      if (type === "next" && task.boardId < 3) {
        task.boardId += 1;
      } else if (type === "prev" && task.boardId > 1) {
        task.boardId -= 1;
      }
      return task;
    });
    setTasks({ tasks: newTasks });
  }

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
                        {board.id > 1 && (
                          <button onClick={() => updateTask(task.id, "prev")}>
                            prev
                          </button>
                        )}
                        {board.id < 3 && (
                          <button onClick={() => updateTask(task.id, "next")}>
                            next
                          </button>
                        )}
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
