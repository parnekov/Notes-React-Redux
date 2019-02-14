import React from 'react';
import Note from '../note';


const Notes = (props) => {
    return (
      <div>
        
        {props.store.length === 0 && <p className="defText">Please add a note to get started!</p>}
        {
          props.store.map((note) => (
            <Note
              key={note.text}
              note={note}
              handleDeleteNote={props.handleDeleteNote}
              handleInputChange={props.handleInputChange}
              checked={note}
            />
          ))
        }
        <button className="removeButton" onClick={props.handleDeleteAll}>Delete All Notes</button>
        <button className="removeButton" onClick={props.handleDeleteDoneNotes}>Delete Done Notes</button>
      </div>
      
    );
  };

export default Notes;