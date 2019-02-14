import React, { Component } from 'react';

class AddNote extends Component {
    render() {
      return (
        <div>
          <form onSubmit={this.props.handleAddNote}>
            <input id="mainInput" type="text" name="note" />
            <button className="addButton">Add Note</button>
          </form>
        </div>
      );
    }
  }

export default AddNote;
