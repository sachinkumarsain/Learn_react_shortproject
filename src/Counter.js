import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)

    function increase(){

        if(count<10)setCount(count + 1)
    }
    function decrease(){

        if(count>0)setCount (count - 1)
    }

  return (
    <>
    <div>
        <button onClick={increase}>Increment</button>
        <p>{count}</p>
        <button onClick={decrease}>Decrement</button>
    </div>
    
    </>
  )
}

export default Counter