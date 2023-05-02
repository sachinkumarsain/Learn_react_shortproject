import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Product() {
const[product,setProduct]=useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((result) => {
      
      setProduct(result.data.products)
      
    })
  }, [])

  console.log(product)
  return (
    <>
       {
        product.map((r,index)=>{
        if(r.id<=15){
          return(
            <div className='sachin'>
              <h1>{r.title} <AcUnitIcon/> </h1>
             
              <h2>{r.brand}</h2>
              <img src={r.images[0]}></img>

            </div>
          )
        }
        })
       }
    </>
  )
}

export default Product