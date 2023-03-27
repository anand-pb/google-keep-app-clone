import React from "react";

function Note(props) {
    
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.noteRef.title}</h1>
      <p>{props.noteRef.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;