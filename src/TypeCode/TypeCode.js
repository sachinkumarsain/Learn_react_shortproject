import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./TypeCode.css"


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
    <div className='wapper'>
        <label>Put a Number</label>
        <input type='number' placeholder='Put anumber' value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <div className='typeCode'>
          <h1><span>{data.id}</span><span>{data.title}</span></h1>
          <img src={data.url}></img> 
        </div>
    </div>
    </>
  )
}

export default TypeCode