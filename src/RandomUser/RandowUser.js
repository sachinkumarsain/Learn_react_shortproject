import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RandowUser() {

    const[userData , setUserData] = useState({})
    const[random , setRandom] = useState(false)

    useEffect(()=>{
        axios.get("https://randomuser.me/api/")
        .then((result)=>{
            setUserData({...result.data.results[0]})
            setRandom(false)
        })
    },[random])

    function handleRandom(){
        setRandom(true)
    }
    console.log(userData)

  return (
    <>
    <div className='wapper'>
         <div className='box'>
            <img src={userData.picture.large} ></img>
            <h2>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</h2>
            <button onClick={handleRandom}>Random User</button>
         </div>
    </div>
    </>
  )
}

export default RandowUser