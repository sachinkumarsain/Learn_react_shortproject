import React, { useEffect, useState } from 'react'

function Home() {
    const[num,setNum]=useState(
        (sessionStorage.getItem("num")!==null)?
        JSON.parse(sessionStorage.getItem("num")):
        0
    )
    useEffect((e)=>{
        setNum(num+1)
    },[])
    sessionStorage.setItem("num",num.toString())
  return (
    <h1>
        {num}
    </h1>
  )
}

export default Home