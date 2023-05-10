import React, { useReducer } from 'react'

const starting=20;
const reduser=(state,action)=>{
    switch(action){
        case"inc":
        return state+1
        case"dec":
        return state-1
        default:
            return state
    }
}
function ReduserAge() {
    const[ageCount,dispatch]=useReducer(reduser,starting)
  return (
    <>
    <button onClick={()=>dispatch("inc")}>Increment</button>
    <button onClick={()=>dispatch("dec")}>Decrement</button>
    <h2>Age:-{ageCount}</h2>
    </>
  )
}

export default ReduserAge