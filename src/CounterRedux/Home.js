import React from 'react'
import { increment ,decrement} from './Slices.js/counterSlice'
import { useDispatch,useSelector } from 'react-redux'
function Home() {
    const dispatch=useDispatch()
    const count =useSelector((state)=>{return state.counter.count})
  return (
    <>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <p>{count}</p>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default Home