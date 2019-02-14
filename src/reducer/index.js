
export const reducer = (state = setDefaultValueForState(), action) => {
    switch (action.type) {
        case 'ADD':
            const note = noteReducer(undefined, action);
            state.push(note);
            updateStorage(state);
            return state;

        case 'CHECK':
            const updateNote = noteReducer(undefined, action);
            state = updateState(state, updateNote);
            updateStorage(state);
            return state;
        
        case 'DEL_ONE':
            state = state.filter((note) => action.payload !== note)
            updateStorage(state);
            return state;

        case 'DEL_DONE':
            state = state.filter((note) => note.isChecked !== true)
            updateStorage(state);
            return state;

        case 'DEL_ALL':
            state = [];
            updateStorage(state); 
            return state

        default: 
        return state;
    }
}

const noteReducer = (note = {}, action) =>{
    switch (action.type) {
        case 'ADD':
            note = {
                text: action.payload,
                isChecked: false
            }
            return note;

        case 'CHECK':         
            note = {
                text: action.payload.text,
                isChecked: action.payload.isChecked
            }
            return note;
    
        default: 
        return note;
    }
}


function setDefaultValueForState() {    
      const json = localStorage.getItem('notes');
      const notes = JSON.parse(json);
      return notes ? notes: [];
  }

function updateStorage(state) {
        const json = JSON.stringify(state);
        localStorage.setItem('notes', json);
      }

function updateState(state, note){
          return state.map((element)=>{
              if(element.text === note.text){
                  element = note;
                  return element;
              } else {
                  return element;
              }
          });
      }