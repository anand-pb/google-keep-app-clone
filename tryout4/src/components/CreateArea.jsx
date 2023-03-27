import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [rowSize, setRowSize] = useState(1);
  const [zBln, setZBln] = useState(false);
  const [inputBln, setInputBln] = useState(false);

  function handleClickNote() {
    setRowSize(3);
    setZBln(true);
    setInputBln(true);
  }

  return (
    <div>
      <form className="create-note">
        { inputBln && <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>} 

        <textarea
          name="content"
          onClick={handleClickNote}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        //   rows="3"
          rows={rowSize}
        />
        {/* <button onClick={submitNote}> */}
        {/* <Zoom in=true> */}
        <Zoom in={zBln}>
        <Fab onClick={submitNote}>
            {/* Add */}
            <AddIcon />
        </Fab>
        </Zoom>
        {/* </button> */}
      </form>
    </div>
  );
}

export default CreateArea;