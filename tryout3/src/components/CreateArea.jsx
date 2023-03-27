import React, {useState} from "react";

function CreateArea(props) {

//   const tempObj = {};  
//   const [noteTitle, setNoteTitle] = useState("");
//   const [noteContent, setNoteContent] = useState("");
  const [note, setNote] = useState(
    {
        title: "",
        content: ""
    }
  );

//   function handleTitleChange(event) {
//     let currtitle = event.target.value;
//     setNoteTitle(currtitle);
//   }

//   function handleContentChange(event) {
//     let currContent = event.target.value;
//     setNoteContent(currContent);
//   }

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(
        prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        }
    );
  }
  
  function submitNote(event) {
    props.addNotesRef(note);
    setNote({
        title: "",
        content: ""
    });    
    event.preventDefault();
  }
  
//   function addNote() {
//     tempObj[noteTitle] = {noteContent};
//     let currNote = tempObj;
//     setNote(currNote);
//     // console.log(currNote);
//   }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote}>
            Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;