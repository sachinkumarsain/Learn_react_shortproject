import { Select } from '@mui/material'
import React, { useState } from 'react'

function CountryCities() {
    // const [data, setdata] = useState([])
    // const [cities ,setCities]=useState([])
    const[country,setCountry]=useState("")

    const countries = [
        {
            Country: "India",
            code: "IN",
            Cities: ["Dehli", "mumbai", "channai"]
        },
        {
            Country: "China",          
            code: "CN",
            Cities: ["Foshan", "Hunan", "Beijing"]
        },
        {
            Country: "Australia",
            code: "AU",
            Cities: ["Sidney", "Cenberra", "Perth"]
        },
        {
            Country: "Sri Lanka",
            code: "SL",
            Cities: ["Colombo", "Candy", "jaffna"]
        }

    ]
    

    // console.log(country)
    return (
        <>
            <div className='.wapper'>
                <div className='box'>
                    <h1>Country</h1>
                    {/* <select placeholder='Choose Country' onChange={(e) => { setCountry(e.target.value) }} >

                        <option value="">Choose Country</option>
                        <option value="India">India</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Australia">Australia</option>
                        <option value="China">China</option>
                    </select> */}
                    <select selected onChange={(e)=>{setCountry(e.target.value) }}>
                        <option  key="index" value="Choose Country"  disabled>Choose Country</option>
                    {
                    
                    countries.map((data, index)=>{
                        return(
                           
                                <option key={index} value={data.Country}>{data.Country}</option>
                            
                        )
                    })  
                  }
                    </select>
                    <select>
                        {
                              countries.map((data)=>{
                                        return(
                                            data.Cities.map((city)=>{
                                                
                                                    if(data.Country===country){
                                                        return(
                                                            <option value={city}>{city}</option>
                                                        )
                                                    }
                                                
                                               
                                            })
                                             
                                        )
                                    }
                                     
                                    
                                
                              )
                        }
                    </select>
                

                </div>
            </div>
        </>
    )
}

export default CountryCities