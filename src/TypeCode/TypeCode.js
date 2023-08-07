import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TypeCode() {
    const [data , setData]= useState([])
    const[inputValue , setInputValue]=useState("")
    useEffect(()=>{
        axios.get(` https://jsonplaceholder.typicode.com/photos/${inputValue} `)
        .then((result)=>{
            setData(result.data)
        })
    },[inputValue])
    console.log(data)
  return (
    <>
    <div className='Wapper'>
        <label>Put a Number</label>
        <input placeholder='Put anumber' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
        <div className='typeCode'>
           {
            data.map((item)=>{
             return <div className='typeCodeContent'>
                    <h2>{item.title}</h2>
              </div>
            })
           }
        </div>
    </div>
    </>
  )
}

export default TypeCode