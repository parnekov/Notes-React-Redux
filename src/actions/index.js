export const add = (note="")=>({
type: 'ADD',
payload: note
});

export const delOne = (note)=>({
type: 'DEL_ONE',
payload: note
});

export const delDone = ()=>({
    type: 'DEL_DONE',
    });

export const delAll = ()=>({
type: 'DEL_ALL'
});

export const check = (note="")=>({
    type: 'CHECK',
    payload: note
    });
  
