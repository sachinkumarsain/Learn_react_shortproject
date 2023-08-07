import axios from 'axios'
import React, { useEffect, useState } from 'react'


function TypeCode() {
    const [data , setData]= useState({})
    const[value , setValue]=useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${value}`)
        .then((result)=>{
            setData(result.data)
        })
    },[value])
    console.log(data)
  return (
    <>
    <div className='Wapper'>
        <label>Put a Number</label>
        <input type='number' placeholder='Put anumber' value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <div className='typeCode'>
          <h1>{`${data.id}${" : "}${data.title}`}</h1>
          <img src={data.url}></img> 
        </div>
    </div>
    </>
  )
}

export default TypeCode