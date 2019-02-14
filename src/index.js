import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createStore, bindActionCreators } from 'redux';
import { reducer } from './reducer';
import * as actions  from './actions';

import Notes from './components/notes'
import Header from './components/header';
import AddNote from './components/addNote'

const store = createStore(reducer);
const { dispatch } = store; 
const { add, delOne, delAll, delDone, check } = bindActionCreators(actions, dispatch); 

store.subscribe(()=>{
  update();   
})


export default class Todo extends React.Component{

    constructor(props) {
        super(props);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDeleteDoneNotes = this.handleDeleteDoneNotes.bind(this);
      }

    // get data from input 
    handleAddNote(e) {
        e.preventDefault();
        const note = e.target.elements.note.value.trim();
        const array = store.getState();

        let noteTextFromStore = ""

        if (!note) {
          alert('Enter valid value to add item');
        } else {array.forEach(element => {
          if (note === element.text){
            noteTextFromStore = element.text;
          } 
        });
        if(noteTextFromStore === note){
          alert("This note is already on the list");
        } else {
          e.target.elements.note.value = "";
          add(note);
        }
        }
      }

      handleInputChange(event, note) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        note.isChecked = value;
        check(note);
      }

     // delete one note
     handleDeleteNote(noteToRemove) {
       delOne(noteToRemove);
     }

     // delete done notes
     handleDeleteDoneNotes() {       
      delDone();
    }

     // delete notes
     handleDeleteAll() {
      delAll();
    }

    render(){
        return <div>
                    <Header />
                    <AddNote handleAddNote={this.handleAddNote}/>
                    <Notes store={store.getState()} 
                           handleDeleteNote={this.handleDeleteNote}
                           handleDeleteAll={this.handleDeleteAll}
                           handleInputChange={this.handleInputChange}
                           handleDeleteDoneNotes={this.handleDeleteDoneNotes}/>
               </div>
    }
}

function update(){
  ReactDOM.render(
    <Todo />, document.getElementById('root'));
}

update();