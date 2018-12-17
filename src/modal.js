import React, { useState } from "react";

function Modal({ isShow, onCancel, onConfirm }) {
  const [text, setText] = useState("");
  return (
    <div
      className={`modal fade${isShow ? " show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add todo task</h5>
            <button className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input onChange={e => setText(e.target.value)} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancel}>
              Close
            </button>
            <button className="btn btn-primary" onClick={() => onConfirm(text)}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
