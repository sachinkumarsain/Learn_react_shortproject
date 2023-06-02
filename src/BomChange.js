import React, { useLayoutEffect, useState } from 'react'

function BomChange() {
  const[bomWidth,setBomWidth]=useState()
  const[bomHeight,setBomHeight]=useState();
 function windowResize(){
  setBomHeight(window.innerHeight)
  setBomWidth(window.innerWidth)
 }
 useLayoutEffect(()=>{
  return window.addEventListener("resize",windowResize )
 },[])

  return (
   <>
   <p>{bomWidth}{bomHeight}</p>
   </>
  )    
}

export default BomChange