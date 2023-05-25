import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { randomUser } from './Slice';
import Store from './Store ';


function Home() {
  const dispatch=useDispatch();
  const intial=useSelector((state)=>{
    return state.randomUser
  })
  function handlerchange(e) {
    dispatch(randomUser(e))

  } 
  return (
    <>
    <button onClick={(e)=>handlerchange(e)}>RandomUser</button>
    {
      Object.keys(intial.data).length>0
      ?
      <div className='randomData'>
        <img src={intial.data.picture.large} alt={intial.data.picture.first}></img>
        <h2>{intial.data.name.first+" "+intial.data.name.last}</h2>
        <p>{intial.data.email}</p>
      </div>
      :" "
    }
    </>
  )
}

export default Home