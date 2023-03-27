import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([]);

  function addNotes(note) {
    // console.log(note);
    setNoteList(
        prevNotes => {
            return [...prevNotes, note];
        }
    );
  }

  function deleteNote(id) {
    setNoteList(
        prevNotes => {
            return (
                prevNotes.filter(
                    (note, index) => {
                        return index !== id;
                    }
                )
            );
        }
    );
  }

  return (
    <div>
      <Header />
      <CreateArea 
        addNotesRef={addNotes}
      />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {noteList.map((note, index) => 
          (
            <Note
                key={index}
                id={index}
                noteRef={note}
                onDelete={deleteNote}   
            />
          )        
      )}
      <Footer />
    </div>
  );
}

export default App;