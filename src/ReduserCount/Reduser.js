import React, { useReducer } from 'react'
 const initialstate=0;
const reduser=(state,action)=>{

  switch(action){
    case"increment":
    return state+1
    case"decrement":
    return state-1
    default:
      return state
  }
}

function Reduser() {
  const[count,dispatch]=useReducer(reduser,initialstate)
  return (
    <>
    
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <p>{count}</p>
    
    </>
  )
}

export default Reduser