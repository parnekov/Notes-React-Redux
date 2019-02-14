import React from 'react';

class Note extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: this.props.note.text
    }
  }


  render(){
    return (
      <div id="note">
      <input id="check" name="isDone" type="checkbox" checked={this.props.note.isChecked} onChange={(event)=>{
        this.props.handleInputChange(event, this.props.note);
      }} />
        <span id="noteText">{this.props.note.text}</span>
        <button className="removeButton" onClick={(e) => { this.props.handleDeleteNote(this.props.note); }}>Remove</button>
      </div>
    );
  }
};

export default Note;


//checked={this.props.handleInputChange}


